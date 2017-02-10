// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openFile } from '../actions/loadsong';
import PlayBox from '../components/PlayBox';

function mapStateToProps(state, props) {
  let audioSource;
  if (props.audioIndex === 1) {
    audioSource = state.audioSource.audioOne;
  } else {
    audioSource = state.audioSource.audioTwo;
  }
  return {
    audioSource
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openFile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayBox);
