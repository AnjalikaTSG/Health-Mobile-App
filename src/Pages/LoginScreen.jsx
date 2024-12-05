import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Linking } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error message
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in both username and password.");
      return;
    }
    setError(""); // Clear error if both fields are filled

    // Clear input fields
    setUsername("");
    setPassword("");

    navigation.navigate("Home",{username}); // Navigate to Home
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Message with Logo */}
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../Img/logo.png")} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText2}>Family Care Channeling Center</Text>
        </View>

        {/* Illustration */}
        <Image
          source={require("../Img/login.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Login Title */}
        <Text style={styles.title}>Login</Text>

        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Username Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="email-address"
            value={username}
            onChangeText={setUsername} // Update username state
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible} // Toggle password visibility
            value={password}
            onChangeText={setPassword} // Update password state
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)} // Toggle visibility
          >
            <FontAwesome
              name={isPasswordVisible ? "eye" : "eye-slash"} // Icon changes based on state
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text style={styles.orText}>Or, login with ...</Text>

        {/* Social Login Buttons */}
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL("https://www.google.com")}
          >
            <FontAwesome name="google" size={28} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL("https://www.facebook.com")}
          >
            <FontAwesome name="facebook" size={28} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL("https://www.twitter.com")}
          >
            <FontAwesome name="twitter" size={28} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        {/* Register Text */}
        <Text style={styles.registerText}>
          New to the app?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7DDEB",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 20,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 50,
    marginRight: 5,
  },
  welcomeText2: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8e44ad",
  },
  image: {
    width: width * 0.7,
    height: height * 0.25,
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#4a4a4a",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8e44ad",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    width: "90%",
    backgroundColor: "#E7DDEB",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  forgotText: {
    color: "#8e44ad",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#8e44ad",
    borderRadius: 10,
    paddingVertical: 12,
    width: "90%",
    alignItems: "center",
    marginVertical: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#999",
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 16,
    color: "#999",
    marginBottom: 20,
  },
  registerLink: {
    color: "#8e44ad",
    fontWeight: "bold",
  },
});
