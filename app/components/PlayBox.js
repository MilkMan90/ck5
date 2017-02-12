// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './PlayBox.css';
import ProgressBar from './ProgressBar';
import Playlist from './Playlist'

export default class PlayBox extends Component {
  constructor(){
    super()
    this.state = {
      playIndex: 0,
      play: false,
      currentSongTime: 0,
      currentSongDuration: 0
    }
  }

  componentDidMount(){
    console.log(this.refs);
  }

  playAudio() {
    this.setState({
      play: true
    })
    this.refs.audio.play()
  }

  pauseAudio() {
    this.setState({
      play: false
    })
    this.refs.audio.pause()
  }

  stopAudio() {
    this.refs.audio.load()
  }

  updateCurrentTime(){
    this.setState({
      currentSongTime: this.refs.audio.currentTime,
      currentSongDuration: this.refs.audio.duration
    })
  }

  componentWillReceiveProps(){
    this.refs.audio.volume = this.props.volume;
  }

  convertSecondsToTime(inputSeconds){
    let mins= inputSeconds/60;
    let seconds = Math.round(((mins%1)*60), -2);
    return `${Math.floor(mins)}:${seconds}`
  }

  updateSongPosition(percent) {
    this.refs.audio.currentTime = this.refs.audio.duration*percent;
    this.state.currentSongTime = this.state.currentSongDuration*percent;
  }

  playSongFromPlaylist(audioIndex, source, index){
    this.setState({
      playIndex: index
    })

    this.props.playSong(this.props.audioIndex, source)

    setTimeout(() => {
      this.playAudio();
    }, 100)
  }

  playNextSong() {
    if(this.props.playList[this.state.playIndex + 1]){
      this.setState({
        playIndex: this.state.playIndex + 1
      })

      this.props.playSong(this.props.audioIndex, this.props.playList[this.state.playIndex+1].filePath)

      setTimeout(() => {
        this.playAudio();
      }, 100)
    }
  }

  render() {
    let progressBar;
    if(this.props.audioSource){
      progressBar = <ProgressBar duration={this.state.currentSongDuration} currentTime={this.state.currentSongTime} audioSource={this.props.playList[this.state.playIndex]} updateSongPosition={(percent)=>{this.updateSongPosition(percent)}} />
    }
    return (
      <div className={styles.container}>
        <h2>Track {this.props.audioIndex}</h2>
        {progressBar}
        <audio className="audio" controls={false} onEnded={()=>{this.playNextSong()}} onTimeUpdate={()=>{this.updateCurrentTime();}} ref="audio" src={this.props.audioSource}></audio>
        <button className={styles.playButton} onClick={() => { this.playAudio(); }}>Play</button>
        <button className={styles.pauseButton} onClick={() => { this.pauseAudio(); }}>Pause</button>
        {/* <button className={styles.openButton} onClick={() => { this.sendFileToStore(); }}>Open</button> */}
        <div className={styles.volumeControl}></div>
        <Playlist audioIndex={this.props.audioIndex}
        playSong={(audioIndex, source, index)=>{this.playSongFromPlaylist(audioIndex, source, index)}} openFolder={this.props.openDirectory} playlist={this.props.playList}
        openFile={this.props.openFile}/>
      </div>
    );
  }
}
