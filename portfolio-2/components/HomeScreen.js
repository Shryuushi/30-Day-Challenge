import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 5
    },
    repText: {
        fontSize: 20
    }
})

export default function HomeScreen({navigation}) {
    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center"
        }}>
        <Text>Welcome to Your 30 Day Challenge!</Text>
        </View>
    )
}