import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  // State hooks to manage email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login button press
  const handleLogin = () => {
    // Show alert with entered email and password values
    Alert.alert("Login Info", `Email: ${email}\nPassword: ${password}`);
    
    // Navigate to Posts screen after showing alert
    router.push("/posts");
  };

  return (
    <View style={styles.container}>
      {/* Email input field */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Password input field with secure text entry */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Login button */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20 
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
