// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/Pages/LoginScreen'; // Import the LoginScreen component
import FontScreen from './src/Pages/FontScreen'; // Import the FontScreen component
import RegisterScreen from './src/Pages/RegisterScreen'; // Import the RegisterScreen component

export default function App() {
  return (
    <View style={styles.container}>
      {/*<FontScreen /> {/* Render the FontScreen component */}
      {/*<LoginScreen /> {/* Render the LoginScreen component */}
      <RegisterScreen /> {/* Render the RegisterScreen component */}
      <StatusBar style="auto" />
    </View>
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
