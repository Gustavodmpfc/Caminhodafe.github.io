create table public.paroquias (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(btrim(nome)) > 0),
  cidade text not null check (char_length(btrim(cidade)) > 0),
  codigo_acesso text not null check (char_length(btrim(codigo_acesso)) > 0),
  status text not null default 'ativa' check (status in ('ativa', 'inativa')),
  criado_em timestamptz not null default now()
);

create unique index paroquias_codigo_acesso_normalizado_uidx
  on public.paroquias (upper(btrim(codigo_acesso)));

create table public.usuarios (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null check (
    char_length(btrim(nome)) > 0
    and nome !~ '[0-9]'
  ),
  email text not null,
  tipo_usuario text not null default 'aluno'
    check (tipo_usuario in ('admin_geral', 'admin_pedagogico', 'catequista', 'aluno')),
  paroquia_id uuid references public.paroquias(id) on delete set null,
  criado_em timestamptz not null default now()
);

create index usuarios_paroquia_id_idx on public.usuarios (paroquia_id);

alter table public.usuarios enable row level security;
alter table public.paroquias enable row level security;

revoke all on table public.usuarios from anon, authenticated;
revoke all on table public.paroquias from anon, authenticated;
grant select on table public.usuarios, public.paroquias to authenticated;

create policy usuarios_select_proprio
  on public.usuarios
  for select
  to authenticated
  using ((select auth.uid()) = id);

create policy paroquias_select_vinculada
  on public.paroquias
  for select
  to authenticated
  using (
    id = (
      select u.paroquia_id
      from public.usuarios as u
      where u.id = (select auth.uid())
    )
  );

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  clean_name text;
begin
  clean_name := btrim(coalesce(new.raw_user_meta_data ->> 'nome', ''));

  if clean_name = '' then
    raise exception 'O nome e obrigatorio.';
  end if;

  if clean_name ~ '[0-9]' then
    raise exception 'O nome nao pode conter numeros.';
  end if;

  insert into public.usuarios (id, nome, email, tipo_usuario)
  values (new.id, clean_name, new.email, 'aluno');

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.vincular_paroquia(p_codigo text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  parish_id uuid;
begin
  if current_user_id is null then
    raise exception 'Sessao nao encontrada. Faca login novamente.';
  end if;

  select p.id
    into parish_id
    from public.paroquias as p
    where upper(btrim(p.codigo_acesso)) = upper(btrim(coalesce(p_codigo, '')))
      and p.status = 'ativa';

  if parish_id is null then
    raise exception 'Codigo de paroquia invalido ou inativo.';
  end if;

  update public.usuarios
    set paroquia_id = parish_id
    where id = current_user_id;

  if not found then
    raise exception 'Perfil do usuario nao encontrado.';
  end if;

  return parish_id;
end;
$$;

revoke all on function public.vincular_paroquia(text) from public, anon;
grant execute on function public.vincular_paroquia(text) to authenticated;
