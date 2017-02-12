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
      tick: 0
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        tick: this.state.tick+1
      })
    }, 50)
  }
  playAudio() {
    this.refs.audio.play()
  }
  pauseAudio() {
    this.refs.audio.pause()
  }
  stopAudio() {
    this.refs.audio.load()
  }

  componentWillReceiveProps(){
    this.refs.audio.volume = this.props.volume;
    console.log(this.refs)
    console.log('vol', this.props.volume)
  }

  sendFileToStore(){
    this.props.openFile(this.props.audioIndex);
  }

  convertSecondsToTime(inputSeconds){
    let mins= inputSeconds/60;
    let seconds = Math.round(((mins%1)*60), -2);
    return `${Math.floor(mins)}:${seconds}`
  }

  updateSongPosition(percent) {
    this.refs.audio.currentTime = this.refs.audio.duration*percent;
  }

  render() {
    let progressBar;
    if(this.props.audioSource){
      progressBar = <ProgressBar duration={this.refs.audio.duration} currentTime={this.refs.audio.currentTime} audioSource={this.props.audioSource} updateSongPosition={(percent)=>{this.updateSongPosition(percent)}} />
    }
    return (
      <div className={styles.container}>
        <h2>Track {this.props.audioIndex}</h2>
        {progressBar}
        <audio className="audio" controls={false} ref="audio" src={this.props.audioSource}></audio>
        <button className={styles.playButton} onClick={() => { this.playAudio(); }}>Play</button>
        <button className={styles.pauseButton} onClick={() => { this.pauseAudio(); }}>Pause</button>
        <button className={styles.openButton} onClick={() => { this.sendFileToStore(); }}>Open</button>
        <div className={styles.volumeControl}></div>
        <Playlist audioIndex={this.props.audioIndex} openFolder={this.props.openDirectory}/>
      </div>
    );
  }
}
