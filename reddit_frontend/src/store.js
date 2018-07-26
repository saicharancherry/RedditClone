import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnly';
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const initiaState={};
const middlware = [thunk];
const store =createStore(
    rootReducer ,
    initiaState,
    composeEnhancers(
    applyMiddleware(...middlware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;