import React, { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/yotubeClient';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext();
const client = new FakeYoutubeClient()
// const client = new YoutubeClient()
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}){
return <YoutubeApiContext.Provider value={{youtube}}>
    {children}
</YoutubeApiContext.Provider>
}
export function useYoutubeApi(){
    return useContext(YoutubeApiContext) //실행 되면 value값도 나옴
}
// 우산으로 씌운 YoutubeApiContext를 usecontext의 인자로 넣어서 
//실행하는 함수를 만들어 