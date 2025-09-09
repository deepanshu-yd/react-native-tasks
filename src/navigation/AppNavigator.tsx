import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import CounterScreen from "../screens/CounterScreen";
import LoginScreen from "../screens/LoginScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import PostsScreen from "../screens/PostsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{ title: 'All Posts' }}
        />

        <Stack.Screen
          name="PostDetails"
          component={PostDetailsScreen}
          options={{ title: 'Post Details' }}
        />

        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{ title: 'Counter Demo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
