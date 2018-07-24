import React,{ Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {LogoutAction} from '../actions/loginAction'


class Logout extends Component{
    cookies=new Cookies()
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log('action logout..........')
        this.props.LogoutAction();
        //cookies.set('jwttoken',action.payload,{path:'/',expires:new Date(Date.now())}); 
        console.log(this.props.history.push("/"))
    }
    render(){
        return(<h1>hii</h1>)
    }
   
}

Logout.PropTypes={
    LogoutAction:PropTypes.func.isRequired,

}
const mapStateToProps= state =>({
    name:state.username
})


export default connect(mapStateToProps,{LogoutAction })(Logout);
