import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FontScreen = () => {
  const navigation = useNavigation(); // Access the navigation object

  const GotoRegister = () => {
    navigation.navigate('Register'); // Navigate to the RegisterScreen
  };

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.welcomeText2}>Family Care Channeling Center</Text>
      <Image source={require('../Img/logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>
        Empowering Wellness for a Better Tomorrow.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={GotoRegister}
        accessibilityLabel="Get Started button"
        accessibilityHint="Navigates to the Register Screen"
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7d4794',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  welcomeText2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8e44ad',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200, // Adjust the width
    height: 200, // Adjust the height
    resizeMode: 'contain', // Ensures the image scales proportionally
  },
  subtitle: {
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#7d4794',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FontScreen;
