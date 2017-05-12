/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {Grid, Row, Col, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Tabbar from '../components/Tabbar'
import BlodyHeader from '../components/Header'
import BlodySearchBar from '../components/SearchBar'

export default class Layout extends Component {
    
  render() {
      
    return (
        <View style={styles.tabView}>
          <Grid>
            <Row size={10}><BlodyHeader/></Row>
            <Row size={10}><BlodySearchBar/></Row>
            <Row size={80}><Tabbar /></Row>
          </Grid>
        </View>
    );
  }
}

  const styles = StyleSheet.create({
    tabView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  
  });