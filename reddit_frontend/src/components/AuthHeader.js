import React, { Component } from "react";
import { Redirect,Link } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LogStatus} from '../actions/logAction'

class Redditheader extends Component{
        constructor(props){
              super(props);
              this.state={
              
              }
              //this.onChange=this.onChange.bind(this);
              this.mybutton=this.mybutton.bind(this);
          }
componentWillMount(){
    console.log('header enterd.......')
}
mybutton(e)
{
    console.log(this.props.history.push())
}

render(){
    //console.log(this.props.history.push())
    const userLinks=(
        <div>
            <button class="btn btn-outline-secondary"><Link to='/user/logout/'>logout</Link></button>
      </div>
    )

    const guestLinks=(
        
        <div>
            
            <button class="btn btn-outline-primary"><Link to='/user/login/'>login</Link></button>
            <button class="btn btn-outline-secondary"><Link to='/user/signup/'>signup</Link></button>

            </div>
    )
    console.log('rendering header enterd.......')
    return(
        
        <header class="_2GyPfdsi-MbQFyHRECo9GO s59a93p-0 irFqwH v103u5-0 iVZcZk" data-redditstyle="true">
        <div class="_3dnbqz69WJTFCss8wl7Wlk"><a aria-label="Home" class="_30BbATRhFv3V83DHNDjJAO" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="_1O4jTk-dZ-VIxsCuYB6OR8"><g>
            <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
            <path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg><svg class="_1bWuGs_1sq4Pqy099x_yy-" viewBox="0 0 55 17.44"><g fill="#1c1c1c"><circle fill="#FF4500" cx="45.77" cy="3.33" r="2.05"></circle>
            <path fill="inherit" d="M16.73,12.05a1.44,1.44,0,0,0,1.54-1.48,4.91,4.91,0,0,0-.1-0.83,5.66,5.66,0,0,0-5.34-4.61c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a5.47,5.47,0,0,0,4.26-1.78,1.19,1.19,0,0,0-.19-1.77,1.25,1.25,0,0,0-1.53.16,3.78,3.78,0,0,1-2.54,1.09,3.42,3.42,0,0,1-3.14-3.08h7ZM12.82,7.44a3.3,3.3,0,0,1,3,2.56h-6A3.3,3.3,0,0,1,12.82,7.44Z"></path><path fill="inherit" d="M7.44,6.32a1.15,1.15,0,0,0-1-1.14A4.46,4.46,0,0,0,2.31,6.69V6.54A1.15,1.15,0,1,0,0,6.54V16a1.18,1.18,0,0,0,1.08,1.2A1.15,1.15,0,0,0,2.31,16V11.15A3.51,3.51,0,0,1,6.15,7.47H6.38A1.15,1.15,0,0,0,7.44,6.32Z"></path><path fill="inherit" d="M46.92,7.56a1.15,1.15,0,0,0-2.31,0V16a1.15,1.15,0,1,0,2.31,0V7.56Z"></path>
            <path fill="inherit" d="M29.87,1.15A1.15,1.15,0,0,0,28.72,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,29.87,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S26.39,15.13,24.62,15.13Z"></path>
            <path fill="inherit" d="M41.92,1.15A1.15,1.15,0,0,0,40.77,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,41.92,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S38.44,15.13,36.67,15.13Z"></path>
            <path fill="inherit" d="M52.91,16V7.44h1a1,1,0,0,0,1.06-1,1,1,0,0,0-1-1.09H52.91V3.76a1.18,1.18,0,0,0-1.08-1.19,1.15,1.15,0,0,0-1.23,1.15V5.38h-1a1,1,0,0,0-1.06,1,1,1,0,0,0,1,1.09h1V16a1.15,1.15,0,0,0,1.15,1.15h0A1.15,1.15,0,0,0,52.91,16Z"></path></g></svg></a>
            <div class="_3jiriKeNer8y0-1r6oWIFM m-not-pinned">
            <button aria-label="Start typing to filter your subscriptions or use up and down to select." class="h-jI8r2f9ozTNqu_2TBeY" role="navigation"><span class="_1GieMuLljOrqnVpRAwz7VP">Popular</span><svg class="eZQ5o2PrhR59wkAtPbxMU" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><polygon fill="none" points="0 20 20 20 20 0 0 0"></polygon>
            <polygon fill="inherit" points="12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"></polygon></g></svg>
            <svg class="_3CG2U_hX3HI-ibl5v2RCq1 s19qhco8-0 bNOckh" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g>
                <path fill="inherit" d="M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"></path></g></svg></button></div><div class="_2dlTXDaX9JuL0bekTwhV18 a0gt6b-3 kSbOQT">
                <label class="a0gt6b-1 jvOQox" for="header-search-bar">
                <svg class="a0gt6b-2 gjLBy" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><g>
                    <path d="M12.4743167,11.1299698 L14.6957506,13.2817166 C15.0924476,13.665969 15.1025359,14.2990536 14.7182834,14.6957506 C14.334031,15.0924476 13.7009464,15.1025359 13.3042494,14.7182834 L11.0486163,12.5334103 C10.0079655,13.2768564 8.73367013,13.7142857 7.35714286,13.7142857 C3.84600096,13.7142857 1,10.8682847 1,7.35714286 C1,3.84600096 3.84600096,1 7.35714286,1 C10.8682847,1 13.7142857,3.84600096 13.7142857,7.35714286 C13.7142857,8.76975383 13.2536226,10.0747029 12.4743167,11.1299698 Z M11.7142857,7.35714286 C11.7142857,4.95057046 9.76371525,3 7.35714286,3 C4.95057046,3 3,4.95057046 3,7.35714286 C3,9.76371525 4.95057046,11.7142857 7.35714286,11.7142857 C9.76371525,11.7142857 11.7142857,9.76371525 11.7142857,7.35714286 Z"></path></g></svg></label><form action="/search" autocomplete="off" method="get">
                    <input type="search" class="a0gt6b-0 gpcxcB" aria-role="search" id="header-search-bar" name="q" placeholder="Search Reddit"/>
                    </form></div></div><div class="_2u8LqkbMtzd0lpblMFbJq5"><div class="x0hiXHicn7r3BG9m1FJH4 _23q1waDr4n_2fR5A7zcZzb">
                    <div class="_1vXXD2qKLnHetdKvisFzBD"><a class="_3dZnYgFFpifT-M_Vs2FAq6" id="header-quicklinks-popular" href="/">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><polygon fill="none" points="0 20 20 20 20 0 0 0"></polygon>
                    <polygon fill="inherit" points="12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"></polygon></g></svg>
                    </a><a class="_3dZnYgFFpifT-M_Vs2FAq6" id="header-quicklinks-all" href="/r/all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill-rule="evenodd"><polygon fill="none" points="0 20 20 20 20 .001 0 .001"></polygon>
                    <path fill="inherit" d="M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"></path></g></svg></a>
                    <a class="_3dZnYgFFpifT-M_Vs2FAq6" id="header-quicklinks-oc" href="/original">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="inherit" d="M16.9998,2.9995 C18.1028,2.9995 18.9998,3.8975 18.9998,4.9995 L18.9998,14.9995 C18.9998,16.1025 18.1028,16.9995 16.9998,16.9995 L2.9998,16.9995 C1.8978,16.9995 0.9998,16.1025 0.9998,14.9995 L0.9998,4.9995 C0.9998,3.8975 1.8978,2.9995 2.9998,2.9995 L16.9998,2.9995 Z M13.9648,13.3525 C15.2718,13.3525 16.3188,12.6745 16.8278,11.5665 L15.1818,10.9775 C14.9318,11.4765 14.4528,11.8165 13.8338,11.8165 C13.0158,11.8165 12.3478,11.0575 12.3478,9.9995 C12.3478,8.9525 13.0058,8.1735 13.8438,8.1735 C14.4528,8.1735 14.9218,8.5025 15.1308,8.9615 L16.6968,8.2435 C16.1988,7.2755 15.2108,6.6365 13.9648,6.6365 C12.0588,6.6365 10.5118,8.1335 10.5118,9.9995 C10.5118,11.8755 12.0588,13.3525 13.9648,13.3525 Z M6.6248,13.3635 C8.5408,13.3635 10.0878,11.8755 10.0878,9.9995 C10.0878,8.1335 8.5408,6.6365 6.6248,6.6365 C4.7188,6.6365 3.1718,8.1335 3.1718,9.9995 C3.1718,11.8755 4.7188,13.3635 6.6248,13.3635 Z M6.625,8.1641 C7.562,8.1641 8.262,8.9421 8.262,10.0001 C8.262,11.0481 7.562,11.8361 6.625,11.8361 C5.697,11.8361 4.998,11.0481 4.998,10.0001 C4.998,8.9421 5.697,8.1641 6.625,8.1641 Z"></path></svg></a></div></div><div class="_19oWd7e3z7-ztUGzdIoCR7"><div class="_1JBkpB_FOZMZ7IPr3FyNfH">
                    {this.props.auth.isAuthenticated?userLinks:guestLinks}
                    </div><div class="U3FRqDA_Qhr4icbaNXSuf s1cu8rnh-0 kCxZdn">
                    <div class="s1waoko7-5 fExxVx"></div><div class="header-user-dropdown"><button class="s1waoko7-6 guxYJQ b1zwxr-0 hxpTao" aria-expanded="false" aria-haspopup="true" id="USER_DROPDOWN_ID"><div class="s19bur1g-0 dvjdUr">
                    <svg class="s19bur1g-8 vqQey" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g>
                        <path fill="inherit" d="M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"></path></g></svg></div><span class="s1dqr9jy-0 imyGpC"></span></button>
       
        </div></div></div></div></header>
    );
}
}
Redditheader.PropTypes={
    auth:PropTypes.object
}

const mapStateToProps= state =>({
    auth:state.posts,
});
export default connect(mapStateToProps,{})(Redditheader);
