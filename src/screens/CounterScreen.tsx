import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Counter App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.counter}>{count}</Text>

        <View style={styles.buttons}>
          <Button
            title="+"
            onPress={() => setCount(count + 1)}
          />

          <Button
            title="-"
            onPress={() => setCount(count - 1)}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Tap + or - to change the counter</Text>
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
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    fontSize: 60,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  buttons: {
    flexDirection: "row",
    gap: 30,
    alignItems: 'center'
  },
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef'
  },
  footerText: {
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic'
  }
});
