/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './components/screens/HomeScreen'
import SearchQuoteScreen from "./components/screens/SerachQuoteScreen";
import FoundQuotesScreen from "./components/screens/FoundQuotesScreen";


const RootStack = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        SearchQuoteScreen: SearchQuoteScreen,
        FoundQuotesScreen: FoundQuotesScreen
    },
    {
        initialRouteName: "HomeScreen"
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}