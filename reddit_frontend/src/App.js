import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*import Login from './loginform'
import Post from './userposts'
import Submit from './Postcomponent'
import Signup from './signupform'*/
import {Provider} from 'react-redux'
import store from './store'
import Redditheader from './components/AuthHeader'
import Login from './components/login'
import Posts from './components/post'
import Postform from './components/postform'
import Createcommunity from './components/createCommunity'
import Logout from './components/logout'
import Signup from './components/signup'
//const cors = require('cors');
//const express = require('express')
//let app = express();
//app.use(cors());
//app.options('*', cors());

class App extends Component {
  render() {
    console.log('main render.......')
    return (
      <Provider store={store}>
      <div>
      <header>
      <head>
            <title>reddit</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </head>
        </header>
       <Router>
        <div>
          <Redditheader/>
         <Switch>
           
         <Route path="/user/login/" component={Login}/>
         <Route path="/user/signup/" component={Signup}/>
         <Route path="/user/logout/" component={Logout}/>
         <Route  path='/reddit/:username/submit/' component={Postform}/> 
         <Route  path='/reddit/:username/createcommunity/' component={Createcommunity}/>
         <Route component={Posts}/>
         
         
        </Switch>
        </div>
       </Router>
      <div class="jumbotron">
      <div className="App">
      </div>
      </div>
    
 
         </div>
      </Provider>
    );
  }
}
/*
const tempPost=({match})=>(
  <Post key="1" name={match.params.username}/>
);
const PostComponent=({match}) => (
  <Submit key="2" name={match.params.username}/>
);*/
export default App;
/*
<Router>
          <Switch>
          <Route exact path='/user/signup/' render={(props) => <Signup/>}/>
            <Route exact path='/user/login/' render={(props) => <Login/>}/>
            <Route exact path='/reddit/:username/' component={tempPost}/>
            <Route exact path='/reddit/:username/submit/' component={PostComponent}/>
          </Switch>
          
        </Router>
        
*/