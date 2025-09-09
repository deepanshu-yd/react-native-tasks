import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

// Define the Post interface for TypeScript
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostsScreen() {
  // State to store the list of posts fetched from API
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect hook to fetch posts when component mounts
  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Function to render each post item in the FlatList
  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => 
        // Navigate to PostDetails screen with the selected post data
        router.push({
          pathname: "/post-details" as any,
          params: { 
            id: item.id.toString(),
            title: item.title,
            body: item.body,
            userId: item.userId.toString()
          }
        })
      }
    >
      {/* Display post title in bold */}
      <Text style={styles.title}>{item.title}</Text>
      {/* Display post body with maximum 2 lines */}
      <Text numberOfLines={2}>{item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header for the posts screen */}
      <Text style={styles.header}>Posts</Text>
      
      {/* FlatList to display all posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <Text style={styles.footer}>End of List</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10,
    backgroundColor: '#fff'
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
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
    marginBottom: 5,
    fontSize: 16
  },
  header: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginVertical: 10,
    textAlign: 'center'
  },
  footer: { 
    textAlign: "center", 
    marginTop: 10, 
    fontStyle: "italic",
    color: '#666',
    paddingBottom: 20
  },
});
