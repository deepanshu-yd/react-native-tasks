import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
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
      {/* Header section with title at the top */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Posts</Text>
        
        {/* Navigation button to counter screen */}
        <View style={styles.navigationButton}>
          <Button 
            title="Go to Counter" 
            onPress={() => router.push("/counter" as any)} 
          />
        </View>
      </View>
      
      {/* Middle section - Posts list using flex: 1 to take available space */}
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
      {/* Footer section at the bottom */}
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>End of List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  // Header container using flexbox - fixed at top
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef'
  },
  // List container - takes remaining space using flex: 1
  listContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  // Footer container - fixed at bottom
  footerContainer: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    alignItems: 'center'
  },
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
    marginBottom: 5,
    fontSize: 16
  },
  header: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginVertical: 15,
    textAlign: 'center',
    color: '#2c3e50'
  },
  footer: { 
    fontSize: 14,
    fontStyle: "italic",
    color: '#6c757d'
  },
  navigationButton: {
    marginBottom: 15,
    paddingHorizontal: 20
  }
});
