// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Playlist.css'
import { getSongTags, createSongObject } from 'electron-audio-conversion'

//
export default class Playlist extends Component {

  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }

  renderPlaylist() {
    const filenames = this.props.playlist.filenames.map((m) => {
      return <li key={m}>{m}</li>
    })
    return filenames
  }
  render() {
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}>addFiles</button>
        <ol>{ this.props.playlist ? this.renderPlaylist() : '' }</ol>
      </div>
    );
  }
}
