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

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* GCB Logo Center Top */}
      <Image
        source={require("../assets/gcb-logo.webp")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome Row */}
      <View style={styles.welcomeRow}>
        {/* User circle */}
        <View style={styles.userBadge}>
          <Feather name="user" size={22} color="#3C4A52" />
        </View>

        {/* Welcome text */}
        <View style={styles.welcomeTextBox}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Leslie Allotey</Text>
        </View>

        {/* Help circle */}
        <TouchableOpacity style={styles.helpBadge} activeOpacity={0.8}>
          <Feather name="help-circle" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Login label */}
      <Text style={styles.loginLabel}>Login</Text>

      {/* Password input */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? "eye-off" : "eye"} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Pressable
        onPress={() => {}}
        style={({ pressed, hovered }) => [
          styles.loginButton,
          (pressed || hovered) && styles.loginButtonActive,
        ]}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>

      {/* Switch User */}
      <TouchableOpacity style={styles.switchUserContainer}>
        <Text style={styles.linkText}>Switch User?</Text>
      </TouchableOpacity>
    </View>
  );
}

const COLORS = {
  bg: "#FFFFFF",
  dark: "#3C4A52",
  yellow: "#F7C94C",
  link: "#007BFF",
  inputBg: "#F7F7F7",
  buttonIdle: "#999999",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 170,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },

  /* Welcome row */
  welcomeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 40,
  },
  userBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  helpBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTextBox: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: "#444",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.dark,
  },

  /* Login label */
  loginLabel: {
    width: "100%",
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },

  /* Input */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    width: "100%",
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  forgotContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  linkText: {
    color: COLORS.link,
    fontSize: 14,
  },

  /* Button */
  loginButton: {
    backgroundColor: COLORS.buttonIdle,
    borderRadius: 12,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  loginButtonActive: {
    backgroundColor: COLORS.dark,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  switchUserContainer: {
    marginTop: 6,
  },
});
