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
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validateInputs = () => {
    let valid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email) || email !== email.toLowerCase()) {
      newErrors.email = "Enter a valid email.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      Alert.alert("Success", "You have signed up successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../Img/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText2}>Family Care Channeling Center</Text>
        </View>

        <Image
          source={require("../Img/signup.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesome
              name={passwordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!confirmPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <FontAwesome
              name={confirmPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or, sign up with ...</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={28} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={28} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="twitter" size={28} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Already have an account?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Login")}
          >
            Login
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
    color: "#8e44ad",
  },
  image: {
    width: width * 0.7,
    height: height * 0.25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8e44ad",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: "90%",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#8e44ad",
    paddingVertical: 12,
    width: "90%",
    marginBottom: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  orText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  registerText: {
    fontSize: 14,
    textAlign: "center",
  },
  registerLink: {
    color: "#8e44ad",
    fontWeight: "bold",
  },
});
