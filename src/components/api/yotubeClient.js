import axios from 'axios'
export default class YoutubeClient {
    //url과 실제 key를 설정
    
    constructor(){
     this.httpClient = axios.create({ //url 지정해서 연결하는 메소드
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {key: process.env.REACT_APP_YOUTUBE_API_KEY }
     })
    }
     async search (params){  // sear
        return this.httpClient.get('search',params);
       }
    async videos (params){  // sear
    return this.httpClient.get('videos',params);
    }  
    async channels(params) {
      return this.httpClient.get("channels",params);
    }
    async related(params){
      return this.httpClient.get('search',params)
    }
   //   async #searchByKeyWord(keyword){
   //      return this.httpClient
   //      .get(`search`,{params: { //추가할 파람들 
   //          part: 'snippet',
   //          maxResults : 25,
   //          type: 'video', //비디오만 받아올거임
   //          q : keyword
   //      }})
   //      .then(data=>data.data.items)
   //      .then(items=>items.map(item=>({...item, id: item.id.videoId}))) 
   //      //나머지는 다 똑같이 풀어주는데 id만 다르게 해준다. (serch와 popular에 id가 들어간 형태가 다르기 때문)
   //   } 
   //   async #mostPopular(){
   //      return this.httpClient
   //      .get(`videos`,{params: { //추가할 파람들 
   //          part: 'snippet',
   //          maxResults : 25,
   //          chart: 'mostPopular',//유명한것만 받아올거임
            
   //      }})
   //      .then(data=>data.data.items)
   //   }
}