import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useClickCount } from './ClickCountProvider'; // Access context

const FloatingButton = () => {
  const { count } = useClickCount(); // Get count from context

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{count}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#8e44ad',
    paddingVertical: 15, // Increased vertical padding for size
    paddingHorizontal: 25, // Increased horizontal padding for width
    borderRadius: 30, // Changed to create a pill shape
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Added shadow for elevation
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 22, // Slightly larger font size
    fontWeight: 'bold', // Bold text for emphasis
  },
});

export default FloatingButton;
