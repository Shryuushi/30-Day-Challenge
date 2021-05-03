import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
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
        <View>
            <Stopwatch laps msecs start={stopwatchStart}
                reset={stopwatchReset}
                options={options}
                getTime={getFormattedTime} />
            <TouchableHighlight onPress={toggleStopwatch}>
                <Text style={{fontSize: 30}}>{!stopwatchStart ? "Start" : "Stop"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={resetStopwatch}>
                <Text style={{fontSize: 30}}>Reset</Text>
            </TouchableHighlight>
        </View>
    )
}

const options = {
    container: {
      backgroundColor: '#000',
      padding: 5,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 30,
      color: '#FFF',
      marginLeft: 7,
    }
  };


