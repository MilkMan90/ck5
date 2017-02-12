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

    let promiseArray = this.props.playlist.filepaths.map((file)=>{
      return createSongObject(file)
    })

    console.log(promiseArray);
    
    Promise.all(promiseArray).then(values => {
      console.log(values);
    })

    // const filenames = this.props.playlist.filepaths.map((file, i) => {
    //   createSongObject(file).then((songObj)=>{
    //     console.log(songObj);
    //     return <li className={styles.songitem} key={i} onClick={()=>{this.playSong(file)}}>{file}</li>
    //   })
    // })
    // return filenames
  }

  playSong(source){
    this.props.playSong(this.props.audioIndex, source)
  }

  render() {
    return (
      <div className={styles.playlistcontainer}>
        <button className={styles.addFilesButton} onClick={() => { this.sendFolderToStore(); }}>addFiles</button>
        <ol className={styles.songlist}>{ this.props.playlist && this.renderPlaylist() }</ol>
      </div>
    );
  }
}
