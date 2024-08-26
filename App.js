import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: Math.random().toString(), text: 'Learn React Native' },
    { id: Math.random().toString(), text: 'Learn NodeJS' },
    { id: Math.random().toString(), text: 'Learn Graph QL' },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (goalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: goalText },
    ]);
    setIsModalVisible(false);
  };

  const onDeleteItem = (itemID) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== itemID)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#AC76F3"
          onPress={() => setIsModalVisible(true)}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={isModalVisible}
          closeModal={() => setIsModalVisible(false)}
        />
        <View style={styles.goalsContainer}>
          {/* Component handles scrollable lists and providing unique keys. It also only renders the components required at a time */}
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteGoal={onDeleteItem} />
            )}
            // use this when you don't have a key prop and want to use another prop as unique key
            keyExtractor={({ id }) => id}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 16,
    flex: 5,
  },
});

export default App;
