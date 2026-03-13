with inserted_posts as (
  insert into public.posts (title, body, is_published)
  values
    ('Hello World!', 'Welcome to the new blog. This is the first post.', true),
    ('Supabase is Awesome', 'Learning how to use Supabase with React Admin.', true),
    ('Draft Post', 'This is a work in progress and should not be visible to the public.', false),
    ('Another Great Post', 'Here is some more interesting content to read.', true)
  returning id
)
insert into public.comments (post_id, body, author_name)
select id, 'Great post!', 'Alice' from inserted_posts
union all
select id, 'Thanks for sharing.', 'Bob' from inserted_posts
union all
select id, 'I learned a lot from this.', 'Charlie' from inserted_posts;
