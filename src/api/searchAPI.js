import axios from './axios';

export const postsearchAPI= ( { search } ) =>{
    return axios.post(`api/search`,{      
            query : {
                bool: {
                  must: {
                    wildcard: {
                      title: `*${search}*`
                    }
                  }
                }
            }
           
})};