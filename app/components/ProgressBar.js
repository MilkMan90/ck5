import React, { Component } from 'react';
import styles from './ProgressBar.css';

export default class ProgressBar extends Component {
  constructor() {
    super()
    this.state = {
      track: ''
    }
  }

  convertSecondsToTime(inputSeconds){
    let mins= inputSeconds/60;
    let seconds = Math.round(((mins%1)*60), -2);
    return `${Math.floor(mins)}:${seconds}`
  }

  updateSongPosition(){
    this.props.updateSongPosition(this.refs.timingSlider.value/1000)
  }

  render(){
    return (
      <div className={styles.container}>
        <div>{this.props.audioSource.title}</div>
        <div>{this.props.audioSource.artist}</div>
        <div>{this.props.audioSource.album}</div>
        <span>{this.convertSecondsToTime(this.props.currentTime)}</span>
        /
        <span>{this.convertSecondsToTime(this.props.duration)}</span>
        <input className={styles.slider} id="timing-slider" min={0} max={1000} value={(this.props.currentTime/this.props.duration) * 1000}
        onChange={()=>{this.updateSongPosition()}} ref="timingSlider" type="range"/>

    </div>
  );
  }
}
