import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import PostItem from "../components/PostItem";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsScreenProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

export default function PostsScreen({ navigation }: PostsScreenProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handlePostPress = (post: Post) => {
    navigation.navigate("PostDetails", { post });
  };

  const renderItem = ({ item }: { item: Post }) => (
    <PostItem
      post={item}
      onPress={() => handlePostPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Posts</Text>

        <View style={styles.navigationButton}>
          <Button
            title="Go to Counter"
            onPress={() => navigation.navigate("Counter")}
          />
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

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
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef'
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  footerContainer: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    alignItems: 'center'
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
