import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, MaskedViewComponent } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment'

export default function CalendarScreen({navigation, route}) {
    let date = moment().format("YYYY-MM-DD")

    const [selectedDate, setSelectedDate] = useState([])

    return (
      <>
        <View style={{flex:1, padding:10}}>
            <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center"}}>Calendar</Text>
            <Calendar
                current= {date}
                onDayPress={(day) => setSelectedDate(day.dateString)}
                markedDates= {{[selectedDate] :{
                  selected: true,
                  disabledTouchEvent: true,
                  selectedColor: '#F1EFFE',
                  selectedTextColor: '#7954FA',
                  onDayPress: navigation.navigate('Workouts')
                }}}
            />
        </View>
      </>
    )
}



const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
});