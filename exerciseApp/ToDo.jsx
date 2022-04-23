import {React, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button, Input, CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function ToDo({navigation}) {
    let [defaultTask, setDefaultTask] = useState([
        {
          key: "1",
          description: "Start To Do List",
          completed: false,
        }
      ])
      //Renders when task is completed
      let completeTask = (key) => {
        let updated = defaultTask = defaultTask.map((defaultTask) => {
          if (defaultTask.key === key) {
            return {
              key: defaultTask.key,
              description: defaultTask.description,
              completed: !defaultTask.completed
            }
          } else {
            return defaultTask;
          }
        });
          setDefaultTask(updated)
      }
      //Array to store new tasks from user input
      let [newTask, setNewTask] = useState("")
      //Gives user input tasks the same properties with keys adding after the default and false completed
      let userTask = () => {
        if (newTask === '') return;
        let lastItemKey = defaultTask[defaultTask.length - 1].key;
        let addedUserTask = {
          key: lastItemKey + 1,
          description: newTask,
          completed: false
        };
        setDefaultTask([...defaultTask, addedUserTask]);
        setNewTask('');
      }
      //Renders tasks on screen
      let renderItem = ({ item }) => {
        return <CheckBox 
          key={item.key} 
          title={item.description}
          checked={item.completed}
          onIconPress={() => completeTask(item.key)}
          onPress={() => completeTask(item.key)}>
        </CheckBox>
      }
      return (
        <View style={styles.container}>
          <Text h3>Fitness Plan:</Text>
          <FlatList data={defaultTask} renderItem={renderItem}></FlatList>
          <Input 
            placeholder="New Task"
            onChangeText={setNewTask}
            value={newTask}
          ></Input>
          <Button 
            title="Add"
            onPress={userTask}
          ></Button>
          <Button title="Back to Home" onPress={() => navigation.navigate('Home')}></Button>
        </View>)
    }
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DCBCC5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });