import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // later you can validate password here
    navigation.replace("Home"); // replace prevents going back to login
  };

  return (
    <View style={styles.container}>
      {/* Switch User - Top Right */}
      <TouchableOpacity style={styles.switchUserTop}>
        <Text style={styles.switchUserText}>Switch User?</Text>
      </TouchableOpacity>

      {/* GCB Logo */}
      <Image
        source={require("../assets/gcb-logo.webp")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <View style={styles.avatar}>
          <Feather name="user" size={24} color="#3C4A52" />
        </View>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.nameText}>Leslie Allotey</Text>
      </View>

      {/* Login Form Section */}
      <View style={styles.formSection}>
        <Text style={styles.loginLabel}>Login</Text>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#999" style={styles.lockIcon} />
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
            styles.loginButton,
            pressed && styles.loginButtonPressed,
          ]}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>

      {/* Help Button - Bottom Right */}
      <TouchableOpacity style={styles.helpButton} activeOpacity={0.8}>
        <Feather name="help-circle" size={22} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 60,
  },

  // Switch User - Top Right
  switchUserTop: {
    position: "absolute",
    top: 50,
    right: 24,
    zIndex: 1,
  },
  switchUserText: {
    color: "#007BFF",
    fontSize: 16,
  },

  // Logo
  logo: {
    width: 120,
    height: 150,
    marginTop: 30,
    marginBottom: 15,
  },

  // Welcome Section
  welcomeSection: {
    alignItems: "center",
    marginBottom: 50,
    marginTop: -40,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F7C94C",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 185,
    position: "relative",
    top: 50,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3C4A52",
  },

  // Form Section
  formSection: {
    width: "80%",
    maxWidth: 320,
  },
  loginLabel: {
    fontSize: 16,
    color: "#000000ff",
    marginBottom: 8,
    marginLeft: -20,
  },

  // Input Container
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    height: 45,
    marginBottom: 120,
  },
  lockIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  eyeIcon: {
    padding: 2,
  },

  // Forgot Password
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 40,
  },
  forgotText: {
    color: "#007BFF",
    fontSize: 16,
  },

  // Login Button
  loginButton: {
    backgroundColor: "#B8B8B8",
    borderRadius: 10,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginButtonPressed: {
    backgroundColor: "#3C4A52",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
  },

  // Help Button - Bottom Right
  helpButton: {
    position: "relative",
    bottom: 180,
    right: -160,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#3C4A52",
    alignItems: "center",
    justifyContent: "center",
  },
});
