import React from 'react';
import { CardVar } from './CardVar';
// 카드 우산 씌워서 모양은 같게 내용은 다르게 만들기
export default function VideoCard({video}) {
    const setTime = ()=>{
    const timeAgo = (new Date() -new Date(video.snippet.publishedAt)) / 1000
    // console.log(timeAgo / (60 * 60 * 24 * 365));
    // console.log(new Date(timeAgo).getMonth());
    const times = [
        { name: 'years', milliSeconds: 60 * 60 * 24 * 365 },
        { name: 'months', milliSeconds: 60 * 60 * 24 * 30 },
        { name: 'days', milliSeconds: 60 * 60 * 24 },
        { name: 'hours', milliSeconds: 60 * 60 },
        { name: 'minutes', milliSeconds: 60 },
      ];
     for(let value of times) {
        const betweenTimes = Math.floor(timeAgo / value.milliSeconds)
        if(betweenTimes > 0){
            if(betweenTimes === 1){
                const cahnge = value.name.substring(0,value.name.length-1)
                return `${betweenTimes} ${cahnge} ago`
            }
            return `${betweenTimes} ${value.name} ago`
        }
       
    }
    return "Just before"
     }
    
    // console.log(new Date(timeAgo).getDate());
    // console.log(new Date(timeAgo).getHours());
    //현재시간을 기준으로 발행시간을 빼면 남는 시간이 
    //1일보다 작으면 ''hours ago
    //1달보다 작으면 ''days ago
    //1년보다 작으면  -  ' 'months ago
    //1년보다 크면 ''years age
    return (
       <li className='flex flex-col m-2'>
        <img 
        src={video.snippet.thumbnails.default.url} 
        alt="thumbnails" 
        />
        <br></br>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
        <div>{setTime()}</div>
        </li>
        
    );
}

