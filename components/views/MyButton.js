import {Button, TouchableOpacity} from "react-native";
import React from "react";

export const MyButton = (props) => (
    <TouchableOpacity style={props.style}>
        <Button title={props.title} onPress={props.onPress} color={props.style.color} disabled={props.disabled}/>
    </TouchableOpacity>
);
