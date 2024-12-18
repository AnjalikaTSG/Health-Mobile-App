import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const FontScreen = () => {
  const navigation = useNavigation(); // Access the navigation object
  const [isLoading, setIsLoading] = useState(false); // State to handle loading state
  const [buttonPosition] = useState(new Animated.Value(0)); // Animated value for button position

  const GotoRegister = () => {
    setIsLoading(true); // Start the loading process

    // Animate the button to move upward (simulating rocket effect)
    Animated.timing(buttonPosition, {
      toValue: -100, // Move the button up by 100 units
      duration: 1500, // Duration of the animation
      useNativeDriver: true, // Use native driver for smoother animation
    }).start();

    setTimeout(() => {
      navigation.navigate("Register"); // Navigate to the RegisterScreen after a delay
    }, 2000); // 2 seconds delay (intermission effect)
  };

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.welcomeText2}>Family Care Channeling Center</Text>
      <LottieView
        source={require("../Animation/Animation - search.json")}
        autoPlay
        loop={true}
        style={{
          height: 300,
          width: 300,
        }}
      />
      <Text style={styles.subtitle}>
        Empowering Wellness for a Better Tomorrow.
      </Text>

      {/* Show loading spinner during the intermission */}
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#7d4794"
          style={styles.loadingIndicator}
        />
      ) : (
        <Animated.View
          style={[
            styles.buttonContainer,
            { transform: [{ translateY: buttonPosition }] },
          ]}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={GotoRegister}
            accessibilityLabel="Get Started button"
            accessibilityHint="Navigates to the Register Screen"
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7DDEB",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7d4794",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  welcomeText2: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8e44ad",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200, // Adjust the width
    height: 200, // Adjust the height
    resizeMode: "contain", // Ensures the image scales proportionally
  },
  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#7d4794",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default FontScreen;
