import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import { Agenda } from 'react-native-calendars';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

export default function CalendarScreen({navigation}) {
    const [items, setItems] = useState({})
   
    let loadItems =(day) => {
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            items[strTime].push({
              name: 'Workout for Today',
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
        const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
        setItems(newItems)}, 1000);
    }

    let renderItem = (item) => {
      return (
        <Button 
          style={styles.item}
          title={item.name}
          onPress={() => navigation.navigate('Workouts')}
        >
        </Button>
      );
    }
      
    return (
      <>
        <View style={{flex:1, padding:10}}>
            <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center"}}>Calendar</Text>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
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