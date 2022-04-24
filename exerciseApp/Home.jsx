import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

let exercisesList = [
    {
        key: 1,
        activityName: "Situps",
        activityDetails: "Lay on your back and lift your toro to your knees.",
        suggestedName: 'V-Sit and Reach',
        suggestedDetails: 'Sit with legs in v shape and reach for toes.',
    },
    {
        key: 2,
        activityName: "Pushups",
        activityDetails: "Get in a prone position then raise and lower your body.",
        suggestedName: 'Pullups',
        suggestedDetails: 'Hold an overhead bar and lift body.',
    },
    {
        key: 3,
        activityName: "Squats",
        activityDetails: "Lower your hips from a standing position then stand back up.",
        suggestedName: 'Lunges',
        suggestedDetails: 'Step forward with one leg lowering toward the ground, return back up and repeat with other leg.',
    }
]

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>1. Choose a Warm Up Exercise to Begin</Text>
            <FlatList data={exercisesList} renderItem={
                ({item, index}) => <Button key={index} title={item.activityName} onPress={() =>
                    (navigation.navigate('Exercises', {
                        key: item.key,
                        activityName: item.activityName,
                        activityDetails: item.activityDetails,
                        suggestedName: item.suggestedName,
                        suggestedDetails: item.suggestedDetails,
                    }))
                } />
            }></FlatList>
            <Text>2. Can't Decide? Find a Randomized Exercise</Text>
            <Button title="Random Exercises" onPress={() => navigation.navigate('Random')}></Button>
            <Text>3. What Kind of Exercises Do You Like?</Text>
            <Button title="Exercise Quiz" onPress={() => navigation.navigate('ExerciseQuiz')}></Button>
            <Text>4. Create Your Own Exercise To-Do List</Text>
            <Button title="Create ToDo" onPress={() => navigation.navigate('ToDo')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C5DCBC',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

