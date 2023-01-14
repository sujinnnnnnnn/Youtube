import React from 'react';
import { Outlet } from 'react-router-dom';
import Navvar from './Navvar';
import Header from './Header';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { CardVar } from './CardVar';
  const queryClient = new QueryClient();
export default function Root() {
    return (
        <>
            <Header />
            <Navvar />
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

