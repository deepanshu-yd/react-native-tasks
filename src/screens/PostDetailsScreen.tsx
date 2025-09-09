import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

interface PostDetailsProps {
  route: {
    params: {
      post: {
        id: number;
        title: string;
        body: string;
        userId: number;
      };
    };
  };
}

export default function PostDetailsScreen({ route }: PostDetailsProps) {
  // Extract post data from navigation parameters
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Display post ID and user ID for reference */}
        <Text style={styles.metadata}>Post ID: {post.id} | User ID: {post.userId}</Text>
        
        {/* Display the post title */}
        <Text style={styles.title}>{post.title}</Text>
        
        {/* Display the full post body */}
        <Text style={styles.body}>{post.body}</Text>
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
