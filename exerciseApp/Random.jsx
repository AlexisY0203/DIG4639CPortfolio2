import {React, useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

let randomExercises = ["Situps", "Pushups","Squats", "V-Sit and Reach", "Pull Ups", "Lunges",
    "Mile Run", "Pool Laps", "Plank", "Mountain Climbers", "Russian Twists", "Step Ups"];


export default function Random({navigation}) {
    let [randomNumber, setRandomNumber] = useState(-1)
    let getRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * randomExercises.length);
        setRandomNumber(randomNumber)
    }
    return (
        <View style={styles.container}>
            <Text>Choose a random exercise here!</Text>
            <Text>Just press the button, and be presented a random exercise to begin.</Text>
            <Button title="Randomize" onPress={getRandomNumber}></Button>
            <Text>Your Random Exercise Is:</Text>
            <Text>{randomExercises[randomNumber]}</Text>
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BCC5DC',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });