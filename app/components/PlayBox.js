// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './PlayBox.css';
import ProgressBar from './ProgressBar';

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
    }, 1000)
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

  render() {
    let progressBar;
    if(this.props.audioSource){
      progressBar = <ProgressBar duration={this.refs.audio.duration} currentTime={this.refs.audio.currentTime} audioSource={this.props.audioSource} />
    }
    return (
      <div className={styles.container}>
        <audio className="audio" controls={false} ref="audio" src={this.props.audioSource}></audio>
        <button className={styles.playButton} onClick={() => { this.playAudio(); }}>Play</button>
        <button className={styles.pauseButton} onClick={() => { this.pauseAudio(); }}>Pause</button>
        <button className={styles.openButton} onClick={() => { this.sendFileToStore(); }}>Open</button>
        {progressBar}
        <div className={styles.volumeControl}></div>
      </div>
    );
  }
}
