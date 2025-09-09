import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CounterScreen() {
  // State hook to manage the counter value
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Counter App</Text>
      </View>
      
      {/* Main content section with counter display */}
      <View style={styles.content}>
        <Text style={styles.counter}>{count}</Text>
        
        {/* Container for increment and decrement buttons */}
        <View style={styles.buttons}>
          {/* Increment button - increases count by 1 */}
          <Button 
            title="+" 
            onPress={() => setCount(count + 1)} 
          />
          
          {/* Decrement button - decreases count by 1 */}
          <Button 
            title="-" 
            onPress={() => setCount(count - 1)} 
          />
        </View>
      </View>
      
      {/* Footer section */}
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
  // Header section at the top
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
  // Main content section in the middle
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
  // Footer section at the bottom
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
