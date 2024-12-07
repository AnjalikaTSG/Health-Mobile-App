import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegisterSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Tick Icon */}
      <FontAwesome name="check-circle" size={150} color="#6a0dad" style={styles.icon} />
      <Text style={styles.title}>Registration Successful!</Text>
      <Text style={styles.subtitle}>Thank you for registering!</Text>
      <Text style={styles.subtitle}>
        Now you can login using your username and password.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6a0dad',
    textAlign: 'center',
  },
});

export default RegisterSuccess;
