// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './PlayBox.css';
import AudioComponent from './AudioComponent'

export default class PlayBox extends Component {

  playAudio() {
    this.refs.audio.play()
  }
  pauseAudio() {
    this.refs.audio.pause()
  }
  stopAudio() {
    this.refs.audio.load()
  }
  sendFileToStore(){
    this.props.openFile(this.props.audioIndex);
  }

  render() {
    console.log(this.props)
    // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return (
      <div className={styles.container}>
        {/* <audio className="audio" controls={false} ref="audio" src={this.props.audioSource}></audio> */}
        <AudioComponent source={this.props.audioSource}/>
        <button className={styles.playButton} onClick={() => { this.playAudio(); }}>Play</button>
        <button className={styles.pauseButton} onClick={() => { this.pauseAudio(); }}>Pause</button>
        <button className={styles.openButton} onClick={() => { this.sendFileToStore(); }}>Open</button>
      </div>
    );
  }
}

// createSongUri(file[0], 'audio/mp3')
// .then((song) => { dispatch(createSongAction(song)) })
