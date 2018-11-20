import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image} from 'react-native'
import {MyButton} from "../views/MyButton";
import {} from '../../styles/commonStyles'
import {commonStyles} from "../../styles/commonStyles";

const trumpUri = "https://ih1.redbubble.net/image.301802334.7298/flat,550x550,075,f.u1.jpg"

export default class SearchQuoteScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }

    searchQuote() {
        const url = `https://api.tronalddump.io/search/quote?query=${this.state.searchString}`
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => this.goToFoundQuotesScreen(json))
    }

    goToFoundQuotesScreen(json) {
        this.props.navigation.navigate('FoundQuotesScreen', {quotes: json._embedded.quotes})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: trumpUri}}/>
                </View>
                <TextInput style={styles.textInput}
                           placeholder="Enter some stupid text here"
                           onChangeText={(searchString) => this.setState({searchString})}/>
                <MyButton style={commonStyles.buttonBig}
                          title="Do it!"
                          onPress={() => this.searchQuote()}
                          disabled={this.state.searchString === ''}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageWrapper: {
        width: '100%',
        height: '70%',
        borderColor: 'black',
        marginBottom: '5%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textInput: {
        width: '80%',
        height: '5%',
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom: '5%',
        fontSize: 25
    }
});