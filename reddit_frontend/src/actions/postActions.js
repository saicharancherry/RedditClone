import {FETCH_POSTS,NEW_POSTS,FETCH_COMMINITIES,DELETEPOST,FETCHPRIVATE_POSTS, SUBSCRIBE,NEW_COMMUNITY} from './types';

export const fetchPosts=(username,token)=>dispatch=>{
    console.log('post fetching......\nusername: token:')
    console.log(username,token)
    fetch("https://redditmrnd.herokuapp.com/posts/" + username+"/",{
            method:'GET',
            headers:new Headers({
                'Authorization':'JWT '+token,
                'content-type':'application/json',
                'Accept': 'application/json',

            }),
    }).
    then(function(response){return response.json();})
    .then((postdata)=>(
        dispatch({
            type: FETCH_POSTS,
            payload : postdata
        }))
    
    )
      
}

export const fetchRealtimePosts=()=>dispatch=>{
    console.log('post fetching......\nusername: token:')
    fetch("https://newsapi.org/v2/top-headlines?country=IN&category=science&apiKey=cd5254ebf7174e8292375b098481ad3a",{
    method:'GET',
    }).
    then(function(response){return response.json();})
    .then((postdata)=>(
        dispatch({
            type: FETCHPRIVATE_POSTS,
            payload : postdata
        }))

    )
      
}

export const fetchCommunities=(token)=>dispatch=>{
    console.log('fetccching communities')
    fetch("/communities/",{
            method:'GET',
            headers:new Headers({
                'Authorization':'JWT '+token,
                'content-type':'application/json',
                'Accept': 'application/json',
            }),
    }).
    then(function(response){return response.json();})
    .then((communitydata)=>(
        dispatch({
            type: FETCH_COMMINITIES,
            payload : communitydata
        }))
    
    )
      
}
  
export const createPost=(postData,token)=>dispatch=>{
    console.log('communitiesfetching......')
    console.log(this.state,this.props)
    fetch("/createpost/",{
        method:'POST',
        body:JSON.stringify(postData),
        headers:new Headers({
            'Authorization':'JWT '+ token,
            'content-type':'application/json'
        }),
    }
).then(function(response){
    return response;
}).then((jsondata)=> dispatch({
    type: NEW_POSTS,
    payload : postData,
}))
      
} 

export const createComm=(postData,token)=>dispatch=>{
    console.log('communitiesfetching......')
    console.log(this.state,this.props)
    fetch("/createcommunity/",{
        method:'POST',
        body:JSON.stringify(postData),
        headers:new Headers({
            'Authorization':'JWT '+ token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }),

    }
).then(function(response){
    return response;
}).then((jsondata)=> dispatch({
    type: NEW_COMMUNITY,
    payload : postData,
}))
      
} 


export const subscribeCommunity=(value,name,token)=>dispatch=>{
    console.log('communitiesfetching......')
    fetch("/subscribecommunity/",{
        method:'POST',
        body:JSON.stringify({rid:value,username:name}),
        credentials:'same-origin',
        headers:new Headers({
            'Authorization':'JWT '+ token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }),

    }
).then(function(response){
    return response;
}).then((jsondata)=> dispatch({
    type: SUBSCRIBE,
    payload:value,
}))
      
} 
export const DeletePosts=(id,token)=>dispatch=>{
    console.log('dleteing post......')
    fetch("/deletepost/",{
        method:'DELETE',
        body:JSON.stringify({pid:id}),
        credentials:'same-origin',
        headers:new Headers({
            'Authorization':'JWT '+ token,
            'Content-Type': 'application/json',
        }),

    }
).then(function(response){
    return response;
}).then((jsondata)=> dispatch({
    type: DELETEPOST,
    payload:id
}))
      
} 
//subscribeCommunity DeletePosts, fetchRealtimePosts