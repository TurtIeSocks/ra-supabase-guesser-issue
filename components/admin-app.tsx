import {
  Admin,
  Resource,
  // ListGuesser,
  // EditGuesser,
  // ShowGuesser,
} from 'react-admin'
import {
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CreateGuesser,
  LoginPage,
  supabaseDataProvider,
} from 'ra-supabase'
import { createClient } from '@supabase/supabase-js'

const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const dataProvider = supabaseDataProvider({
  instanceUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  supabaseClient: client,
})

const AdminApp = () => (
  <Admin dataProvider={dataProvider} loginPage={LoginPage}>
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      create={CreateGuesser}
      recordRepresentation="title"
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      create={CreateGuesser}
      recordRepresentation="body"
    />
  </Admin>
)

export default AdminApp
