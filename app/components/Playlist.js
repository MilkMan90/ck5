// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Playlist.css'
// import Sound from 'react-sound';

//
export default class Playlist extends Component {
  componentDidMount() {

  }

  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }
  render() {
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}>addFiles</button>
      </div>
    );
  }
}
