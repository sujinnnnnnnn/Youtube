import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetails() {
    const {videoId} =useParams()
    console.log(videoId);
    //videoId 가 true면 보여주기 
    const {isLoading, error, data: details} = useQuery(
        ['details', videoId] , ()=> axios.get("/videos/popular.json").then(res=>res.data.items)
    )
    console.log(details);
    return (
        <div className='text-3xl'>
            VideoDetails
        </div>
    );
}

