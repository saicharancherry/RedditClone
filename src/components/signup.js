import React,{ Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {SignupAction} from '../actions/loginAction'

class Signup extends Component{
  constructor(props){
        super(props);
        this.state={
        username:"",
        password:"",
        email:"",
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
   
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
  
    onSubmit(e){
        e.preventDefault();
        const postData={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
        }
        console.log(postData)
        console.log('action log onsubmit..........')
        this.props.SignupAction(postData);
        this.props.history.goBack();
      

    }

    render(){
      
            return(
                <div>
                <h2>User signup</h2>
             <div class="container">
                    <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin" onSubmit={this.onSubmit}>
                <span id="reauth-email" class="reauth-email"></span>
                <input type="text" id="inputEmail" name="username" onChange={this.onChange} class="form-control" placeholder="username"/>
                <input type="password" name="password" id="inputPassword" onChange={this.onChange} class="form-control" placeholder="Password" />
                <input type="text" id="email" name="email" onChange={this.onChange} class="form-control" placeholder="email"/>

                <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> 
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign up</button>
            </form>
            
        </div>
    </div>
    </div>
        );        }
    

}

Signup.PropTypes={
    SignupAction:PropTypes.func.isRequired,
   
}

const mapStateToProps= state =>({
    
})
export default connect(mapStateToProps,{ SignupAction })(Signup);
