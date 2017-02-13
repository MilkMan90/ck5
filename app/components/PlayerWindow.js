// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './PlayerWindow.css';
import PlayBoxContainer from '../containers/PlayBoxContainer'

export default class PlayerWindow extends Component {
  constructor() {
    super()
    this.state = {
      audio1Volume: 1,
      audio2Volume: 1,
      gainFactor: 2
    }
  }
  componentDidMount() {

  }
  updateVolumes() {
    if(this.refs.crossfader.value >= 0){
      this.setState({
        audio1Volume: (1-this.refs.crossfader.value/100),
        audio2Volume: 1
      })
    } else {
      this.setState({
        audio1Volume: 1 ,
        audio2Volume: (1+this.refs.crossfader.value/100)
      })
    }
  }

  render() {

    return (
      <div className={styles.container}>
        <PlayBoxContainer volume={this.state.audio1Volume} audioIndex = {1}/>
        <input className={styles.crossfader} id="crossfader" min={-100} max={100} onChange={()=>{this.updateVolumes()}} ref="crossfader" type="range"/>
        <PlayBoxContainer volume={this.state.audio2Volume} audioIndex = {2}/>
      </div>
    );
  }
}
