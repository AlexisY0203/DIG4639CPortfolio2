import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Home from './Home.jsx';
import Exercises from './Exercises.jsx';
import Random from './Random.jsx';
import ToDo from './ToDo.jsx';
import ExerciseQuiz from './ExerciseQuiz.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="Random" component={Random} />
        <Stack.Screen name="ExerciseQuiz" component={ExerciseQuiz} />
        <Stack.Screen name="ToDo" component={ToDo} />
      </Stack.Navigator>
      <StatusBar style="auto" />
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
