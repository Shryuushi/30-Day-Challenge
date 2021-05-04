import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Stopwatch } from 'react-native-stopwatch-timer'

export default function StopwatchScreen() {
    const [stopwatchStart, setStopwatchStart] = useState(false)
    const [stopwatchReset, setStopwatchReset] = useState(false)

    let toggleStopwatch = () => {
        setStopwatchStart(!stopwatchStart)
        setStopwatchReset(false)
    }
     
    let resetStopwatch = () => {
        setStopwatchStart(false) 
        setStopwatchReset(true)
    }
      
    let getFormattedTime = (time) => {
        let currentTime = time;
    }

    return (
        <>
        <View style={styles.body}>
            <View style={styles.container}>
                <Stopwatch laps msecs start={stopwatchStart}
                    reset={stopwatchReset}
                    getTime={getFormattedTime} 
                />
                <Button onPress={toggleStopwatch}
                    title={!stopwatchStart ? "Start" : "Stop"}
                    style={styles.buttonStyle}
                >
                </Button>
                <Button onPress={resetStopwatch}
                    style={styles.buttonStyle} 
                    title="Reset"
                >
                </Button>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#afabeb"
    },
    buttonStyle: {
        padding: 5,
    },
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: 360,
        margin: 10, 
        padding: 5,
    },
})


