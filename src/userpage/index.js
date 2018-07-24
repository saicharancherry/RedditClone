import React,{ Component} from 'react'

export class Userpage extends Component{
    state={
        message:"please log out",
    }
    render=(props)=>{
        if(this.props.isAuthenticated){
            this.setState({message:"loggedin"})
        }else{}
        
        return (
            <div>
               {this.state.message}
            </div>
        );
    }
}