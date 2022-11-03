import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const [goal, setGoal] = useState('');
  const [currentGoals, setCurrentGoals] = useState([]);

  const setOnchangeText = (textValue) => {
    setGoal(textValue);
  }

  const setMyGoals = () => {
    setCurrentGoals((goals) => [...goals, { text: goal, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={setOnchangeText} />
        <Button title='Add Goal' onPress={setMyGoals} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={currentGoals} renderItem={itemData => {
          return (
            <View style={styles.goalItem}><Text style={styles.goalText}>{itemData.item.text}</Text></View>
          );
        }} keyExtractor={(item, index) => {
          return item.id
        }} />
        {/* {currentGoals.map(goal => <View style={styles.goalItem} key={goal}><Text style={styles.goalText}>{goal}</Text></View>)} */}
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
