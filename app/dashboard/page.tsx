import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Navigation } from "../components/nav";
import Button from "../components/button";
import React from 'react';

export default async function Account() {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const user = session?.user


  return (
    <div className="relative pb-16">
        <Navigation />
        <div className="absolute top-20 left-0 right-0 z-10 text-center p-4">
          <div className="container mx-auto max-w-lg text-center p-4">
            <h4 className="text-4xl sm:text-2xl md:text-5xl text-transparent bg-white bg-clip-text text-edge-outline font-display mb-4">Welcome {user?.email}</h4>
            <p className="text-base mb-4 text-zinc-400">Your dashboard is available below.</p>
          </div>
          <Button> Add a new table </Button>
        </div>
    </div>
  )
}