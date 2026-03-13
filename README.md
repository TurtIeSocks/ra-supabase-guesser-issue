# Reproduction for [ra-supabase#93](https://github.com/marmelab/ra-supabase/issues/93)

1. `supabase start`
1. `bun install`
1. `bun run dev`
1. Navigate to http://localhost:3000/#/posts
1. See crash

## Findings

The issue seems to stem from using any of the `ra-supabase` guesser components. When you import `ListGuesser`, `ShowGuesser`, and `EditGuesser` from `react-admin`, they work fine. At one point (~1 year ago) these imports were working for me, but I can't seem to replicate it now, even if I go back to those commits. 