import React,{ Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect, Link} from "react-router-dom";
import {withRouter} from 'react-router' 




 class Signup extends Component{

    cookies=new Cookies();
    constructor(props){
        super(props);
    this.state={
        username:"",
        password:"",
        tokenverify:"",
        email:"",
        csrft:"",
    };
    this.handleemail=this.handleemail.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleUsername=this.handleUsername.bind(this);
    }
    
    handleFormSubmit=(e)=>
    {
        e.preventDefault();
        //this.setState({csrft:getCookie('csrftoken')})
        fetch("http://127.0.0.1:8000/u/signup/",
        {
            method:'POST',
            body:JSON.stringify({username:this.state.username,email:this.state.email,password:this.state.password}),
            headers:{
                'content-type':'application/json',
            },
            mode:'cors',
        }
    ).then(function(response){
        return response.json();
    }).then((jsondata)=>{
        if('status' in jsondata){
            console.log(jsondata.get('status'))
            this.props.history.push("/user/login/")
            
        }
    })
    .catch(e => console.log("eroor occurred........."))
    }

    handleUsername=(e)=>{
        this.setState(({username:e.target.value}))
    }
    handlePassword=(e)=>{
        this.setState(({password:e.target.value}))
    }
    handleemail=(e)=>{
        this.setState(({email:e.target.value}))
        //this.setState(prev=>({csrft:this.cookies.get('csrftoken')}))
    }
    render=()=>{
      
            return(
                <div>
                <input value={this.state.username} onChange={this.handleUsername} type="text" placeholder="user"/><br/>
                    <input value={this.state.email} onChange={this.handleemail} type="text" placeholder="email"/><br/>
                    <input value={this.state.password}  onChange={this.handlePassword} type="password" placeholder="Enter Password"/>
                    <button onClick={this.handleFormSubmit}>signup</button>
                </div>
        );        }
    

}
export default withRouter(Signup);