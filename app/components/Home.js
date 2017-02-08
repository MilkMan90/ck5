// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import simple from '../simple.mp3';

export default class Home extends Component {
  playAudio(){
    this.refs.audio.play()
  }
  pauseAudio(){
    this.refs.audio.pause()
  }
  stopAudio(){
    this.refs.audio.load()
  }
  render() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return (
      <div>
        <audio className="audio" controls={true} ref="audio" src={simple}></audio>
        <button onClick={ ()=>{ this.playAudio(); }}>Play</button>
        <button onClick={ ()=>{ this.pauseAudio(); }}>Pause</button>
        {/* <button onClick={ ()=>{ this.stopAudio(); }}>Stop</button> */}
      </div>
    );
  }
}
