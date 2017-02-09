// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openFile } from '../actions/loadsong';
import PlayerWindow from '../components/PlayerWindow';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {

  // return bindActionCreators({ openFile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerWindow);
