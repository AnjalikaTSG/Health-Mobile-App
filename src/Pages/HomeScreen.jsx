import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useClickCount } from './ClickCountProvider'; // Importing the custom hook for context

const HomeScreen = () => {
  const { count, incrementCount } = useClickCount(); // Using the custom hook to access context

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Home Screen</Text>
      <Text style={styles.countText}>Click Count: {count}</Text>
      <Button title="Increase Count" onPress={incrementCount} /> {/* Button to increment count */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default HomeScreen;
