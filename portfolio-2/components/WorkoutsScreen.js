import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ExercisesScreen from './ExercisesScreen';
import DetailsScreen from './DetailsScreen';
import CalendarScreen from './CalendarScreen';

const Stack = createStackNavigator();

export default function WorkoutScreen() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Exercises">
            <Stack.Screen name="Exercises" component={ExercisesScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
