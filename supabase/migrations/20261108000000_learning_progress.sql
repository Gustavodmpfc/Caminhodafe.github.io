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
    -- AULA 1
  ('atividade-1', 'aula-1', 1, 4),
  ('atividade-2', 'aula-1', 2, 4),
  ('atividade-3', 'aula-1', 1, 4),
  ('atividade-4', 'aula-1', 2, 4),
  ('atividade-5', 'aula-1', 1, 4),
  ('atividade-6', 'aula-1', 2, 4),
  ('atividade-7', 'aula-1', 0, 4),

  -- AULA 2
  ('atividade-8', 'aula-2', 1, 4),
  ('atividade-9', 'aula-2', 2, 4),
  ('atividade-10', 'aula-2', 0, 4),
  ('atividade-11', 'aula-2', 1, 4),
  ('atividade-12', 'aula-2', 2, 4),
  ('atividade-13', 'aula-2', 1, 4),
  ('atividade-14', 'aula-2', 2, 4),

  -- AULA 3
  ('atividade-15', 'aula-3', 1, 4),
  ('atividade-16', 'aula-3', 1, 4),
  ('atividade-17', 'aula-3', 2, 4),
  ('atividade-18', 'aula-3', 1, 4),
  ('atividade-19', 'aula-3', 2, 4),
  ('atividade-20', 'aula-3', 1, 4),
  ('atividade-21', 'aula-3', 0, 4),

  -- AULA 4
  ('atividade-22', 'aula-4', 2, 4),
  ('atividade-23', 'aula-4', 1, 4),
  ('atividade-24', 'aula-4', 1, 4),
  ('atividade-25', 'aula-4', 0, 4),
  ('atividade-26', 'aula-4', 2, 4),
  ('atividade-27', 'aula-4', 1, 4),
  ('atividade-28', 'aula-4', 0, 4),

  -- AULA 5
  ('atividade-29', 'aula-5', 1, 4),
  ('atividade-30', 'aula-5', 1, 4),
  ('atividade-31', 'aula-5', 2, 4),
  ('atividade-32', 'aula-5', 2, 4),
  ('atividade-33', 'aula-5', 0, 4),
  ('atividade-34', 'aula-5', 1, 4),
  ('atividade-35', 'aula-5', 2, 4),

  -- AULA 6
  ('atividade-36', 'aula-6', 1, 4),
  ('atividade-37', 'aula-6', 2, 4),
  ('atividade-38', 'aula-6', 2, 4),
  ('atividade-39', 'aula-6', 1, 4),
  ('atividade-40', 'aula-6', 2, 4),
  ('atividade-41', 'aula-6', 0, 4),
  ('atividade-42', 'aula-6', 1, 4),

  -- AULA 7
  ('atividade-43', 'aula-7', 0, 4),
  ('atividade-44', 'aula-7', 1, 4),
  ('atividade-45', 'aula-7', 2, 4),
  ('atividade-46', 'aula-7', 1, 4),
  ('atividade-47', 'aula-7', 2, 4),
  ('atividade-48', 'aula-7', 1, 4),
  ('atividade-49', 'aula-7', 0, 4),

  -- AULA 8
  ('atividade-50', 'aula-8', 1, 4),
  ('atividade-51', 'aula-8', 1, 4),
  ('atividade-52', 'aula-8', 0, 4),
  ('atividade-53', 'aula-8', 1, 4),
  ('atividade-54', 'aula-8', 1, 4),
  ('atividade-55', 'aula-8', 2, 4),
  ('atividade-56', 'aula-8', 0, 4),

  -- AULA 9
  ('atividade-57', 'aula-9', 1, 4),
  ('atividade-58', 'aula-9', 0, 4),
  ('atividade-59', 'aula-9', 1, 4),
  ('atividade-60', 'aula-9', 0, 4),
  ('atividade-61', 'aula-9', 0, 4),
  ('atividade-62', 'aula-9', 1, 4),
  ('atividade-63', 'aula-9', 1, 4),

  -- AULA 10
  ('atividade-64', 'aula-10', 1, 4),
  ('atividade-65', 'aula-10', 1, 4),
  ('atividade-66', 'aula-10', 0, 4),
  ('atividade-67', 'aula-10', 1, 4),
  ('atividade-68', 'aula-10', 1, 4),
  ('atividade-69', 'aula-10', 2, 4),
  ('atividade-70', 'aula-10', 0, 4);

