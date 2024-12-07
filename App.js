import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontScreen from './src/Pages/FontScreen';
import LoginScreen from './src/Pages/LoginScreen';
import RegisterScreen from './src/Pages/RegisterScreen';
import HomeScreen from './src/Pages/HomeScreen';
import { ClickCountProvider } from './src/Pages/ClickCountProvider';  
import RegisterSuccess from './src/Pages/RegisterSuccess';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ClickCountProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FontScreen">
          <Stack.Screen name="FontScreen" component={FontScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ClickCountProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
