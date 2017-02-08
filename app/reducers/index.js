// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import audioSource from './audioSource';


const rootReducer = combineReducers({
  audioSource,
  routing
});

export default rootReducer;
