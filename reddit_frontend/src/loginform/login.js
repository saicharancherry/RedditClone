import React,{ Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect, Link} from "react-router-dom";
import {withRouter} from 'react-router' 

 class Login extends Component{

    cookies=new Cookies();
    state={
        username:"",
        password:"",
        tokenverify:"",
    }
    
  
    handleFormSubmit = (e) =>
    {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/login/auth-jwt/",
        {
            method:'POST',
            body:JSON.stringify({username:this.state.username,password:this.state.password}),
            credentials:'same-origin',
            headers:{
                'content-type':'application/json'
            },
            mode:'cors',
        }
    ).then(function(response){
        return response.json();
    }).then((jsondata)=>{
        if('token' in jsondata){
            this.cookies.set('jwttoken',jsondata,{path:'/',expires:new Date(Date.now()+25920000)});
            //this.cookies.set('jwttoken_user',{'username':this.state.username},{path:'/',expires:new Date(Date.now()+25920000)});

            console.log(this.cookies.get('jwttoken'))
            this.props.history.push("/reddit/"+this.state.username+"/");
            
        }
    })
    .catch(e => console.log("eroor occurred........."))
    }

    handleUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handlePassword=(e)=>{
        this.setState(
            {
                password:e.target.value
            }
        )
    }
    render(){
      
            return(
                <div>
                    <input onChange={this.handleUsername} type="text" placeholder="user"/><br/>
                    <input onChange={this.handlePassword} type="password" placeholder="Enter Password"/>
                    <button onClick={this.handleFormSubmit}  value="Login">Login</button>    
                </div>
        );        }
    

}
export default withRouter(Login);