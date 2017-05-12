/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {SearchBar, Grid, Row} from 'react-native-elements';


export default class BlodySearchBar extends Component {
    render() {
        return (
            <View>
                <Grid>
                    <Row>
                        <SearchBar
                            lightTheme
                            round
                            placeholder='Type Here...'>
                        </SearchBar>
                    </Row>
                </Grid>
            </View>
        );
    }
}






