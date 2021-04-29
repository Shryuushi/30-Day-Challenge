import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Agenda, Calendar } from 'react-native-calendars';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

export default function CalendarScreen({navigation}) {
    const [items, setItems] = useState([])

    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {}
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems)}, 1000);
      }

    return (
        <>
            <View style={{padding:10}}>
                <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center"}}>Calendar</Text>
            </View>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });