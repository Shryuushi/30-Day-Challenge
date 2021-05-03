import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './components/HomeScreen'
import GroceryListScreen from './components/GroceryListScreen';
import CalendarScreen from './components/CalendarScreen'
import WorkoutScreen from './components/WorkoutsScreen'
import StopwatchScreen from './components/StopwatchScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Grocery" component={GroceryListScreen} options={{title: "Grocery List"}}/>
        <Tab.Screen name="Date" component={CalendarScreen} options={{title : "Calendar"}}/>
        <Tab.Screen name="Workouts" component={WorkoutScreen}/>
        <Tab.Screen name="Stopwatch"  component={StopwatchScreen} options={{title: "Stopwatch"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
