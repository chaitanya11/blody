/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Layout from './src/layout/layout'

export default class blody extends Component {
  render() {
    return (
        <Layout />
    );
  }
}


AppRegistry.registerComponent('blody', () => blody);