insert into public.atividades (id, aula_id, resposta_correta, total_alternativas) values
  -- AULA 11
  ('atividade-71', 'aula-11', 1, 4),
  ('atividade-72', 'aula-11', 2, 4),
  ('atividade-73', 'aula-11', 0, 4),
  ('atividade-74', 'aula-11', 3, 4),
  ('atividade-75', 'aula-11', 1, 4),
  ('atividade-76', 'aula-11', 2, 4),
  ('atividade-77', 'aula-11', 0, 4),

  -- AULA 12
  ('atividade-78', 'aula-12', 1, 4),
  ('atividade-79', 'aula-12', 2, 4),
  ('atividade-80', 'aula-12', 3, 4),
  ('atividade-81', 'aula-12', 0, 4),
  ('atividade-82', 'aula-12', 1, 4),
  ('atividade-83', 'aula-12', 2, 4),
  ('atividade-84', 'aula-12', 3, 4),

  -- AULA 13
  ('atividade-85', 'aula-13', 0, 4),
  ('atividade-86', 'aula-13', 1, 4),
  ('atividade-87', 'aula-13', 2, 4),
  ('atividade-88', 'aula-13', 3, 4),
  ('atividade-89', 'aula-13', 0, 4),
  ('atividade-90', 'aula-13', 1, 4),
  ('atividade-91', 'aula-13', 2, 4),

  -- AULA 14
  ('atividade-92', 'aula-14', 3, 4),
  ('atividade-93', 'aula-14', 0, 4),
  ('atividade-94', 'aula-14', 1, 4),
  ('atividade-95', 'aula-14', 2, 4),
  ('atividade-96', 'aula-14', 3, 4),
  ('atividade-97', 'aula-14', 0, 4),
  ('atividade-98', 'aula-14', 1, 4),

  -- AULA 15
  ('atividade-99', 'aula-15', 2, 4),
  ('atividade-100', 'aula-15', 3, 4),
  ('atividade-101', 'aula-15', 0, 4),
  ('atividade-102', 'aula-15', 1, 4),
  ('atividade-103', 'aula-15', 2, 4),
  ('atividade-104', 'aula-15', 3, 4),
  ('atividade-105', 'aula-15', 0, 4),

  -- AULA 16
  ('atividade-106', 'aula-16', 1, 4),
  ('atividade-107', 'aula-16', 2, 4),
  ('atividade-108', 'aula-16', 3, 4),
  ('atividade-109', 'aula-16', 0, 4),
  ('atividade-110', 'aula-16', 1, 4),
  ('atividade-111', 'aula-16', 2, 4),
  ('atividade-112', 'aula-16', 3, 4),

  -- AULA 17
  ('atividade-113', 'aula-17', 0, 4),
  ('atividade-114', 'aula-17', 1, 4),
  ('atividade-115', 'aula-17', 2, 4),
  ('atividade-116', 'aula-17', 3, 4),
  ('atividade-117', 'aula-17', 0, 4),
  ('atividade-118', 'aula-17', 1, 4),
  ('atividade-119', 'aula-17', 2, 4),

  -- AULA 18
  ('atividade-120', 'aula-18', 3, 4),
  ('atividade-121', 'aula-18', 0, 4),
  ('atividade-122', 'aula-18', 1, 4),
  ('atividade-123', 'aula-18', 2, 4),
  ('atividade-124', 'aula-18', 3, 4),
  ('atividade-125', 'aula-18', 0, 4),
  ('atividade-126', 'aula-18', 1, 4),

  -- AULA 19
  ('atividade-127', 'aula-19', 2, 4),
  ('atividade-128', 'aula-19', 3, 4),
  ('atividade-129', 'aula-19', 0, 4),
  ('atividade-130', 'aula-19', 1, 4),
  ('atividade-131', 'aula-19', 2, 4),
  ('atividade-132', 'aula-19', 3, 4),
  ('atividade-133', 'aula-19', 0, 4),

  -- AULA 20
  ('atividade-134', 'aula-20', 1, 4),
  ('atividade-135', 'aula-20', 2, 4),
  ('atividade-136', 'aula-20', 3, 4),
  ('atividade-137', 'aula-20', 0, 4),
  ('atividade-138', 'aula-20', 1, 4),
  ('atividade-139', 'aula-20', 2, 4),
  ('atividade-140', 'aula-20', 3, 4);

