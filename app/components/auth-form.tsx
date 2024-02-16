'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../types/supabase'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={['twitter']}
      redirectTo="/https://elothr.vercel.app/auth/callback"
    />
  )
}