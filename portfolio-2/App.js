import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './components/HomeScreen'
import GroceryListScreen from './components/GroceryListScreen';
import CalendarScreen from './components/CalendarScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Grocery" component={GroceryListScreen} options={{title: "Grocery List"}}/>
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{title : "Calendar"}}/>
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
