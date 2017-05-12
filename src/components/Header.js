import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import BlodySideMenu from './SideMenu';

export default class BlodyHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Blody
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FCFDFD',
  },
});