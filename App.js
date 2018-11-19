/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {MyButton} from "./components/MyButton";
import {QuoteView} from './components/QuoteView'


const trumpUrl = "https://cardfool.s3.amazonaws.com/cards/assets/low_President%20Trump%20Best%20Dad_cover.jpg"
type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {quote: 'Press the button to get a stupid quote!'}
    }

    getQuote() {
        fetch('https://api.tronalddump.io/random/quote')
            .then((resp) => resp.json())
            .then((json) => this.setState({quote: json.value}))
    }

    goToSearchQuote() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={{uri: trumpUrl}}/>
                <QuoteView quote={this.state.quote}/>
                <MyButton style={styles.buttonBig} title="Get stupid quote" onPress={() => this.getQuote()}/>
                <MyButton style={styles.buttonSmall} title="Or search quotes" onPress={() => this.goToSearchQuote()}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    bgImage: {
        width: '100%',
        height: '50%',
        marginBottom: 10
    },

    buttonBig: {
        backgroundColor: '#000066',
        color: 'white',
        borderRadius: 30,
        height: '8%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    },

    buttonSmall: {
        backgroundColor: '#006666',
        color: 'white',
        borderRadius: 30,
        height: '8%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    }


});
