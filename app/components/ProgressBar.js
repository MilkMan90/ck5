import React, { Component } from 'react';
import { getSongTags, createSongObject } from 'electron-audio-conversion'

export default class ProgressBar extends Component {
  constructor() {
    super()
    this.state = {
    track: ''

    }
  }
  componentDidMount() {
    createSongObject(this.props.audioSource)
    .then((track) => {
      this.setState({
        track
      })
    })
  }

  convertSecondsToTime(inputSeconds){
    let mins= inputSeconds/60;
    let seconds = Math.round(((mins%1)*60), -2);
    return `${Math.floor(mins)}:${seconds}`
  }

  updateSongPosition(){
    console.log(this.refs.timingSlider.value);

    this.props.updateSongPosition(this.refs.timingSlider.value/1000)
  }
  render(){

    return (
      <div>
        <div>{this.state.track.title}</div>
        <div>{this.state.track.artist}</div>
        <div>{this.state.track.album}</div>

        <span>{this.convertSecondsToTime(this.props.currentTime)}</span>
        /
        <span>{this.convertSecondsToTime(this.props.duration)}</span>

        <svg width='150px' height='25px' viewBox='0 0 150 25' xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect fill="#D0011B" x={0} y={0} width={(this.props.currentTime/this.props.duration) * 100} height={10} />
            <rect fill="#50E3C2" x={(this.props.currentTime/this.props.duration) * 100} y={0} width={100 - 100 * (this.props.currentTime/this.props.duration)} height={10} />
          </g>
        </svg>

        <input id="timing-slider" min={0} max={1000} value={(this.props.currentTime/this.props.duration) * 1000}
        onChange={()=>{this.updateSongPosition()}} ref="timingSlider" type="range"/>


    </div>
  );
  }
};
