import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
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
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome</Text>
        <Text style={styles.headerSubtitle}>Please login to continue</Text>
      </View>
      
      {/* Form section in the middle */}
      <View style={styles.form}>
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
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
      
      {/* Footer section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>React Native Tasks Demo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  // Header section at the top
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center'
  },
  // Form section in the middle
  form: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f8f9fa'
  },
  buttonContainer: {
    marginTop: 10
  },
  // Footer section at the bottom
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  footerText: {
    fontSize: 12,
    color: '#95a5a6',
    fontStyle: 'italic'
  }
});
