import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface PostItemProps {
  post: {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
  onPress: () => void;
}

export default function PostItem({ post, onPress }: PostItemProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{post.title}</Text>
      <Text numberOfLines={2} style={styles.body}>
        {post.body}
      </Text>
      <Text style={styles.metadata}>
        Post ID: {post.id} | User: {post.userId}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
    color: '#2c3e50'
  },
  body: {
    fontSize: 14,
    color: '#34495e',
    lineHeight: 20,
    marginBottom: 8
  },
  metadata: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic'
  }
});
