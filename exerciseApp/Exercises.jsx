import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';


export default function Exercises({route, navigation}) {
    let [count, setCount] = React.useState(0);
    return (
        <View style={styles.container}>
            <Text>Exercise Name: {route.params.activityName}</Text>
            <Text>Exercise Description: {route.params.activityDetails}</Text>
            <Text>Count below to 3 sets of 10 reps!</Text>
            <Text>Count: {count}</Text>
            <Text>
                <Button title="Add" onPress={() => setCount(count + 1)}></Button>
                <Button title="Reset" onPress={() => setCount(0)}></Button>
            </Text>
            {!!route.params.suggestedName && <>
            <Text>Now follow up with this exercise for more training: </Text>
            <Button title={route.params.suggestedName} onPress={() => {
                setCount(0);
                navigation.navigate('Exercises', {
                    activityName: route.params.suggestedName,
                    activityDetails: route.params.suggestedDetails,
                });
            }} />
            </>}
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C4D4D3',
      alignItems: 'center',
    },
  });
