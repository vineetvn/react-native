import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([
    { key: Math.random().toString(), text: "Learn React Native" },
    { key: Math.random().toString(), text: "Learn NodeJS" },
    { key: Math.random().toString(), text: "Learn Graph QL" },
  ]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: goalText },
    ]);
  }
  return (
    // View is similar to div in browser
    <View style={styles.appContainer}>
      <View style={styles.inputCOntainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* Component handles scrollable lists and providing unique keys. It also only renders the components required at a time */}
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalItemText}>{item.text}</Text>
            </View>
          )}
          // use this when you dont have a key prop and want to use another prop as unique key
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputCOntainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalItemText: {
    color: "white",
  },
});
