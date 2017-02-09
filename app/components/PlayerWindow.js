// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './PlayerWindow.css';
import PlayBoxContainer from '../containers/PlayBoxContainer'

export default class PlayerWindow extends Component {

  render() {
    return (
      <div>
        <PlayBoxContainer audioIndex = {1}/>
        <PlayBoxContainer audioIndex = {2}/>
      </div>
    );
  }
}
