import React,{Component} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCommunities,subscribeCommunity} from '../actions/postActions';
import Cookies from 'universal-cookie'
import '../App.css';
import {Link,Router,Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Community extends Component{
    cookie=new Cookies()
  constructor(props){
      super(props);
      this.mybutton=this.mybutton.bind(this)
  }
componentDidMount(){
      // console.log(this.props.postobj)
    //if(this.props.postobj.isAuthenticated){
        console.log('community entered...')
        this.props.fetchCommunities(this.cookie.get('jwttoken').token);
     //} 
}

// componentWillReceiveProps goes infinite loop..........fetch init get updated so, cwillrepr be called and infinite
/*componentDidUpdate(prevProps){
    if(this.props.comm!=prevProps.comm){
    console.log('console idi update in cmmlist')
    this.props.fetchCommunities(this.cookie.get('jwttoken').token);
    }
}*/

mybutton(e){
    console.log(this.props.name,e.target.id,e.target)
    if(this.cookie.get('jwttoken')){
        this.props.subscribeCommunity(e.target.id,this.props.name,this.cookie.get('jwttoken').token);
    }
}


render=()=>{
    console.log('my communities')
    console.log(this.props.comm)
    
    return(
        <div>
        <h3>Popular community</h3>
        <div class="card">
        <p class="h6">subscribe</p>
        {this.props.comm && this.props.comm.map((item)=>(
             <div>
                 {item.isuser?<div><div class="btn btn-danger" onClick={this.mybutton} id={item.rid}>{item.rfield }</div>unsubscribe</div>:<div><div class="btn btn-outline-success" onClick={this.mybutton} id={item.rid}>{item.rfield }</div>subscribe</div>}
             <br/>
            </div>
        ))}
        </div>
        </div>
        
    );
}

}
Community.propTypes={
    fetchCommunities: propTypes.func.isRequired,
    subscribeCommunity: propTypes.func.isRequired,
    comm:propTypes.object,
    name:propTypes.string,
    
}

const mapStateToProps = state =>({
    name:state.posts.username,
    comm:state.posts.comminities,

});
export default connect(mapStateToProps,{ fetchCommunities,subscribeCommunity })(Community);


/*
<div>
                <div>{item.pid}</div>
                <div>{item.uid_username}</div>
                <div>{item.pcid__rid__rname}</div>
                <div>{item.pdata}</div>
                <div>{item.ptime}</div>
                </div>
*/
//<Link to='submit/'>post</Link>