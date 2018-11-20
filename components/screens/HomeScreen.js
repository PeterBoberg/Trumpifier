import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {MyButton} from "../views/MyButton";
import {QuoteView} from '../views/QuoteView'
import {commonStyles} from '../../styles/commonStyles'

const trumpUrl = "https://cardfool.s3.amazonaws.com/cards/assets/low_President%20Trump%20Best%20Dad_cover.jpg"
type Props = {};
export default class HomeScreen extends Component<Props> {

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
        this.props.navigation.navigate('SearchQuoteScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={{uri: trumpUrl}}/>
                <QuoteView quote={this.state.quote}/>
                <MyButton style={commonStyles.buttonBig} title="Get stupid quote" onPress={() => this.getQuote()}/>
                <MyButton style={commonStyles.buttonSmall} title="Or search quotes"
                          onPress={() => this.goToSearchQuote()}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    bgImage: {
        width: '100%',
        height: '50%',
        marginBottom: 10
    },
});