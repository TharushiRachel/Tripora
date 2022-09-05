import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import WelcomeScreen from "../screens/WelcomeScreen";
import SlideScreen1 from "../screens/SlideScreen1";
import SlideScreen2 from "../screens/SlideScreen2";
import SlideScreen3 from "../screens/SlideScreen3";
import SlideScreen4 from "../screens/SlideScreen4";
import Dashboard from "../screens/Dashboard";
import BestTime from "../screens/BestTime";
import SuggestedPlaces from "../screens/SuggestedPlaces";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();
const OnboardNavigator = () => (
  <Stack.Navigator
    presentation="slide"
    screenOptions={{
      headerShown: false,
      // gestureEnabled: true,
      // gestureDirection: "horizontal",
    }}
  >
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="SlideScreen1" component={SlideScreen1} />
    <Stack.Screen name="SlideScreen2" component={SlideScreen2} />
    <Stack.Screen name="SlideScreen3" component={SlideScreen3} />
    <Stack.Screen name="SlideScreen4" component={SlideScreen4} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen
      name="BestTime"
      component={BestTime}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Check Best Time To Visit",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
    />
    <Stack.Screen
      name="SuggestedPlaces"
      component={SuggestedPlaces}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Suggested locations",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
    />
  </Stack.Navigator>
);

export default OnboardNavigator;
