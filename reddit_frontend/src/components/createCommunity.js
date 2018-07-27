import React,{Component} from 'react'
import { connect } from 'react-redux'
import {createComm} from '../actions/postActions'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import Cookies from 'universal-cookie'

class Createcommunity extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            optionvalue:null,
            postdata:null,
            //this.props.match.params.username
        }
    }

    componentDidUpdate(prevProps){
        console.log('post form didupdate................')
            console.log(this.props.postc,prevProps.postc)
            if(this.props.postc !=prevProps.postc){
             this.props.history.goBack()
             
             }
    }
    componentDidMount(){
        this.cookies=new Cookies();
        console.log('new commmunity')
        //if(this.props.username!=""){
        //this.props.createComm(this.props.username,this.state.postdata);
       // }
    }
      onChange(e){
          this.setState({[e.target.name]:e.target.value});
      }
    handlepostchange=(e)=>{
        this.setState({postdata:e.target.value})
    }
    submitpost=(e)=>{
        e.preventDefault();
        console.log(this.state.data,this.state.optionvalue,this.state.postdata,this.cookies.get('jwttoken').token)
        const commData={
            username:this.props.name,
            postdata:this.state.postdata,
        }
        console.log('entered  community submit form');
        console.log(this.cookies.get('jwttoken').token)
        if(this.cookie.get('jwttoken')){
        this.props.createComm(commData,this.cookies.get('jwttoken').token)
        }
        
        //console.log(this.props.history.goBack())
    
        
    }
     
render(){
   console.log('entered post form................')
    return(
        
        <div>        
         
         <div class="form-group purple-border">
             <label for="exampleFormControlTextarea4"><h4>make Socity better</h4></label>
             <textarea class="form-control" name ="postdata" value={this.state.postdata} onChange={this.handlepostchange} placeholder="Write community name" id="exampleFormControlTextarea4" rows="1"></textarea>
         </div>
         <button class="btn btn-primary" onClick={this.submitpost}>Post</button>
     </div>

    );
}

}
Createcommunity.PropTypes={
    createComm: PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
    name:state.posts.username,
    postc:state.posts.communitycreated,

});
export default connect(mapStateToProps,{createComm})(Createcommunity);