insert into public.atividades (id, aula_id, resposta_correta, total_alternativas) values

  -- AULA 21 — Quem é Jesus Cristo?
  ('atividade-141', 'aula-21', 2, 4),
  ('atividade-142', 'aula-21', 3, 4),
  ('atividade-143', 'aula-21', 0, 4),
  ('atividade-144', 'aula-21', 1, 4),
  ('atividade-145', 'aula-21', 2, 4),
  ('atividade-146', 'aula-21', 3, 4),
  ('atividade-147', 'aula-21', 0, 4),

  -- AULA 22 — O nascimento de Jesus
  ('atividade-148', 'aula-22', 1, 4),
  ('atividade-149', 'aula-22', 2, 4),
  ('atividade-150', 'aula-22', 3, 4),
  ('atividade-151', 'aula-22', 0, 4),
  ('atividade-152', 'aula-22', 1, 4),
  ('atividade-153', 'aula-22', 2, 4),
  ('atividade-154', 'aula-22', 3, 4),

  -- AULA 23 — Jesus anuncia o Reino de Deus
  ('atividade-155', 'aula-23', 0, 4),
  ('atividade-156', 'aula-23', 1, 4),
  ('atividade-157', 'aula-23', 2, 4),
  ('atividade-158', 'aula-23', 3, 4),
  ('atividade-159', 'aula-23', 0, 4),
  ('atividade-160', 'aula-23', 1, 4),
  ('atividade-161', 'aula-23', 2, 4),

  -- AULA 24 — As parábolas de Jesus
  ('atividade-162', 'aula-24', 3, 4),
  ('atividade-163', 'aula-24', 0, 4),
  ('atividade-164', 'aula-24', 1, 4),
  ('atividade-165', 'aula-24', 2, 4),
  ('atividade-166', 'aula-24', 3, 4),
  ('atividade-167', 'aula-24', 0, 4),
  ('atividade-168', 'aula-24', 1, 4),

  -- AULA 25 — Os milagres de Jesus
  ('atividade-169', 'aula-25', 2, 4),
  ('atividade-170', 'aula-25', 3, 4),
  ('atividade-171', 'aula-25', 0, 4),
  ('atividade-172', 'aula-25', 1, 4),
  ('atividade-173', 'aula-25', 2, 4),
  ('atividade-174', 'aula-25', 3, 4),
  ('atividade-175', 'aula-25', 0, 4),

  -- AULA 26 — Jesus chama discípulos
  ('atividade-176', 'aula-26', 1, 4),
  ('atividade-177', 'aula-26', 2, 4),
  ('atividade-178', 'aula-26', 3, 4),
  ('atividade-179', 'aula-26', 0, 4),
  ('atividade-180', 'aula-26', 1, 4),
  ('atividade-181', 'aula-26', 2, 4),
  ('atividade-182', 'aula-26', 3, 4),

  -- AULA 27 — O mandamento do amor
  ('atividade-183', 'aula-27', 0, 4),
  ('atividade-184', 'aula-27', 1, 4),
  ('atividade-185', 'aula-27', 2, 4),
  ('atividade-186', 'aula-27', 3, 4),
  ('atividade-187', 'aula-27', 0, 4),
  ('atividade-188', 'aula-27', 1, 4),
  ('atividade-189', 'aula-27', 2, 4),

  -- AULA 28 — Jesus e o perdão
  ('atividade-190', 'aula-28', 3, 4),
  ('atividade-191', 'aula-28', 0, 4),
  ('atividade-192', 'aula-28', 1, 4),
  ('atividade-193', 'aula-28', 2, 4),
  ('atividade-194', 'aula-28', 3, 4),
  ('atividade-195', 'aula-28', 0, 4),
  ('atividade-196', 'aula-28', 1, 4),

  -- AULA 29 — A Última Ceia
  ('atividade-197', 'aula-29', 2, 4),
  ('atividade-198', 'aula-29', 3, 4),
  ('atividade-199', 'aula-29', 0, 4),
  ('atividade-200', 'aula-29', 1, 4),
  ('atividade-201', 'aula-29', 2, 4),
  ('atividade-202', 'aula-29', 3, 4),
  ('atividade-203', 'aula-29', 0, 4),

  -- AULA 30 — Paixão, morte e ressurreição de Jesus
  ('atividade-204', 'aula-30', 1, 4),
  ('atividade-205', 'aula-30', 2, 4),
  ('atividade-206', 'aula-30', 3, 4),
  ('atividade-207', 'aula-30', 0, 4),
  ('atividade-208', 'aula-30', 1, 4),
  ('atividade-209', 'aula-30', 2, 4),
  ('atividade-210', 'aula-30', 3, 4);

