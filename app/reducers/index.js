// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import audioSource from './audioSource';
import playList from './playlist';


const rootReducer = combineReducers({
  audioSource,
  playList,
  routing
});

export default rootReducer;
