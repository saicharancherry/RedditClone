import React,{Component} from 'react'
import { connect } from 'react-redux'
import {createPost} from '../actions/postActions'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import Cookies from 'universal-cookie'

class Postform extends Component{
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

        fetch("https://redditmrnd.herokuapp.com/communitylist/" + this.props.name+"/",{
                method:'GET',
                headers:new Headers({
                    'Authorization':'JWT '+this.cookies.get('jwttoken').token,
                }),
        }).
        then(function(response){return response.json();})
        .then((jsondata)=>{this.setState(prev=>({data:jsondata}));}
        )
    }
      onChange(e){
          this.setState({[e.target.name]:e.target.value});
      }
      handleChange=(e)=>{
        this.setState({optionvalue:e.target.value})
    }
    handlepostchange=(e)=>{
        this.setState({postdata:e.target.value})
    }
    submitpost=(e)=>{
        e.preventDefault();
        console.log(this.state.data,this.state.optionvalue,this.state.postdata,this.cookies.get('jwttoken').token)
        const postData={
            username:this.props.name,
            optionvalue:this.state.optionvalue,
            postdata:this.state.postdata,
        }
        console.log('entered  post submit form');
        this.props.createPost(postData,this.cookies.get('jwttoken').token)
        
        console.log(this.props.history)
    
        
    }
     
render(){
   console.log('entered post form................')
    return(
        
        <div>
        <div><b>select community</b></div>  :   <select value={this.state.optionvalue} onChange={this.handleChange.bind(this)}>
        <option value="select community" name="community" ></option>
             {this.state.data && this.state.data.map((item)=>(
                 <option value={item.rid__rfield}>{item.rid__rfield}</option>
             ))}
         </select>
         
         <div class="file-tab panel-body">
             <label class="btn btn-default btn-file">
                 <span>Browse </span>
                 <input type="file" name="image-file"/>
             </label>
         </div>
         
         <div class="form-group purple-border">
             <label for="exampleFormControlTextarea4"><h4>Provoking Post</h4></label>
             <textarea class="form-control" name ="postdata" value={this.state.postdata} onChange={this.handlepostchange} placeholder="Write something here..." id="exampleFormControlTextarea4" rows="3"></textarea>
         </div>
         <button class="btn btn-primary" onClick={this.submitpost}>Post</button>
     </div>

    );
}

}
Postform.PropTypes={
    createPost: PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
    name:state.posts.username,
    postc:state.posts.postcreated,

});
export default connect(mapStateToProps,{createPost})(Postform);


//createComm


/*
import React,{ Component } from 'react';
import Cookies from 'universal-cookie';

class Submit extends Component{

    cookies=new Cookies();
    constructor(props){
        super(props);
        this.state={
            data:null,
            optionvalue:null,
            postdata:null,
            //this.props.match.params.username
        }
    }
    

    componentDidMount(){
    fetch("http://127.0.0.1:8000/communitylist/" + this.props.name+"/",{
            method:'GET',
            headers:new Headers({
                'Authorization':'JWT '+this.cookies.get('jwttoken').token,
            }),
    }).
    then(function(response){return response.json();})
    .then((jsondata)=>{this.setState(prev=>({data:jsondata}));}
    )
}
    handleChange=(e)=>{
        this.setState({optionvalue:e.target.value})
    }
    handlepostchange=(e)=>{
        this.setState({postdata:e.target.value})
    }
    submitpost=(e)=>{
        e.preventDefault();
        fetch("http://127.0.0.1:8000/createpost/",{
            method:'POST',
            body:JSON.stringify({username:this.props.name,pdata:this.state.postdata,pcid:this.state.optionvalue}),
            credentials:'same-origin',
            headers:new Headers({
                'Authorization':'JWT '+this.cookies.get('jwttoken').token,
            }),
            mode:'cors',
        }
    ).then(function(response){
        return response.json();
    }).then((jsondata)=>{
        if('success' in jsondata){
            console.log("success")
        }
    })
        
    }
    render()
    {
        return(
               <div>
               <select value={this.state.optionvalue} onChange={this.handleChange.bind(this)}>
                    {this.state.data && this.state.data.map((item)=>(
                        <option value={item.rid__rname}>{item.rid__rname}</option>
                    ))}
                </select>
                
                <div class="file-tab panel-body">
                    <label class="btn btn-default btn-file">
                        <span>Browse </span>
                        <input type="file" name="image-file"/>
                    </label>
                </div>
                
                <div class="form-group purple-border">
                    <label for="exampleFormControlTextarea4"><h4>Provoking Post</h4></label>
                    <textarea class="form-control" value={this.state.postdata} onChange={this.handlepostchange} placeholder="Write something here..." id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>
                <button onClick={this.submitpost}>Post</button>
            </div>
         
        )
    }
    

}
export default Submit;
*/