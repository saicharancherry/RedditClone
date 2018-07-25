import {LOGIN,LOGOUT} from './types';
import Cookies from 'universal-cookie';
const cookies=new Cookies();

export const LoginAction=(UserCredentials)=>dispatch=>{
    console.log('loginAcition fetching......');
    fetch("http://127.0.0.1:8000000/login/auth-jwt/",
    {
        method:'POST',
        body:JSON.stringify(UserCredentials),
        credentials:'same-origin',
        headers:{
            'content-type':'application/json'
        },
        
    }
).then(function(response){
    return response.json();
}).then(jsondata => 
    dispatch({
        type:LOGIN,
        payload:jsondata,
        name:UserCredentials.username,
        
    }));    

}


export const LogoutAction=()=>dispatch=>{
  console.log('in logout action..')
  dispatch({
    type:LOGOUT,
})
}


export const SignupAction=(UserCredentials)=>dispatch=>{
    console.log('signupAcition fetching......');
    fetch("http://127.0.0.1:8000/u/signup/",
    {
        method:'POST',
        body:JSON.stringify(UserCredentials),
        credentials:'same-origin',
        headers:{
            'content-type':'application/json'
        },
        
    }
).then(function(response){
    return response.json();
}).then(jsondata => 
    dispatch({
        /*type:LOGIN,
        payload:jsondata,
        name:UserCredentials.username,*/
        
    }));    

}
      

/*    SignupAction
console.log('loginAcition fetching......');
    cookies.set('jwttoken',action.payload,{path:'/',expires:new Date(Date.now())}); */