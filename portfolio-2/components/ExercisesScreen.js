import * as React from 'react';
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

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
        <View style={{justifyContent:"center", padding:10}}>
            <Button
                onPress={() => navigation.push('Details', { item: item, items: exercises })}
                style={{fontSize:20, fontFamily:"Courier-new", color:"#615bbd", padding:5}}
                title={item.name}
            >
            </Button>
        </View>)
    return (
        <>
            <SafeAreaView style={styles.body}>
                <View style={{padding:10}}>
                    <Text style={{ fontSize: 30, padding: 5 , textAlign:"center", fontWeight:"bold"}}>Your Daily Workout!</Text>
                    <FlatList data={exercises} renderItem={renderButton}></FlatList>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
        margin:5,
        padding: 10,
        backgroundColor:"#afabeb"
    },
    buttonStyle: {
        flex: 1,
        padding: 5,
    },
})