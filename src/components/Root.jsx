import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { CardVar } from './CardVar';
  const queryClient = new QueryClient();
export default function Root() {
    return (
        <>
            <Header />
            <YoutubeApiProvider>
            <QueryClientProvider client={queryClient}>
            <CardVar>
            <Outlet />
            </CardVar>
            </QueryClientProvider>
            </YoutubeApiProvider> 
        </>
    );
}

