import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class QuoteDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quoteObj: this.props.navigation.getParam('quoteObj', {})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{'Stupid quote no. ' + this.state.quoteObj.id}</Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.state.quoteObj.quote.value}</Text>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        fontSize: 17
    },

    textWrapper: {
        borderWidth: 1,
        borderColor: '#000066',
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 20,
    },
    text: {
        color: '#000066',
        fontSize: 20
    }
});