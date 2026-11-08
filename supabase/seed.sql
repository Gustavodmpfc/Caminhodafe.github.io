insert into public.paroquias (nome, cidade, codigo_acesso, status)
select 'Paroquia Demo', 'Sao Paulo', 'FE2026', 'ativa'
where not exists (
  select 1
  from public.paroquias
  where upper(btrim(codigo_acesso)) = 'FE2026'
);
