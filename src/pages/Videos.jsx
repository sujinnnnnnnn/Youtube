
import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/videoCard';
import Youtube, { search } from '../components/api/youtube';
import FakeYoutube from '../components/api/fakeYoutubeClient';
import { useYoutubeApi } from '../components/context/YoutubeApiContext';
export default function Videos() {
    // const [data,setData] = useState([])
    const {youtube} =useYoutubeApi()
    console.log(youtube);
    const {keyword} = useParams();
    const {isLoding,error,data:videos} =useQuery(
        ['videos',keyword], ()=>youtube.search(keyword)
    )
     console.log(youtube);
     console.log(keyword);
  //여기에 해당 내용이 보내짐 
  
//   useEffect(()=>{
//     axios.get(`/videos/${keyword ? 'search.json' :'popular.json' }`)
//     .then(res=>setData(res.data.items))
//   },[keyword])
//   let filtered =  getData(data,keyword);
//   console.log(data);
    return (
        <>
            {keyword ? `🔍${keyword}` : '🔥'}
            {isLoding && <p>loading...</p>}
            {error && <p>Somthing is wrong</p>}
            {videos && <ul className='grid grid-cols-4'>
                 {videos.map(video => <VideoCard className="w-100 h-100" key={video.id} video={video}/>)}
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