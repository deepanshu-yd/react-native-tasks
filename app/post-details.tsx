import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PostDetailsScreen() {
  const { id, title, body, userId } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.metadata}>Post ID: {id} | User ID: {userId}</Text>
        <Text style={styles.title}>{title}</Text>
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
