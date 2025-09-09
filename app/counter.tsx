import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CounterScreen() {
  // State hook to manage the counter value
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Display the current counter value */}
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
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: '#fff'
  },
  counter: { 
    fontSize: 40, 
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  buttons: { 
    flexDirection: "row", 
    gap: 20,
    alignItems: 'center'
  },
});
