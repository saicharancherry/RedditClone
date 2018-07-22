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
import Logout from './components/logout'
import Signup from './components/signup'

class App extends Component {
  render() {
    console.log('main render.......')
    return (
      <Provider store={store}>
      <div>
      <header>
        </header>
       <Router>
        <div>
          <Redditheader/>
         <Switch>
           
         <Route path="/user/login/" component={Login}/>
         <Route path="/user/signup/" component={Signup}/>
         <Route path="/user/logout/" component={Logout}/>
         <Route  path='/reddit/:username/submit/' component={Postform}/>
         
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