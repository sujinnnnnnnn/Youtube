import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatAgo } from './api/date';
export default function VideoCard({video,type}) {
    const {title , thumbnails, publishedAt } =video.snippet
    const {param} = useParams();
    console.log(param);
    const navigate = useNavigate();
    
    //클릭을 하는 순간 해당 컨텐츠 id로 가야함
//    const handleClick = () => {
//     navigate(`/videos/watch/${video.id}`,{state: {video}}) // 라우트로 지정해놓은 경로로 이동 
//    }
console.log(video.id);
    
    // console.log(new Date(timeAgo).getDate());
    // console.log(new Date(timeAgo).getHours());
    //현재시간을 기준으로 발행시간을 빼면 남는 시간이 
    //1일보다 작으면 ''hours ago
    //1달보다 작으면 ''days ago
    //1년보다 작으면  -  ' 'months ago
    //1년보다 크면 ''years age
    const isList = type === 'list'
    return (
       <li  
       className={`flex ${isList || 'flex-col'} m-2 cursor-pointer`}
       onClick={()=>{ navigate(`/videos/watch/${video.id}`,{state: {video}})}}
       >
        <img 
        className={`w-full mb-2 ${isList && 'w-1/2 mr-2 p-1'}`}
        src={thumbnails.high.url} 
        alt={title} 
        />
        <div>
            <div className={`font-semibold my-2 line-clamp-2 ${isList && 'text-lg'}`}>{title}</div>
            <div className='mb-1 text-sm opacity-80'>{title}</div>
            <div className='mb-1 text-sm opacity-80'>{formatAgo(publishedAt,'ko')}</div>
        </div>
        </li>
        
    );
}

