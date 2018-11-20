import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

export const QuoteCell = (props) => {
    const defStyles = StyleSheet.create({
        cellContainer: {
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 80
        },
        roundImage: {
            height: 70,
            aspectRatio: 1,
            backgroundColor: '#86592d',
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
        },
        label: {
            color: 'white',
            fontSize: 40
        }
    })

    const quoteObj = props.quoteObj
    console.log(quoteObj)
    return (
        <View style={defStyles.cellContainer}>
            <View style={defStyles.roundImage}>
                <Text style={defStyles.label}>{quoteObj.id}</Text>
            </View>
            <Text>{quoteObj.quote.value}</Text>
        </View>
    )
};


export default class FoundQuotesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: this.props.navigation.getParam('quotes', [])
        }

    }

    renderCell(quoteObj) {
        console.log(quoteObj)
        return (
            <QuoteCell quoteObj={quoteObj}/>
        )
    }

    render() {
        const data = this.state.quotes.map((quote, index) => ({id: index, quote: quote}));
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Here are some stupid quotes for you!</Text>
                <FlatList renderItem={({item}) => this.renderCell(item)}
                          data={data}
                          keyExtractor={(item, index) => `${item.id}`}/>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        color: '#000066'
    },
    cellContainer: {}

})