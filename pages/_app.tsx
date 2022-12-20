import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'

import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes';


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <ThemeProvider>
      <SessionProvider session={session} basePath="./auth.tsx">
        <QueryClientProvider client={queryClient} >
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
<<<<<<< HEAD
            {/* {test in "start"} */}
=======
            {/* initialIsOpen is set to false===open up, true===for prod contextSharing={true}*/}
>>>>>>> master
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
