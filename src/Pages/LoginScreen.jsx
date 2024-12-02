import React from "react";
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

export default function LoginScreen() {
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

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
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
          New to the app? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "left",
    paddingTop: 20,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  logo: {
    width: 60, // Adjust logo size
    height: 60, // Adjust logo size
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
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 8,
    marginBottom: 15,
    width: "100%",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  forgotText: {
    color: "#8e44ad",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#8e44ad",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
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
    width: "80%",
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    marginTop: 20,
    fontSize: 16,
    color: "#999",
  },
  registerLink: {
    color: "#8e44ad",
    fontWeight: "bold",
  },
});
