import { FETCH_POSTS, LOGAUTH, NEW_POSTS,LOGIN ,USER_POSTS,LOGOUT,FETCH_COMMINITIES,DELETEPOST,FETCHPRIVATE_POSTS,SUBSCRIBE} from '../actions/types';
import Cookies from 'universal-cookie';

const initialState={
    items:[],
    useritems:[],
    item:{},
    comminities:[],
    username:{},
    isAuthenticated:0,
    token:[],
    postcreated:[],
    privateposts:[],
    
}

export default function(state = initialState,action){
    switch(action.type){
        case USER_POSTS:
                console.log('user_post case..')
                return{
                    ...state,
                    useritems:action.payload,
                }

        case FETCH_POSTS:
                console.log('fetch posts reducer......')
                console.log(action.payload)
                //state.items=[]
                //const updateditems=state.items.push(action.payload)
                return{
                    ...state,
                    items:action.payload,
                }
            case FETCHPRIVATE_POSTS:
                console.log('fetch posts reducer......')
                console.log(action.payload)
                //state.items=[]
                //const updateditems=state.items.push(action.payload) SUBSCRIBE
                return{
                    ...state,
                    items:action.payload,
                }
        case FETCH_COMMINITIES:
                console.log(action.payload)
                return{
                    ...state,
                    comminities: action.payload,
                }
        case SUBSCRIBE:
                console.log(action.payload)
                action.payload=parseInt(action.payload,10)
                const newcomm=state.comminities.filter(item=>{
                    return item.rid!==action.payload
                });
                //state.comminities=newcomm
                console.log(state.comminities,newcomm)
                console.log('end')
                return{
                    ...state,
                    //comminities: ,
                }
            
        case NEW_POSTS:
                console.log('new posts')
                console.log(action.payload)
               
                console.log(state.items.push(action.payload))
                console.log(state.items)
                const newitem=state.items
                return{
                    ...state,
                    postcreated:action.payload,
                }

        case DELETEPOST:
                console.log(action.payload,parseInt(action.payload,10))
                console.log('delete reducer')
                action.payload=parseInt(action.payload,10)
                const newitems=state.items.filter(item=>{
                    return item.pid!==action.payload
                });
                state.items=newitems
                console.log(state.items,newitems)
                console.log('end')
                return{
                    ...state,
                    items:newitems
                }
        case LOGAUTH:
                console.log("log reducer............");
                console.log(action.payload)
                return{
                    ...state,
                    items:action.payload,
                }
        case LOGIN:
                console.log("token json")
                console.log(action.payload)
                if('token' in action.payload){
                    state.cookies=new Cookies();
                    state.cookies.set('jwttoken',action.payload,{path:'/',expires:new Date(Date.now()+25920000)});
                    state.username=action.name;
                    state.isAuthenticated=1;
                    //state.history.push("/reddit/"+state.username+"/");

                }
                return{
                    ...state,
                    token:action.payload,
                    username:action.name,
                    isAuthenticated:1,
                }
        case LOGOUT:
                console.log('logging out')
                state.cookies=new Cookies()
                state.cookies.set('jwttoken',action.payload,{path:'/',expires:new Date(Date.now()-25920000)});
                state.isAuthenticated=0;
                state.username='';
                return{
                    ...state,
                }

        default: return state;
    }
}
