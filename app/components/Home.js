// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import electron from 'electron'
import {remote} from 'electron'
import simple from '../simple.mp3';

export default class Home extends Component {
  componentDidMount(){
    const test = remote.require('./main.development');
    console.log(test);
    test.remoteTester();
    // console.log(remote.getGlobal('remoteTester')());
  }
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
        <audio className="audio"  ref="audio" src={simple}></audio>
        <button onClick={ ()=>{ this.playAudio(); }}>Play</button>
        <button onClick={ ()=>{ this.pauseAudio(); }}>Pause</button>
        {/* <button onClick={ ()=>{ this.stopAudio(); }}>Stop</button> */}
      </div>
    );
  }
}
