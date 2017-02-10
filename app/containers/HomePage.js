// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openFile } from '../actions/loadsong';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    audioOne: state.audioSource.audioOne,
    audioTwo: state.audioSource.audioTwo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openFile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
