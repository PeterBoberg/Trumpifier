import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";


export const QuoteCell = (props) => {
    const quoteObj = props.quoteObj
    const text = quoteObj.quote.value.length > 25 ? quoteObj.quote.value.substring(0, 25) + '...' : quoteObj.quote.value;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={defStyles.cellContainer}>
                <View style={defStyles.roundImage}>
                    <Text style={defStyles.label}>{quoteObj.id}</Text>
                </View>
                <View style={defStyles.textWrapper}>
                    <Text style={defStyles.text}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

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
    },
    textWrapper: {},
    text: {
        fontSize: 20,
        color: '#000066'
    }
});