insert into public.atividades (id, aula_id, resposta_correta, total_alternativas) values

  -- AULA 31 — O que é a Igreja?
  ('atividade-211', 'aula-31', 1, 4),
  ('atividade-212', 'aula-31', 2, 4),
  ('atividade-213', 'aula-31', 3, 4),
  ('atividade-214', 'aula-31', 0, 4),
  ('atividade-215', 'aula-31', 1, 4),
  ('atividade-216', 'aula-31', 2, 4),
  ('atividade-217', 'aula-31', 3, 4),

  -- AULA 32 — Pentecostes e o Espírito Santo
  ('atividade-218', 'aula-32', 0, 4),
  ('atividade-219', 'aula-32', 1, 4),
  ('atividade-220', 'aula-32', 2, 4),
  ('atividade-221', 'aula-32', 3, 4),
  ('atividade-222', 'aula-32', 0, 4),
  ('atividade-223', 'aula-32', 1, 4),
  ('atividade-224', 'aula-32', 2, 4),

  -- AULA 33 — A missão dos apóstolos
  ('atividade-225', 'aula-33', 3, 4),
  ('atividade-226', 'aula-33', 0, 4),
  ('atividade-227', 'aula-33', 1, 4),
  ('atividade-228', 'aula-33', 2, 4),
  ('atividade-229', 'aula-33', 3, 4),
  ('atividade-230', 'aula-33', 0, 4),
  ('atividade-231', 'aula-33', 1, 4),

  -- AULA 34 — A comunidade cristã
  ('atividade-232', 'aula-34', 2, 4),
  ('atividade-233', 'aula-34', 3, 4),
  ('atividade-234', 'aula-34', 0, 4),
  ('atividade-235', 'aula-34', 1, 4),
  ('atividade-236', 'aula-34', 2, 4),
  ('atividade-237', 'aula-34', 3, 4),
  ('atividade-238', 'aula-34', 0, 4),

  -- AULA 35 — A paróquia como casa da comunidade
  ('atividade-239', 'aula-35', 1, 4),
  ('atividade-240', 'aula-35', 2, 4),
  ('atividade-241', 'aula-35', 3, 4),
  ('atividade-242', 'aula-35', 0, 4),
  ('atividade-243', 'aula-35', 1, 4),
  ('atividade-244', 'aula-35', 2, 4),
  ('atividade-245', 'aula-35', 3, 4),

  -- AULA 36 — O catequista e a caminhada de fé
  ('atividade-246', 'aula-36', 0, 4),
  ('atividade-247', 'aula-36', 1, 4),
  ('atividade-248', 'aula-36', 2, 4),
  ('atividade-249', 'aula-36', 3, 4),
  ('atividade-250', 'aula-36', 0, 4),
  ('atividade-251', 'aula-36', 1, 4),
  ('atividade-252', 'aula-36', 2, 4),

  -- AULA 37 — A missa: encontro com Jesus
  ('atividade-253', 'aula-37', 3, 4),
  ('atividade-254', 'aula-37', 0, 4),
  ('atividade-255', 'aula-37', 1, 4),
  ('atividade-256', 'aula-37', 2, 4),
  ('atividade-257', 'aula-37', 3, 4),
  ('atividade-258', 'aula-37', 0, 4),
  ('atividade-259', 'aula-37', 1, 4),

  -- AULA 38 — Partes da missa
  ('atividade-260', 'aula-38', 2, 4),
  ('atividade-261', 'aula-38', 3, 4),
  ('atividade-262', 'aula-38', 0, 4),
  ('atividade-263', 'aula-38', 1, 4),
  ('atividade-264', 'aula-38', 2, 4),
  ('atividade-265', 'aula-38', 3, 4),
  ('atividade-266', 'aula-38', 0, 4),

  -- AULA 39 — O ano litúrgico
  ('atividade-267', 'aula-39', 1, 4),
  ('atividade-268', 'aula-39', 2, 4),
  ('atividade-269', 'aula-39', 3, 4),
  ('atividade-270', 'aula-39', 0, 4),
  ('atividade-271', 'aula-39', 1, 4),
  ('atividade-272', 'aula-39', 2, 4),
  ('atividade-273', 'aula-39', 3, 4),

  -- AULA 40 — Símbolos e gestos da fé católica
  ('atividade-274', 'aula-40', 0, 4),
  ('atividade-275', 'aula-40', 1, 4),
  ('atividade-276', 'aula-40', 2, 4),
  ('atividade-277', 'aula-40', 3, 4),
  ('atividade-278', 'aula-40', 0, 4),
  ('atividade-279', 'aula-40', 1, 4),
  ('atividade-280', 'aula-40', 2, 4);

