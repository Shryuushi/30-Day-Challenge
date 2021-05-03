import * as React from 'react';
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements'

const exercisesDefault = [
    {
        name: "Sit ups",
        details: "Do 2 reps of 10",
        image: require("../images/sit-ups.gif"),
        key: "1"
    },
    {
        name: "Push ups",
        details: "Do 3 reps of 20",
        image: require("../images/push-ups.gif"),
        key: "2"
    },
    {
        name: "Jumping Jacks",
        details: "Do 5 reps of 25",
        image: require("../images/jumping-jacks.gif"),
        key: "3"
    },
    ]

export default function ExercisesScreen({ navigation }) {
    let [exercises, setExercises] = useState(exercisesDefault)
    let renderButton = ({ item }) => (
        <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
        }}>
        <Button
            title="Complete"
            style={styles.buttonStyle}
            onPress={() => navigation.push('Details', { item: item, items: exercises })}>
        </Button>
        <Text>{item.name}</Text>
        </View>)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, padding: 5 }}>Daily Workout!</Text>
        <FlatList data={exercises} renderItem={renderButton}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 5
    },
    repText: {
        fontSize: 20
    }
})