// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import audioSource from './audioSource';


const rootReducer = combineReducers({
  counter,
  audioSource,
  routing
});

export default rootReducer;
