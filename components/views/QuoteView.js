import {StyleSheet, Text, View} from "react-native";
import React from "react";

export const QuoteView = (props) => {
    const styles = StyleSheet.create({
        wrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
            width: '80%',
            flexDirection: 'row',
            padding: 10,
            marginBottom: 10,
            height: '20%'

        },
        quote: {
            color: '#000066',
            fontSize: 20,
            flexWrap: 'wrap',
            textAlign: 'center'
        }
    });

    return (
        <View style={[styles.wrapper, props.style]}>
            <Text style={styles.quote}>{props.quote}</Text>
        </View>
    )
};
