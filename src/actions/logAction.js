import {LOGAUTH} from './types';

export const LogStatus=()=>dispatch=>{
    console.log('log fetching......')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
             dispatch({
            type: LOGAUTH,
            payload : posts
        }));
}
export const Logout=()=>dispatch=>{
    console.log('log fetching......')
    
}
