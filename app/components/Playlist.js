// @flow
import React, { Component } from 'react';
import styles from './Playlist.css'
import openFileButton from '../imgs/file-music.svg'
import openFolderButton from '../imgs/folder-plus.svg'

export default class Playlist extends Component {

  sendFileToStore(){
    this.props.openFile(this.props.audioIndex);
  }

  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }

  playSong(source, index){
    this.props.playSong(this.props.audioIndex, source, index)
  }

  render() {
    let playlist;
    if(this.props.playlist.length !== 0){
      playlist = this.props.playlist.map((song, i) => {
        return <li className={styles.songitem} key={i} onClick={() => { this.playSong(song.filePath, i) }}>{song.title} - {song.artist} - {song.album}</li>
      })
    }
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.openButton} onClick={() => { this.sendFileToStore(); }}><img src={openFileButton}/></button>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}><img src={openFolderButton}/></button>
        <ol className={styles.songlist}>{ playlist }</ol>
      </div>
    );
  }
}
