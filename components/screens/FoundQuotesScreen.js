import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {QuoteCell} from "../views/QuoteCell";

export default class FoundQuotesScreen extends Component {

    constructor(props) {
        super(props);
        const quotes = this.props.navigation.getParam('quotes');
        this.state = {
            quotes: quotes !== undefined ? quotes : []
        }
    }

    renderCell(quoteObj) {
        return (
            <QuoteCell quoteObj={quoteObj} onPress={() => this.goToDetail(quoteObj)}/>
        )
    }

    goToDetail(quoteObj) {
        this.props.navigation.navigate('QuoteDetailScreen', {quoteObj: quoteObj})
    }

    render() {
        const data = this.state.quotes.map((quote, index) => ({id: index, quote: quote}));
        const headerText = data.length > 0 ? 'Found some stupid quotes for you!' : 'Could not find any stupid quotes'
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{headerText}</Text>
                </View>
                <FlatList style={styles.list}
                          renderItem={({item}) => this.renderCell(item)}
                          data={data}
                          keyExtractor={(item, index) => `${item.id}`}
                />
                <View style={styles.footer}/>
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
        backgroundColor: '#000066',
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        color: 'white'
    },
    list: {
        width: '100%',
    },
    footer: {
        height: '8%',
        backgroundColor: 'red'

    }

})