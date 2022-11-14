import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardNavigator from "./app/navigation/OnboardNavigator";
import FTourGuide from "./app/screens/FTourGuide";
import TravelerRegi from "./app/screens/TravelerRegi";
import LocationScreen1 from "./app/screens/LocationScreen1";
import HomeScreen from "./app/components/Article";
import DetailsScreen from "./app/screens/DetailsScreen";
//import LocationBaseNews from "./app/screens/LocationBaseNews";

export default function App() {
  return (
    <NavigationContainer>
      <OnboardNavigator />
    </NavigationContainer>
    //  <DetailsScreen />
  );
}


