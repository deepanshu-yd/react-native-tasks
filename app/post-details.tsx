import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PostDetailsScreen() {
  // Get the post parameters passed from the previous screen
  const { id, title, body, userId } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Display post ID and user ID for reference */}
        <Text style={styles.metadata}>Post ID: {id} | User ID: {userId}</Text>
        
        {/* Display the post title */}
        <Text style={styles.title}>{title}</Text>
        
        {/* Display the full post body */}
        <Text style={styles.body}>{body}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 20
  },
  metadata: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontStyle: 'italic'
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 15,
    lineHeight: 28
  },
  body: { 
    fontSize: 16,
    lineHeight: 24,
    color: '#333'
  },
});
