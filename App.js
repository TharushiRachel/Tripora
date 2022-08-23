import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardNavigator from "./app/navigation/OnboardNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <OnboardNavigator />
    </NavigationContainer>
  );
}
