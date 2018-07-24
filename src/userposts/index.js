import React,{ Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect ,Link} from "react-router-dom";
import {withRouter} from 'react-router' ;

class Post extends Component{
    cookies=new Cookies();
    constructor(){
    super();
    this.state={
        data:null,
        //this.props.match.params.username
    }
    }

    componentDidMount(){
    fetch("http://127.0.0.1:8000/posts/"+this.props.name+"/",{
            method:'GET',
            headers:new Headers({
                'Authorization':'JWT '+this.cookies.get('jwttoken').token,
            }),
    }).
    then(function(response){
        return response.json();})
    .then((jsondata)=>{this.setState(prev=>({data:jsondata}));}
    )
}

    render=(props)=>
    {
        
        return(
            <div>
            <div>
            {this.state.data && this.state.data.map((item)=>(
            <div class="border-bottom-0"><div style={{borderWidth:"5px"}}>
             

            <div class="scrollerItem s1r3zmnv-8 cjsyYF Post t3_8v7mu3  s18unrpv-0 itoCnT" id="t3_8v7mu3" tabindex="-1">
            
            
            <div style={{height:"5px"}}></div>


            <div class="_23h0-EcaBUorIHC-JZyh6J" style={{width:'40px',borderLeftStyle:'4px solid transparent',paddingBottom:'5px'}}><div class="s5tb091-0 ZCBAU">
                       
    
            </div></div><div class="_1poyrkZ7g36PawDueRza-J s1r3zmnv-7 bmeGah">
            
            <article class="s1r3zmnv-0 dulfGB">
            <div class="s1r3zmnv-2 bIsIMY" data-click-id="body"><div class="pxg6d2-0 evYbWH"><div class="pxg6d2-1 gxMsxi">
            <a class="s1uc7yii-0 eAfOKg" data-click-id="subreddit" href="/r/news/">
            <img class="" src=""/></a>
            </div><div class="pxg6d2-2 ctTKTE"><div class="pxg6d2-3 hajSzv">
            <button>
            <button><div><i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i></div></button> <span style={{width:'10px'}}></span>
            <div  style={{color:"#1c1c1c"}}>10.7k</div>
            </button>
            <a class="s1uc7yii-0 eAfOKg" data-click-id="subreddit" href="/r/news/">{item.pcid__rid__rname}</a>
            <span class="s1orzlg4-0 hTeuHe" role="presentation">•</span><span class="_2fCzxBE1dlMh4OFc7B3Dun">Posted by</span>
            <span style={{width:'10px'}}></span>
            <button><div><i class="icon icon-downvote ZyxIIl4FP5gHGrJDzNpUC"></i></div></button>

            <div class="wx076j-0 hPglCh"><a class="_2tbHP6ZydRpjI44J3syuqC s1461iz-1 gWXVVu" href="/user/heinderhead">{item.uid__rname}</a>
            </div>

            <a class="_3jOxDPIQ0KaOWpzvSQo-1s" data-click-id="timestamp" href="https://www.reddit.com/r/news/comments/8v7mu3/recreational_marijuana_now_legal_in_vermont/" id="PostTopMeta--Created--false--t3_8v7mu3" target="_blank" rel="nofollow noopener">{item.ptime}</a></div>
            <div class="pxg6d2-4 jdVkJQ"></div></div></div><div><span class="y8HYJ-y_lTUHkQIc1mdCq s1r3zmnv-3 gFGNNj">
            <a data-click-id="body" class="SQnoC3ObvgnGjWt90zD9Z" href="">
            <h2 class="s134yi85-0 bNKTNd">{item.pdata}</h2><div class="_1wrPey753PxLyLbB0NCEZP"></div></a></span></div>
            <div class="jlrhi6-1 fRrLNy"><a class="s14d20sq-0 kqPUmU" href="https://www.burlingtonfreepress.com/story/news/2018/07/01/vermonts-legal-marijuana-era-dawns/742514002" rel="noopener noreferrer" target="_blank">burlingtonfreepress.com/story/...<i class="icon icon-outboundLink jlrhi6-0 esUKm"></i></a></div></div>
            
                </article>
            <div class="s1r3zmnv-6 gMdMBr"><div><div class="_3-miAEojrCvx_4FQ8x3P-s">
            <a rel="nofollow" data-click-id="comments" data-test-id="comments-page-link-num-comments" class="_1UoeAeSRhOKSNdY_h3iS1O _1Hw7tY9pMr-T1F4P1C-xNU" href="/r/news/comments/8v7mu3/recreational_marijuana_now_legal_in_vermont/"><div>
                <i class="icon icon-comment _3ch9jJ0painNf41PmU4F9i _3DVrpDrMM9NLT6TlsTUMxC"></i>
                <span class="FHCV02u6Cp2zYL0fhQPsO">514 comments</span>
                </div></a><div class="_3XELg38mTJetc-xIUOKrMy" id="t3_8v7mu3-share-menu">
                <button class="s1qn1sr9-0 cqRbIO" data-click-id="share"><i class="icon icon-share xwmljjCrovDE5C9MasZja _1GQDWqbF-wkYWbrpmOvjqJ"></i>
                <span class="_6_44iTtZoeY6_XChKt5b0">share</span></button></div><div class="s7vvtc7-0 kJKGoj"></div><div>
                    <button class="s1d0qa2-9 eeGJEy s12jqx1h-1 imtPHR" aria-expanded="false" aria-haspopup="true" aria-label="more options" id="t3_8v7mu3-overflow-menu">
                    <i class="icon icon-menu s12jqx1h-2 cIafAH"></i></button></div>
            <div class="_21pmAV9gWG6F_UKVe7YIE0"></div>
            <span class="_2cxR1YcQUgsimt7WSmt8FI"></span></div></div></div></div></div></div></div>
            ))}
               </div>
               
            <div id="d2" >
            <div class="jumbotron">
                <h1>Inspire people with your post</h1>
                <p>...</p>
                <p><Link to='submit/'>Post</Link></p>
            </div>
            </div>

            </div>
            
       
        )
    }

}
export default Post;
 //            <span class="vote"> </span></button>
