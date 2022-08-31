import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./app/screens/Dashboard";

// import OnboardNavigator from "./app/navigation/OnboardNavigator";
import BottomNavigator from "./app/navigation/BottomNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
