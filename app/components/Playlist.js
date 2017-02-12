// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Playlist.css'
import { getSongTags, createSongObject } from 'electron-audio-conversion'

export default class Playlist extends Component {
  constructor() {
    super()

  }

  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }

  componentWillReceiveProps(nextProps){

  }

  playSong(source, index){
    console.log(source);
    this.props.playSong(this.props.audioIndex, source, index)
  }

  render() {
    let playlist;
    if(this.props.playlist.length !== 0){
      playlist = this.props.playlist.map((song, i) => {
        return <li className={styles.songitem} key={i} onClick={() => { this.playSong(song.filePath, i) }}>{song.title}</li>
      })
    }
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}>addFiles</button>
        <ol className={styles.songlist}>{ playlist }</ol>
      </div>
    );
  }
}
