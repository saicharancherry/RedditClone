import React,{Component} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Userposts } from '../actions/postActions';
 import Cookies from 'universal-cookie'
 
class Posts extends Component{
    cookie=new Cookies()

/*componentWillMount(){
    //if(this.postobj.isAuthenticated){
       console.log(this.props.postobj)

    if(this.props.postobj.isAuthenticated == 1){
        console.log('entered...')
       this.props.fetchPosts('vinayaka',this.cookie.get('jwttoken').token);
     } // }
}*/

componentWillReceiveProps(nextprops){
    console.log(nextprops.authname)
    console.log('post componentwill...........')
    if(nextprops.postobj){
        console.log('auth name will component')
         this.props.Userposts(nextprops.newuser,this.cookie.get('jwttoken').token);
    }
}

render(){
    console.log('post render method new.')
    console.log(this.props.posts)
    console.log('ended')
    
    const postitems=this.props.posts && this.props.posts.map(mypost =>(
    <div>
        <h3>{mypost.rid__rname}</h3>
       
    </div> 
    ));
    return(
        <div>
            <h2>Posts</h2>
            <div>
            {this.props.posts && this.props.posts.map((item)=>(
                <div>{item.rid__rname}</div>
            ))
            }
            </div>
            <div>entered posts</div>
        </div>

    );
}

}

Posts.propTypes={
    Userposts: propTypes.func.isRequired,
    userpost:propTypes.isRequired,
    
}

const mapStateToProps = state =>({
    userpost:state.posts.isAuthenticated,

});
export default connect(mapStateToProps,{ Userposts })(Posts);