import axios from 'axios'
export default class Youtube {
    //url과 실제 key를 설정
    
    constructor(apiClient){
     this.apiClient = apiClient
    }
     async search (keyword){ 
        return  keyword? this.#searchByKeyWord(keyword) : this.#mostPopular();
       }
      async channelThumbnails(id){
         return this.apiClient.channels({
            params:{
               part: 'snippet',
               id
            }
         })
         .then(res=>res.data.items[0].snippet.thumbnails.default.url)
      } 
      async relatedVideos (id) {
         return this.apiClient.related({
            params : {
               part : 'snippet',
               relatedToVideoId : id,
               type: 'video',
               maxResults: 25
            }
         })
         .then(data=>data.data.items.map(item=>({...item, id: item.id.videoId})))
         
      }
     async #searchByKeyWord(keyword){
        return this.apiClient.search({params: { //추가할 파람들 
         part: 'snippet',
         maxResults : 25,
         type: 'video', //비디오만 받아올거임
         q : keyword
     }})
        .then(data=>data.data.items)
        .then(items=>items.map(item=>({...item, id: item.id.videoId}))) 
        //나머지는 다 똑같이 풀어주는데 id만 다르게 해준다. (serch와 popular에 id가 들어간 형태가 다르기 때문)
     } 
     async #mostPopular(){
        return this.apiClient.videos({params: { //추가할 파람들 
         part: 'snippet',
         maxResults : 25,
         chart: 'mostPopular',//유명한것만 받아올거임
         
     }})
        .then(data=>data.data.items)
     }
}