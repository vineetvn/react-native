import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({ addGoalHandler, visible, closeModal }) => {
  const [goalText, setGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputCOntainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                addGoalHandler(goalText);
                setGoalText('');
              }}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCOntainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    marginBottom: 16,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    margin: 8,
  },
  image: { width: 100, height: 100, marginBottom: 16 },
});

export default GoalInput;
