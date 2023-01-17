import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
export default function VideoDetails() {  
    const {state : {video}} = useLocation()
  
    const {title , channelId , channelTitle,description} = video.snippet
       
    return (
        <div className='text-3xl'>
            
            <section className='flex'>
                <article className='divide1'>
                    <iframe 
                     id="player"
                    type="text/html"
                    width="100%"
                    height="640"
                    src={`http://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    title={title}> 
                    </iframe>
                    <h2 className='text-3xl font-semibold mt-2'>{title}</h2>
                   <div className='flex items-center m-4'>
                        <ChannelInfo id={channelId} name={channelTitle} /> 
                        <pre className='p-2 font-medium text-lg'>{channelTitle}</pre>
                   </div> 
                    <div className='text-base'>{description}</div>
                </article>
                <section className='divide2 ml-3' >
                 <RelatedVideos className="flex flex-col" id={video.id}/>
                </section>
            </section>
            </div>

            
       
    );
}

// **연관된 비디오 검색**

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=[YOUR_API_KEY]

// **채널 상세내용**

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]