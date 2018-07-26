import React,{Component} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, DeletePosts, fetchRealtimePosts} from '../actions/postActions';
import Cookies from 'universal-cookie'
import '../App.css';
import {Link,Router,Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Community from './communitylist'
const cookie=new Cookies()
class Posts extends Component{
    
    constructor(props){
        super(props);
        
        this.state={
            data:"",
        }
    }
componentDidMount(){
       console.log(this.props.postobj)
    if(!this.props.auth){
        console.log('entered...')
        fetch("https://newsapi.org/v2/top-headlines?country=IN&category=science&apiKey=cd5254ebf7174e8292375b098481ad3a",{
            method:'GET',
            
    }).
    then(function(response){return response.json();})
    .then((postdata)=>(
        this.setState({data:postdata})
    )
    
    )
        //this.props.fetchRealtimePosts();
     } 
}
componentWillMount(){
    console.log('willmount')
    console.log(new Cookies().get('jwttoken'))
    if(new Cookies().get('jwttoken')){
    this.props.fetchPosts('vinayaka',new Cookies().get('jwttoken').token )
    }
}


// componentWillReceiveProps goes infinite loop..........fetch init get updated so, cwillrepr be called and infinite

componentDidUpdate(prevProps){
    console.log('i entered')
        console.log(this.props.username,prevProps.username)
        if((this.props.comm !=prevProps.comm)){
            if(new Cookies().get('jwttoken')){
            console.log("componentdid=mobt fetcommmm")
         this.props.fetchPosts(this.props.username,new Cookies().get('jwttoken').token);
         console.log("componentdid=mobt fetcommmm")
         //this.props.fetchCommunities(this.cookie.get('jwttoken').token);
        }
            }
}
handleUpvote(e){
    console.log('entered upvote button')
    
}
handleDelete(e){
    console.log('delete')
    console.log(e.target,e.target.id)
   /* const newitems=this.props.posts.filter(item=>{
        return item.pid!==e.target.id;
    });
    this.setState({
        posts:newitems
    })
    console.log('dele pos')
    console.log(newitems,this.props.posts)*/
    this.props.DeletePosts(e.target.id,new Cookies().get('jwttoken').token);
    
}
render=()=>{
    console.log('post render method new.')
    console.log(this.props.posts)
    console.log('ended')
    
    const usercomm=(
        <div>
        <Community/>  
        </div>

    )
  
    const guestcomm=(
        <div class="card">
        <h3>Popular community</h3>
        <div class="fakeimg">Image</div><br/>
        <div class="fakeimg">Image</div><br/>
        <div class="fakeimg">Image</div>
      </div>
    )

    const notloggedin=(
        <div style={{backgroundColor:''}}>
            <div>
        <h2>charan Posts</h2>
        <div>
        <div>
          <div class="row">
            <div class="leftcolumn">
            {this.state.data.articles && this.state.data.articles.map((item)=>(
                <div>
                <div class="card mb-3" style={{left:'20%'}}>
                <img class="card-img-top" style={{height:'450px'}} src={item.urlToImage} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{item.author}</h5>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text"><small class="text-muted">{'Last updated' +item.publishedAt+' mins ago'}</small></p>
                </div>
              </div>
              </div>
              ))}
              <div class="card mb-3" style={{left:'20%'}}>
              <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div></div>
            </div>
            
          </div>
            </div>
        </div>
    </div>

        </div>
            
    )
    const userloggedin=(
        <div>
        <h2>Posts</h2>
        <div>
        <div>
          <div class="row">
            <div class="leftcolumn">

            {this.props.auth && this.props.posts && this.props.posts.map((item)=>(
                <div class="well">
                <div class="media">
                    <a class="pull-left" href="#">
                      <img class="media-object" src="http://placekitten.com/150/150"/>
                    </a>
                    <div class="media-body">
                    <button><div><i class="icon icon-downvote ZyxIIl4FP5gHGrJDzNpUC"></i></div></button>
            <button onClick={this.handleUpvote.bind(this)}><div><i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA" onClick={this.handleUpvote.bind(this)}></i></div></button>
                      <h4 class="media-heading">{item.community__rfield}</h4>
                    <p class="text-right">By {item.uid__username}</p>
                    <p>{item.pdata}</p>
                    <ul class="list-inline list-unstyled">
                        <li><span><i class="glyphicon glyphicon-calendar"></i> {item.ptime} </span></li>
                      <li>|</li>
                      <span><i class="glyphicon glyphicon-comment"></i> 0 comments</span>
                      <li>|</li>
                      <li>
                      {this.props.username==item.uid__username ?<button class="s1d0qa2-9 eeGJEy s12jqx1h-1 imtPHR" onClick={this.handleDelete.bind(this)} aria-expanded="false" aria-haspopup="true" aria-label="more options" id={item.pid}>
    <i class="icon icon-menu s12jqx1h-2 cIafAH" id={item.pid}>delete</i></button>:<div/> }
                          |</li>
                          <li>
                          
                          <button type="button" class="btn btn-primary btn-sm">
  upvote <span class="badge badge-light">4</span>
</button>
                              </li>
                              <li>
                              
                          <button type="button" class="btn btn-primary btn-sm">
  downvote <span class="badge badge-light">0</span>
            </button>
                              |</li>
                      <li>
                         <span class="glyphicon glyphicon-star"></span>
                                  <span class="glyphicon glyphicon-star"></span>
                                  <span class="glyphicon glyphicon-star"></span>
                                  <span class="glyphicon glyphicon-star"></span>
                                  <span class="glyphicon glyphicon-star-empty"></span>
                      </li>
                      <li>|</li>
                      <li>
                        <span><i class="fa fa-facebook-square"></i></span>
                        <span><i class="fa fa-twitter-square"></i></span>
                        <span><i class="fa fa-google-plus-square"></i></span>
                      </li>
                      </ul>
                 </div>
              </div>
            </div>
              ))}
            </div>
            <div class="rightcolumn">
              <div class="card">
                <b>about </b><h2>{ this.props.username}</h2>
                <div class="fakeimg" style={{height:'100px'}}>Image</div>
                    <button class="btn btn-outline-secondary"><span style={{color:'white'}}><Link to={'/reddit/'+this.props.username+'/submit'}>post </Link></span></button>                 
                        <p>Inspire with your post</p>
                    <div><p>
                        </p></div>
                 
              </div>
              <div class="card">
              <button class="btn btn-outline-secondary"><span style={{color:'white'}}><Link to={'/reddit/'+this.props.username+'/createcommunity'}>Create Community </Link></span></button>                 
                 
              </div>
              {this.props.auth?usercomm:guestcomm}
              <div class="card">
                <h3>Follow Me</h3>
                <p>Some text..</p>
              </div>
            </div>
          </div>
            </div>
        </div>
    </div>
    )
    console.log('important')
    console.log(this.props.postobj )
    console.log(this.props.posts )

    console.log(this.props.privateposts)
    console.log(this.state.data.articles)
    //console.log(this.props.privateposts.articles)

    return(
        <div>
        { this.props.auth ? userloggedin : notloggedin }
        <div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-3  col-md-4 col-sm-4">
              <div class="footer_dv">
                  <h4>About us</h4>
                  
                  <img class="img-responsive" src="https://lh3.googleusercontent.com/xUYpdoohv4wqwv5NPtkdITvPtnpLEiWOJE6XEq2EWpUwmDlrs5vp_VE07Cd8XFjTRGkmKT1lp77AHQ=w1366-h662-rw" alt="about"/>
                  <p></p>
                  <p>reddit </p>
              </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-4">
              <div class="footer_dv">
                  <h4>Quick Link</h4>
                  <div class="line-dash">saicharan</div>
                  <ul>
                      <li><a class="a-font" href="#">Home</a></li>
                      <li><a class="a-font" href="#">About charan</a></li>
                      <li><a class="a-font" href="https://www.facebook.com/profile.php?id=100008850547118">facebook</a></li>
                      <li><a class="a-font" href="#">Blog</a></li>
                      <li><a class="a-font" href="#">Police Privacy</a></li>
                  </ul>
              </div>
          </div>
         

          <div class="col-lg-3 col-md-4 col-sm-4">
              <div class="footer_dv">
                  <h4>mrnd</h4>
                  <div class="line-dash"></div>
                  <ul>
                    
                  </ul>
              </div>
          </div>

        </div>
    </div>
</div>
<footer class="py-5 bg-dark">
  <div id="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                  <p class="pull-left"><a href="http://lacodeid.com/" style={{textDecoration: 'none'}}>© 2017 mrndreddit</a></p>
                </div>
                <div class="col-md-8">
                    <ul class="list-inline navbar-right">
                        <li><a href="#">HOME</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
        </div>

    );
}

}
Posts.propTypes={
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    username:propTypes.string,
  
    
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    username:state.posts.username,
    auth:state.posts.isAuthenticated,
    comm:state.posts.comminities,
    

});
export default connect(mapStateToProps,{ fetchPosts,DeletePosts })(Posts);


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