insert into public.atividades (id, aula_id, resposta_correta, total_alternativas) values
  -- AULA 41 — O que são os sacramentos?
  ('atividade-281', 'aula-41', 1, 4),
  ('atividade-282', 'aula-41', 2, 4),
  ('atividade-283', 'aula-41', 3, 4),
  ('atividade-284', 'aula-41', 0, 4),
  ('atividade-285', 'aula-41', 1, 4),
  ('atividade-286', 'aula-41', 2, 4),
  ('atividade-287', 'aula-41', 3, 4),

  -- AULA 42 — Batismo: nascimento para a vida cristã
  ('atividade-288', 'aula-42', 0, 4),
  ('atividade-289', 'aula-42', 1, 4),
  ('atividade-290', 'aula-42', 2, 4),
  ('atividade-291', 'aula-42', 3, 4),
  ('atividade-292', 'aula-42', 0, 4),
  ('atividade-293', 'aula-42', 1, 4),
  ('atividade-294', 'aula-42', 2, 4),

  -- AULA 43 — Eucaristia: Jesus se dá como alimento
  ('atividade-295', 'aula-43', 3, 4),
  ('atividade-296', 'aula-43', 0, 4),
  ('atividade-297', 'aula-43', 1, 4),
  ('atividade-298', 'aula-43', 2, 4),
  ('atividade-299', 'aula-43', 3, 4),
  ('atividade-300', 'aula-43', 0, 4),
  ('atividade-301', 'aula-43', 1, 4),

  -- AULA 44 — Reconciliação: o sacramento do perdão
  ('atividade-302', 'aula-44', 2, 4),
  ('atividade-303', 'aula-44', 3, 4),
  ('atividade-304', 'aula-44', 0, 4),
  ('atividade-305', 'aula-44', 1, 4),
  ('atividade-306', 'aula-44', 2, 4),
  ('atividade-307', 'aula-44', 3, 4),
  ('atividade-308', 'aula-44', 0, 4),

  -- AULA 45 — Crisma: força do Espírito Santo
  ('atividade-309', 'aula-45', 1, 4),
  ('atividade-310', 'aula-45', 2, 4),
  ('atividade-311', 'aula-45', 3, 4),
  ('atividade-312', 'aula-45', 0, 4),
  ('atividade-313', 'aula-45', 1, 4),
  ('atividade-314', 'aula-45', 2, 4),
  ('atividade-315', 'aula-45', 3, 4),

  -- AULA 46 — Matrimônio e vocação ao amor
  ('atividade-316', 'aula-46', 0, 4),
  ('atividade-317', 'aula-46', 1, 4),
  ('atividade-318', 'aula-46', 2, 4),
  ('atividade-319', 'aula-46', 3, 4),
  ('atividade-320', 'aula-46', 0, 4),
  ('atividade-321', 'aula-46', 1, 4),
  ('atividade-322', 'aula-46', 2, 4),

  -- AULA 47 — Ordem e serviço ao povo de Deus
  ('atividade-323', 'aula-47', 3, 4),
  ('atividade-324', 'aula-47', 0, 4),
  ('atividade-325', 'aula-47', 1, 4),
  ('atividade-326', 'aula-47', 2, 4),
  ('atividade-327', 'aula-47', 3, 4),
  ('atividade-328', 'aula-47', 0, 4),
  ('atividade-329', 'aula-47', 1, 4),

  -- AULA 48 — Unção dos enfermos: Deus cuida dos que sofrem
  ('atividade-330', 'aula-48', 2, 4),
  ('atividade-331', 'aula-48', 3, 4),
  ('atividade-332', 'aula-48', 0, 4),
  ('atividade-333', 'aula-48', 1, 4),
  ('atividade-334', 'aula-48', 2, 4),
  ('atividade-335', 'aula-48', 3, 4),
  ('atividade-336', 'aula-48', 0, 4),

  -- AULA 49 — Os mandamentos na vida diária
  ('atividade-337', 'aula-49', 1, 4),
  ('atividade-338', 'aula-49', 2, 4),
  ('atividade-339', 'aula-49', 3, 4),
  ('atividade-340', 'aula-49', 0, 4),
  ('atividade-341', 'aula-49', 1, 4),
  ('atividade-342', 'aula-49', 2, 4),
  ('atividade-343', 'aula-49', 3, 4),

  -- AULA 50 — As bem-aventuranças
  ('atividade-344', 'aula-50', 0, 4),
  ('atividade-345', 'aula-50', 1, 4),
  ('atividade-346', 'aula-50', 2, 4),
  ('atividade-347', 'aula-50', 3, 4),
  ('atividade-348', 'aula-50', 0, 4),
  ('atividade-349', 'aula-50', 1, 4),
  ('atividade-350', 'aula-50', 2, 4);

