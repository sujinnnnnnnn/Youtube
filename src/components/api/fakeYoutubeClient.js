import axios from 'axios'
export default class FakeYoutube {
    constructor(){
    
    }
     async search (){ 
      return axios.get('/videos/search.json')
       }
       async videos (){ 
         return axios.get('/videos/popular.json', )
          }  
      async channels(){
        return axios.get('/videos/channel.json')
      }    
      async related(){
        return axios.get('/videos/related.json')
      }
//      async #searchByKeyWord(){
//         return axios.get(`/videos/search.json`)
//         .then(data=>data.data.items)
//         .then(items=>items.map(item=>({...item, id: item.id.videoId}))) 
//         //나머지는 다 똑같이 풀어주는데 id만 다르게 해준다. (serch와 popular에 id가 들어간 형태가 다르기 때문)
//      } 
//      async #mostPopular(){
//         return axios.get(`/videos/popular.json`)
//         .then(data=>data.data.items)
//      }
 }