import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (Platform.OS === 'web') {
      // For web: show alert and navigate immediately
      alert(`Login Info\nEmail: ${email}\nPassword: ${password}`);
      router.replace("/posts");
    } else {
      // For mobile: use native Alert with callback
      Alert.alert(
        "Login Info",
        `Email: ${email}\nPassword: ${password}`,
        [
          {
            text: "OK",
            onPress: () => router.push("/posts")
          }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome</Text>
        <Text style={styles.headerSubtitle}>Please login to continue</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>

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