insert into public.atividades (id, aula_id, resposta_correta, total_alternativas) values
  -- AULA 51 — O Pai-Nosso
  ('atividade-351', 'aula-51', 1, 4),
  ('atividade-352', 'aula-51', 2, 4),
  ('atividade-353', 'aula-51', 0, 4),
  ('atividade-354', 'aula-51', 3, 4),
  ('atividade-355', 'aula-51', 1, 4),
  ('atividade-356', 'aula-51', 2, 4),
  ('atividade-357', 'aula-51', 0, 4),

  -- AULA 52 — A Ave-Maria
  ('atividade-358', 'aula-52', 1, 4),
  ('atividade-359', 'aula-52', 2, 4),
  ('atividade-360', 'aula-52', 0, 4),
  ('atividade-361', 'aula-52', 3, 4),
  ('atividade-362', 'aula-52', 1, 4),
  ('atividade-363', 'aula-52', 2, 4),
  ('atividade-364', 'aula-52', 0, 4),

  -- AULA 53 — O terço e a meditação da vida de Jesus
  ('atividade-365', 'aula-53', 2, 4),
  ('atividade-366', 'aula-53', 1, 4),
  ('atividade-367', 'aula-53', 3, 4),
  ('atividade-368', 'aula-53', 0, 4),
  ('atividade-369', 'aula-53', 2, 4),
  ('atividade-370', 'aula-53', 1, 4),
  ('atividade-371', 'aula-53', 3, 4),

  -- AULA 54 — Santos: amigos de Deus
  ('atividade-372', 'aula-54', 0, 4),
  ('atividade-373', 'aula-54', 2, 4),
  ('atividade-374', 'aula-54', 1, 4),
  ('atividade-375', 'aula-54', 3, 4),
  ('atividade-376', 'aula-54', 0, 4),
  ('atividade-377', 'aula-54', 2, 4),
  ('atividade-378', 'aula-54', 1, 4),

  -- AULA 55 — Caridade e serviço ao próximo
  ('atividade-379', 'aula-55', 3, 4),
  ('atividade-380', 'aula-55', 0, 4),
  ('atividade-381', 'aula-55', 2, 4),
  ('atividade-382', 'aula-55', 1, 4),
  ('atividade-383', 'aula-55', 3, 4),
  ('atividade-384', 'aula-55', 0, 4),
  ('atividade-385', 'aula-55', 2, 4),

  -- AULA 56 — Perdão e reconciliação na família e na comunidade
  ('atividade-386', 'aula-56', 1, 4),
  ('atividade-387', 'aula-56', 3, 4),
  ('atividade-388', 'aula-56', 0, 4),
  ('atividade-389', 'aula-56', 2, 4),
  ('atividade-390', 'aula-56', 1, 4),
  ('atividade-391', 'aula-56', 3, 4),
  ('atividade-392', 'aula-56', 0, 4),

  -- AULA 57 — Cuidar da criação
  ('atividade-393', 'aula-57', 2, 4),
  ('atividade-394', 'aula-57', 1, 4),
  ('atividade-395', 'aula-57', 3, 4),
  ('atividade-396', 'aula-57', 0, 4),
  ('atividade-397', 'aula-57', 2, 4),
  ('atividade-398', 'aula-57', 1, 4),
  ('atividade-399', 'aula-57', 3, 4),

  -- AULA 58 — Ser cristão na escola, em casa e na internet
  ('atividade-400', 'aula-58', 0, 4),
  ('atividade-401', 'aula-58', 2, 4),
  ('atividade-402', 'aula-58', 1, 4),
  ('atividade-403', 'aula-58', 3, 4),
  ('atividade-404', 'aula-58', 0, 4),
  ('atividade-405', 'aula-58', 2, 4),
  ('atividade-406', 'aula-58', 1, 4),

  -- AULA 59 — Vocação: Deus chama cada pessoa
  ('atividade-407', 'aula-59', 3, 4),
  ('atividade-408', 'aula-59', 0, 4),
  ('atividade-409', 'aula-59', 2, 4),
  ('atividade-410', 'aula-59', 1, 4),
  ('atividade-411', 'aula-59', 3, 4),
  ('atividade-412', 'aula-59', 0, 4),
  ('atividade-413', 'aula-59', 2, 4),

  -- AULA 60 — Minha caminhada continua
  ('atividade-414', 'aula-60', 1, 4),
  ('atividade-415', 'aula-60', 3, 4),
  ('atividade-416', 'aula-60', 0, 4),
  ('atividade-417', 'aula-60', 2, 4),
  ('atividade-418', 'aula-60', 1, 4),
  ('atividade-419', 'aula-60', 3, 4),
  ('atividade-420', 'aula-60', 0, 4);


  ('atividade-351', 'aula-51', 2, 4),
  ('atividade-352', 'aula-51', 3, 4),
  ('atividade-353', 'aula-51', 1, 4),
  ('atividade-354', 'aula-51', 4, 4),
  ('atividade-355', 'aula-51', 2, 4),
  ('atividade-356', 'aula-51', 3, 4),
  ('atividade-357', 'aula-51', 1, 4),

  -- Aula 52 — A Ave-Maria
  ('atividade-358', 'aula-52', 2, 4),
  ('atividade-359', 'aula-52', 3, 4),
  ('atividade-360', 'aula-52', 1, 4),
  ('atividade-361', 'aula-52', 4, 4),
  ('atividade-362', 'aula-52', 2, 4),
  ('atividade-363', 'aula-52', 3, 4),
  ('atividade-364', 'aula-52', 1, 4),

  -- Aula 53 — O terço
  ('atividade-365', 'aula-53', 3, 4),
  ('atividade-366', 'aula-53', 2, 4),
  ('atividade-367', 'aula-53', 4, 4),
  ('atividade-368', 'aula-53', 1, 4),
  ('atividade-369', 'aula-53', 3, 4),
  ('atividade-370', 'aula-53', 2, 4),
  ('atividade-371', 'aula-53', 4, 4),

  -- Aula 54 — Santos: amigos de Deus
  ('atividade-372', 'aula-54', 1, 4),
  ('atividade-373', 'aula-54', 3, 4),
  ('atividade-374', 'aula-54', 2, 4),
  ('atividade-375', 'aula-54', 4, 4),
  ('atividade-376', 'aula-54', 1, 4),
  ('atividade-377', 'aula-54', 3, 4),
  ('atividade-378', 'aula-54', 2, 4),

  -- Aula 55 — Caridade e serviço ao próximo
  ('atividade-379', 'aula-55', 4, 4),
  ('atividade-380', 'aula-55', 1, 4),
  ('atividade-381', 'aula-55', 3, 4),
  ('atividade-382', 'aula-55', 2, 4),
  ('atividade-383', 'aula-55', 4, 4),
  ('atividade-384', 'aula-55', 1, 4),
  ('atividade-385', 'aula-55', 3, 4),

  -- Aula 56 — Perdão e reconciliação
  ('atividade-386', 'aula-56', 2, 4),
  ('atividade-387', 'aula-56', 4, 4),
  ('atividade-388', 'aula-56', 1, 4),
  ('atividade-389', 'aula-56', 3, 4),
  ('atividade-390', 'aula-56', 2, 4),
  ('atividade-391', 'aula-56', 4, 4),
  ('atividade-392', 'aula-56', 1, 4),

  -- Aula 57 — Cuidar da criação
  ('atividade-393', 'aula-57', 3, 4),
  ('atividade-394', 'aula-57', 2, 4),
  ('atividade-395', 'aula-57', 4, 4),
  ('atividade-396', 'aula-57', 1, 4),
  ('atividade-397', 'aula-57', 3, 4),
  ('atividade-398', 'aula-57', 2, 4),
  ('atividade-399', 'aula-57', 4, 4),

  -- Aula 58 — Ser cristão na escola, em casa e na internet
  ('atividade-400', 'aula-58', 1, 4),
  ('atividade-401', 'aula-58', 3, 4),
  ('atividade-402', 'aula-58', 2, 4),
  ('atividade-403', 'aula-58', 4, 4),
  ('atividade-404', 'aula-58', 1, 4),
  ('atividade-405', 'aula-58', 3, 4),
  ('atividade-406', 'aula-58', 2, 4),

  -- Aula 59 — Vocação
  ('atividade-407', 'aula-59', 4, 4),
  ('atividade-408', 'aula-59', 1, 4),
  ('atividade-409', 'aula-59', 3, 4),
  ('atividade-410', 'aula-59', 2, 4),
  ('atividade-411', 'aula-59', 4, 4),
  ('atividade-412', 'aula-59', 1, 4),
  ('atividade-413', 'aula-59', 3, 4),

  -- Aula 60 — Minha caminhada continua
  ('atividade-414', 'aula-60', 2, 4),
  ('atividade-415', 'aula-60', 4, 4),
  ('atividade-416', 'aula-60', 1, 4),
  ('atividade-417', 'aula-60', 3, 4),
  ('atividade-418', 'aula-60', 2, 4),
  ('atividade-419', 'aula-60', 4, 4),
  ('atividade-420', 'aula-60', 1, 4)

on conflict (id) do update
  set aula_id = excluded.aula_id,
      resposta_correta = excluded.resposta_correta,
      total_alternativas = excluded.total_alternativas;

notify pgrst, 'reload schema';
