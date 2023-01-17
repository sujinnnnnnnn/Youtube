
import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/videoCard';
import { useYoutubeApi } from '../components/context/YoutubeApiContext';
export default function Videos() {
   
    const {youtube} =useYoutubeApi()
    console.log(youtube);
    const {keyword} = useParams();
    const {isLoding,error,data:videos} =useQuery(
        ['videos',keyword], ()=>youtube.search(keyword),{staleTime: 100 * 60 * 1} // staletiem늘려서 다른창 갔다오면 새로 받아와지는 거 막기
    )

    return (
        <>
             <img src="https://yt3.ggpht.com/TcXFMFkDeUN8pDqZ-2WShXiG6lXtpoRG2kfRMg3Nd9g947mESyRYqlWtwcoy9FyjiiLVLaTd=s88-c-k-c0x00ffffff-no-rj"/>
            {keyword ? `🔍${keyword}` : '🔥'}
            {isLoding && <p>loading...</p>}
            {error && <p>Somthing is wrong</p>}
            {videos && <ul className='grid grid-cols-5 max-xl:grid-col-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                 {videos.map(video => <VideoCard className='w-100 h-100' key={video.id} video={video}/>)}
                 </ul>
                 }
        </>
    );
}

// function getData(type,word){
//     console.log(type,'eeeee');
//    const dd = type.filter(list=>{
//         let words = list.snippet
//        return words.title.toLowerCase().match(word) || words.description.toLowerCase().match(word)})
//        .map(filter=>filter.snippet.title)
//        console.log(dd);
//    return dd
// }