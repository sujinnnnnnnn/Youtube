import React, { Children } from 'react';
import VideoCard from './videoCard';
export function AppWrap(){
    return (
        <CardVar>
        <VideoCard />
        </CardVar>
    )
} 

export  function CardVar() {
    return (
        <div className='flex flex-col'>
           {children} 
        </div>
    );
}

