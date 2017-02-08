// @flow
import { createSongObject, createSongUri } from 'electron-audio-conversion'
import React, { Component } from 'react';
import { Link } from 'react-router';
import dataurl from 'dataurl';
import ipcRenderer from 'electron';
import fs from 'fs';
import styles from './Home.css';
import simple from '../simple.mp3';

const { dialog } = require('electron').remote;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      audioSource: ''
    }
  }

  componentDidMount() {
    this.openFile()
  }

  openFile() {
    let file = dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'mp3', extensions: ['mp3'] }
      ]
    });
    // if (!file) { return; }
    console.log('file', file[0])
    createSongUri(file[0], 'audio/mp3').then((song) => this.setState({audioSource: song}))
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

  render() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return (
      <div>
        <audio className="audio" controls={true} ref="audio" src={this.state.audioSource}></audio>
        <button onClick={ ()=>{ this.playAudio(); }}>Play</button>
        <button onClick={ ()=>{ this.pauseAudio(); }}>Pause</button>
        {/* <button onClick={ ()=>{ this.stopAudio(); }}>Stop</button> */}
      </div>
    );
  }
}