/*

<div class="card">
              <div>
            <button><div><i class="icon icon-downvote ZyxIIl4FP5gHGrJDzNpUC"></i></div></button>
            <button onClick={this.handleUpvote.bind(this)}><div><i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA" onClick={this.handleUpvote.bind(this)}></i></div></button>
                </div>
            <div  style={{color:"#1c1c1c"}}>0</div>
                <p>user:{item.uid__username}</p>
                <h5>{item.community__rfield}</h5>
                <h5>{item.ptime}</h5>
                <div class="fakeimg" style={{height:'50px'}}>Image</div>
                <p>{item.pdata}</p>
                <div class="s1r3zmnv-6 gMdMBr"><div><div class="_3-miAEojrCvx_4FQ8x3P-s">
                <div rel="nofollow" data-click-id="comments" data-test-id="comments-page-link-num-comments" class="_1UoeAeSRhOKSNdY_h3iS1O _1Hw7tY9pMr-T1F4P1C-xNU"><div>
            <i class="icon icon-comment _3ch9jJ0painNf41PmU4F9i _3DVrpDrMM9NLT6TlsTUMxC"></i>
            <span class="FHCV02u6Cp2zYL0fhQPsO">comments</span>
            </div></div><div class="_3XELg38mTJetc-xIUOKrMy" id="t3_8v7mu3-share-menu">
            <button class="s1qn1sr9-0 cqRbIO" data-click-id="share"><i class="icon icon-share xwmljjCrovDE5C9MasZja _1GQDWqbF-wkYWbrpmOvjqJ"></i>
            <span class="_6_44iTtZoeY6_XChKt5b0">share</span></button></div><div class="s7vvtc7-0 kJKGoj"></div><div>
                {this.props.username==item.uid__username ?<button class="s1d0qa2-9 eeGJEy s12jqx1h-1 imtPHR" onClick={this.handleDelete.bind(this)} aria-expanded="false" aria-haspopup="true" aria-label="more options" id={item.pid}>
    <i class="icon icon-menu s12jqx1h-2 cIafAH" id={item.pid}>delete</i></button>:<div/> }
               
                
                </div>
        <div class="_21pmAV9gWG6F_UKVe7YIE0"></div>
        <span class="_2cxR1YcQUgsimt7WSmt8FI"></span></div></div></div>
              </div>
*/