// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Playlist.css'
import { getSongTags, createSongObject } from 'electron-audio-conversion'

//
export default class Playlist extends Component {
  constructor() {
    super()
    this.state = {
      playlist: []
    }
  }

  sendFolderToStore() {
    this.props.openFolder(this.props.audioIndex)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.createPlaylist(nextProps);
  }

  createPlaylist(nextProps) {
    if(nextProps.playlist !== ""){
      let promiseArray = nextProps.playlist.filepaths.map((file)=>{
        return createSongObject(file)
      })

      Promise.all(promiseArray).then((songData)=>{
        this.setState({
          playlist: this.state.playlist.concat(songData)
        })
      })
    }
  }

  playSong(source){
    this.props.playSong(this.props.audioIndex, source)
  }

  render() {
    let playlist;
    if(this.state.playlist !== []){
      playlist = this.state.playlist.map((song, i)=>{
        return <li className={styles.songitem} key={i} onClick={()=>{this.playSong(file)}}>{song.title}</li>
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
