import React from 'react' 
import { useState } from 'react'
import { View } from 'react-native'
import EventCalendar from 'react-native-events-calendar'

export default function WorkoutScreen() {
    const [events, setEvents] = useState([
        {
        start: '2021-04-01 01:00:00',
        end: '2021-04-01 01:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
        },
        {
        start: '2021-04-02 00:30:00',
        end: '2021-04-02 01:30:00',
        title: 'Visit Grand Mother',
        summary: 'Visit Grand Mother and bring some fruits.',
        color: '#ade6d8'
        },
        {
        start: '2021-04-03 02:30:00',
        end: '2021-04-03 02:20:00',
        title: 'Meeting with Prof. Behjet Zuhaira',
        summary: 'Meeting with Prof. Behjet at 130 in her office.',
        color: '#e6add8'
        },
        {
        start: '2021-04-04 04:10:00',
        end: '2021-04-04 04:40:00',
        title: 'Tea Time with Dr. Hasan',
        summary: 'Tea Time with Dr. Hasan, Talk about Project'
        },
        {
        start: '2021-04-05 01:05:00',
        end: '2021-04-05 01:35:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032'
        },
        {
        start: '2021-04-06 14:30:00',
        end: '2021-04-06 16:30:00',
        title: 'Meeting Some Friends in ARMED',
        summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
        color: '#d8ade6'
        },
        {
        start: '2021-04-07 01:40:00',
        end: '2021-04-07 02:25:00',
        title: 'Meet Sir Khurram Iqbal',
        summary: 'Computer Science Dept. Comsats Islamabad',
        color: '#e6bcad'
        },
        {
        start: '2021-04-08 04:10:00',
        end: '2021-04-08 04:40:00',
        title: 'Tea Time with Colleagues',
        summary: 'WeRplay'
        },
        {
        start: '2021-04-09 00:45:00',
        end: '2021-04-09 01:45:00',
        title: 'Lets Play Apex Legends',
        summary: 'with Boys at Work'
        },
        {
        start: '2021-04-10 11:30:00',
        end: '2021-04-10 12:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032'
        },
        {
        start: '2021-04-11 12:10:00',
        end: '2021-04-11 13:45:00',
        title: 'Merge Request to React Native Calendards',
        summary: 'Merge Timeline Calendar to React Native Calendars'
        }
      
    ])
    return (
        <View>
            <EventCalendar
                initDate={'2021-04-01'}
                events={() => setEvents(events)}
                style={{backgroundColor:"white", opacity: 0.5}}
            />
        </View>
    )
};
