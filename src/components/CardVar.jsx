import React, { Children } from 'react';
import Videos from '../pages/Videos';
import VideoCard from './videoCard';

export  function CardVar({children}) {
    return (
        <div className='flex flex-col'>
           {children} 
        </div>
    );
}

