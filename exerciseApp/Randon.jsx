import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function Random({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Choose a random exercise here</Text>
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