// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openFile } from '../actions/loadsong';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    audioSource: state.audioSource
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ openFile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
