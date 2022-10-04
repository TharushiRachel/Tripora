import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SlideScreen1 from "../screens/SlideScreen1";
import SlideScreen2 from "../screens/SlideScreen2";
import SlideScreen3 from "../screens/SlideScreen3";
import SlideScreen4 from "../screens/SlideScreen4";
import SingIn from "../screens/SingIn";
import Registration from "../screens/Registration";
import Dashboard from "../screens/Dashboard";
import FindAGuide from "../screens/FindAGuideScreen";
import TourGuide from "../screens/TourGuideScreen";
import TripScedule from "../screens/TripScedule";
import NewsAlerts from "../screens/NewsAlerts";
import TourGuideRegister from "../screens/TourGuideRegister";
import TourGuideList from "../screens/TourGuideList";
import RegisterT from "../screens/RegisterT";

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
      gestureEnabled: true,
      gestureDirection: "horizontal",
    }}
  >
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="SlideScreen1" component={SlideScreen1} />
    <Stack.Screen name="SlideScreen2" component={SlideScreen2} />
    <Stack.Screen name="SlideScreen3" component={SlideScreen3} />
    <Stack.Screen name="SlideScreen4" component={SlideScreen4} />
    <Stack.Screen name="SingIn" component={SingIn} />
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="FindAGuide" component={FindAGuide} />
    <Stack.Screen name="TourGuide" component={TourGuide} />
    <Stack.Screen name="TripScedule" component={TripScedule} />
    <Stack.Screen name="NewsAlerts" component={NewsAlerts} />
    <Stack.Screen name="TourGuideRegister" component={TourGuideRegister} />
    <Stack.Screen name="TourGuideList" component={TourGuideList} />
    <Stack.Screen name="RegisterT" component={RegisterT} />


  </Stack.Navigator>
);

export default OnboardNavigator;
