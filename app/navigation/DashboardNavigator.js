import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Dashboard from "../screens/Dashboard";
// import OnboardNavigator from "../navigation/OnboardNavigator";

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
const DashboardNavigator = () => (
  <Stack.Navigator
    presentation="slide"
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    {/* <Stack.Screen name="OnboardNavigator" component={OnboardNavigator} /> */}
  </Stack.Navigator>
);

export default DashboardNavigator;
