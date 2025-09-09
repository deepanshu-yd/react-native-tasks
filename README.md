# Welcome to your Expo app 👋

# React Native Tasks

This is a React Native job assignment project demonstrating core React Native concepts including:

## Features Implemented

1. **Login Screen** - Email and password inputs with validation
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

## Getting Started

1. Install dependencies: `npm install`
2. Start the project: `npm start`
3. Run on device/simulator: `npm run ios` or `npm run android`

## Learning Features

Each component includes detailed comments explaining:
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

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
