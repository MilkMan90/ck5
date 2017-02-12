// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openFile, openDirectory } from '../actions/loadsong';
import PlayBox from '../components/PlayBox';

function mapStateToProps(state, props) {
  let audioSource;
  let playList;
  if (props.audioIndex === 1) {
    audioSource = state.audioSource.audioOne;
    playList = state.playList.audioOnePlaylist
  } else {
    audioSource = state.audioSource.audioTwo;
    playList = state.playList.audioTwoPlaylist
  }
  return {
    audioSource,
    playList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openFile, openDirectory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayBox);
