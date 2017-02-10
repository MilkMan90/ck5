// @flow
import React, { Component } from 'react';
import styles from './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={styles.h1}>CK-5</h1>
      </header>
    );
  }
}
