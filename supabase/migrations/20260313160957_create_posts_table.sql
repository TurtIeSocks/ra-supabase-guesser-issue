create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  is_published boolean default false not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create updated_at trigger
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on public.posts
  for each row execute procedure moddatetime (updated_at);
