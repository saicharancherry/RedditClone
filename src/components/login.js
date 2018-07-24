import React,{ Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {LoginAction} from '../actions/loginAction'

class Login extends Component{
  constructor(props){
        super(props);
        this.state={
        username:"",
        password:"",
        
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextprops){
        console.log(nextprops.authentication)
        if(nextprops.authentication){
            console.log('auth name')
            console.log(this.props.authnam)
            this.props.history.push('/reddit/'+nextprops.username+'/');
        }
    }
    
   
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
  
    onSubmit(e){
        e.preventDefault();
        const postData={
            username:this.state.username,
            password:this.state.password,
        }
        console.log(postData)
        console.log('action log onsubmit..........')
        this.props.LoginAction(postData);
      

    }

    render(){
      
            return(
                <div>
                <h2>User login</h2>
             <div class="container">
                    <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin" onSubmit={this.onSubmit}>
                <span id="reauth-email" class="reauth-email"></span>
                <input type="text" id="inputEmail" name="username" onChange={this.onChange} class="form-control" placeholder="username"/>
                <input type="password" name="password" id="inputPassword" onChange={this.onChange} class="form-control" placeholder="Password" />
                <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <a href="#" class="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>
    </div>
        );        }
    

}

Login.PropTypes={
    LoginAction:PropTypes.func.isRequired,
    authname:PropTypes.object,
    authentication:PropTypes.isRequired,
    username:PropTypes.string,
}

const mapStateToProps= state =>({
    authname: state.posts,
    authentication: state.posts.isAuthenticated,
    username:state.posts.username,
})
export default connect(mapStateToProps,{ LoginAction })(Login);
/*
     <div>
                        <label>username:</label>
                        <input type="text" name="username" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>password:</label>
                        <input type="password" name="password" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <button type="submit">submit</button>
               
*/