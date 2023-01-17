import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from './context/YoutubeApiContext';
import VideoCard from './videoCard';

export default function RelatedVideos({id}) {
    const {youtube} =useYoutubeApi();
    const{isLoading,error,data:relatedVideos} = useQuery(['related',id], 
    ()=>youtube.relatedVideos(id),
    {staleTime: 100 * 60 * 5}
    )
    console.log(relatedVideos);
    return (
        <ul >
            {relatedVideos && relatedVideos.map((list)=><VideoCard 
             key={list.id} video={list} type='list'/>)}
        </ul>
    );
}

