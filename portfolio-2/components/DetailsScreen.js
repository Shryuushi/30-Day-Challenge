import * as React from 'react';
import { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements'

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 5
    },
    repText: {
        fontSize: 20
    }
})

export default function DetailsScreen({ navigation, route }) {
    const { item, items } = route.params;
    let nextItemIndex = items.findIndex((curItem) => curItem == item)
    nextItemIndex = nextItemIndex + 1
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{height: 250, width: 350}} source={item.image}></Image>
            <Text style={{ padding: 10 }}>Description : {item.details}</Text>
        {nextItemIndex < items.length ?
            <Button
                title={`Next Exercise: ${items[nextItemIndex].name}`}
                style={{ padding: 10 }}
                onPress={() => navigation.push('Details', { item: items[nextItemIndex], items: items })}>
            </Button>
            : undefined}
        <Button
            title="Go Home"
            style={{ padding: 10 }}
            onPress={() => navigation.navigate('Exercises')}>
        </Button>
        </View>
    );
 }