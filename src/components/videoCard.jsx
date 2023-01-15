import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatAgo } from './api/date';
export default function VideoCard({video}) {
    const {title , thumbnails, publishedAt } =video.snippet
    //
    const [click, setClick] =useState(false);
    const{videoId} =useParams();
    const navigate = useNavigate();
    
    //클릭을 하는 순간 해당 컨텐츠 id로 가야함
   const handleClick = (e) => {
    navigate(`/videos/watch/${video.id}`) // 라우트로 지정해놓은 경로로 이동 
   }
console.log(video.id);
    
    // console.log(new Date(timeAgo).getDate());
    // console.log(new Date(timeAgo).getHours());
    //현재시간을 기준으로 발행시간을 빼면 남는 시간이 
    //1일보다 작으면 ''hours ago
    //1달보다 작으면 ''days ago
    //1년보다 작으면  -  ' 'months ago
    //1년보다 크면 ''years age
    return (
       <li  
       className='flex flex-col m-2 cursor-pointer'
       onClick={handleClick}
       >
        <img 
        className='w-full mb-2'
        src={thumbnails.high.url} 
        alt={title} 
        />
        <div className='font-semibold my-2 line-clamp-2'>{title}</div>
        <div className='mb-1 text-sm opacity-80'>{title}</div>
        <div className='mb-1 text-sm opacity-80'>{formatAgo(publishedAt,'ko')}</div>
        </li>
        
    );
}

