import React from 'react';
import { Text } from 'react-native';

export default Count = (props) => {
    return (
        <Text style={props.style}>{props.count}</Text>
    )
}