// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './AudioComponent.css';
import PlayBoxContainer from '../containers/PlayBoxContainer'
import Sound from 'react-sound';

export default class AudioComponent extends Component {

  render() {
    return (
      <Sound
        url={this.props.source}
      />
    );
  }
}
