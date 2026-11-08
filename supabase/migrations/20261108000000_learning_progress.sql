-- Progresso do aluno: respostas dos quizzes gravadas no Supabase.
-- Idempotente: pode ser executada mais de uma vez (SQL Editor ou `supabase db push`).

-- Gabarito das atividades. Fica SEM acesso para anon/authenticated:
-- só a função registrar_tentativa (security definer) lê esta tabela.
create table if not exists public.atividades (
  id text primary key,
  aula_id text not null,
  resposta_correta smallint not null check (resposta_correta >= 0),
  total_alternativas smallint not null check (total_alternativas >= 2),
  check (resposta_correta < total_alternativas)
);

-- Histórico de tentativas de cada aluno (uma linha por resposta enviada).
create table if not exists public.tentativas_atividades (
  id bigint generated always as identity primary key,
  usuario_id uuid not null references auth.users (id) on delete cascade,
  atividade_id text not null references public.atividades (id) on delete cascade,
  aula_id text not null,
  resposta smallint not null,
  acertou boolean not null,
  criado_em timestamptz not null default now()
);

create index if not exists tentativas_atividades_usuario_idx
  on public.tentativas_atividades (usuario_id, atividade_id);

alter table public.atividades enable row level security;
alter table public.tentativas_atividades enable row level security;

revoke all on table public.atividades from anon, authenticated;
revoke all on table public.tentativas_atividades from anon, authenticated;
grant select on table public.tentativas_atividades to authenticated;

-- O aluno só enxerga as próprias tentativas. Não existe INSERT/UPDATE/DELETE
-- direto: toda escrita passa pela função abaixo, que corrige a resposta no servidor.
drop policy if exists tentativas_select_proprias on public.tentativas_atividades;
create policy tentativas_select_proprias
  on public.tentativas_atividades
  for select
  to authenticated
  using ((select auth.uid()) = usuario_id);

create or replace function public.registrar_tentativa(p_atividade_id text, p_resposta integer)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  atividade public.atividades%rowtype;
  resposta_certa boolean;
  momento timestamptz;
begin
  if current_user_id is null then
    raise exception 'Sessão não encontrada. Faça login novamente.';
  end if;

  select * into atividade
    from public.atividades
    where id = p_atividade_id;

  if not found then
    raise exception 'Atividade não encontrada.';
  end if;

  if p_resposta is null or p_resposta < 0 or p_resposta >= atividade.total_alternativas then
    raise exception 'Alternativa inválida.';
  end if;

  -- Atividade já concluída: não grava de novo (evita inflar o histórico).
  select t.criado_em into momento
    from public.tentativas_atividades as t
    where t.usuario_id = current_user_id
      and t.atividade_id = atividade.id
      and t.acertou
    order by t.criado_em
    limit 1;

  if found then
    return jsonb_build_object('acertou', true, 'ja_concluida', true, 'criado_em', momento);
  end if;

  resposta_certa := (p_resposta = atividade.resposta_correta);

  insert into public.tentativas_atividades (usuario_id, atividade_id, aula_id, resposta, acertou)
  values (current_user_id, atividade.id, atividade.aula_id, p_resposta, resposta_certa)
  returning criado_em into momento;

  return jsonb_build_object('acertou', resposta_certa, 'ja_concluida', false, 'criado_em', momento);
end;
$$;

revoke all on function public.registrar_tentativa(text, integer) from public, anon;
grant execute on function public.registrar_tentativa(text, integer) to authenticated;

-- Gabarito atual (mesmos ids e ordem de alternativas de src/data/mockData.js).
insert into public.atividades (id, aula_id, resposta_correta, total_alternativas) values
  ('atividade-1', 'aula-1', 1, 4),
  ('atividade-2', 'aula-2', 2, 4)
on conflict (id) do update
  set aula_id = excluded.aula_id,
      resposta_correta = excluded.resposta_correta,
      total_alternativas = excluded.total_alternativas;

notify pgrst, 'reload schema';
