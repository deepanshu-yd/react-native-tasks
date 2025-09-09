# React Native Assignment

This is a React Native project demonstrating core React Native concepts including:

## Features Implemented

1. **Login Screen** - Email and password inputs with alerts
2. **Posts List** - Fetches and displays posts from JSONPlaceholder API
3. **Post Details** - Shows full post content when tapped
4. **Counter Screen** - Simple increment/decrement counter
5. **Navigation** - React Navigation stack navigation between screens
6. **Flexbox Layout** - Proper header, content, and footer layout

## Project Structure

```
/react-native-tasks
 ┣ 📂 src
 ┃ ┣ 📂 screens
 ┃ ┃ ┣ LoginScreen.tsx
 ┃ ┃ ┣ PostsScreen.tsx
 ┃ ┃ ┣ PostDetailsScreen.tsx
 ┃ ┃ ┗ CounterScreen.tsx
 ┃ ┣ 📂 navigation
 ┃ ┃ ┗ AppNavigator.tsx
 ┃ ┗ 📂 components
 ┃     ┗ PostItem.tsx
 ┣ App.js
 ┗ README.md
```

## Technologies Used

- React Native
- TypeScript
- React Navigation
- Expo
- JSONPlaceholder API
- StyleSheet for styling

## Concepts Used

- React Hooks (useState, useEffect)
- TypeScript interfaces
- Flexbox layouts
- Navigation patterns
- API integration
- Component composition

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in your [localhost:8081](http://localhost:8081)

## Learn more

To learn more about developing the project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.