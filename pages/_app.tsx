import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'

import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} /> 
        {/* initialIsOpen is set to false===open up, true===for prod */}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
