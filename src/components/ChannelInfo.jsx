import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from './context/YoutubeApiContext';

export default function ChannelInfo({id,name}) {
    const {youtube} = useYoutubeApi()
    console.log(youtube.channelThumbnails(id));
    const {isLoading,error,data:url} = useQuery(['channel',id] ,
     ()=>youtube.channelThumbnails(id),
     {staleTime: 100 * 60 * 5})
    console.log(url);
    return (
        <div>
         {url && <img className='rounded-full w-14 h-10' src={url} alt={name} />}
        </div>
    );
}

