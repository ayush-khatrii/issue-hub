// app/providers.tsx
"use client";
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const query = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={query}>
        <SessionProvider>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  )
}