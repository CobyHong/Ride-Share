import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [
                {
                    name: 'Derek',
                    src: 'SLO',
                    dest: 'LA',
                    price: 20,
                    spotsLeft: 2
                }
            ]
        }
    }

    static navigationOptions = {
        title: "Feed",
        headerStyle: {
            backgroundColor: "skyblue"
        },
        
        headerTitleStyle: {
            color: "white",
            fontSize: 50,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center"
        }
    }

    render() {
        return(
            <Text>Placeholder</Text>
        );
    }
}