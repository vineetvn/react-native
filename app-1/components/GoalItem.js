import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoal }) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={deleteGoal.bind(this, item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalItemText}>{item.text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
