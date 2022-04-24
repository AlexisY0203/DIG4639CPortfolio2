import React, { useState } from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

let questions = [
    {
        key: 1, 
        question: "Strength",
        solution: "Weight Training"
    },
    {
        key: 2, 
        question: "Flexibility",
        solution: "Yoga"
    },
    {
        key: 3, 
        question: "Endurance",
        solution: "Running/Swimming"
    }
]

export default function ExerciseQuiz({navigation}) {
    let [userOption, setUserOption] = useState(null);
    let [userSolution, setUserSolution] = useState(null);
return (
    <View style={styles.container}>
        <Text>Choose your main goal in exercising:</Text>
        <FlatList data={questions} renderItem={({item, index}) => 
            <Pressable
                style={item.question === userOption ? styles.selected : styles.notSelected} 
                onPress={() => (setUserOption(item.question), setUserSolution(item.solution))}>
                <Text key={index} style={styles.choices}>{item.question}</Text>
            </Pressable>}>
        </FlatList>
        <Text>You chose: {userOption}</Text>
        <Text>Your type of Exercise should be: {userSolution}</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DCC5AD',
      alignItems: 'center',
    },
    choices: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },
    notSelected: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
    },
    selected: {
        backgroundColor: '#EDD892',
        margin: 6,
        padding: 7,
        borderRadius: 7,
    },
  });