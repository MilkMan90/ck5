// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Playlist.css'
// import Sound from 'react-sound';

//
export default class Playlist extends Component {

  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }

  renderPlaylist() {
    if(this.props.playlist !== '') {
      const filenames  = this.props.playlist.filenames.map((m) => {
         return <li>{this.props.playlist.folderpath}/{m}</li>
      })
      return filenames
    }
  }
  render() {
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}>addFiles</button>
        { this.props.playlist ? this.renderPlaylist() : '' }
      </div>
    );
  }
}
