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
import NewsAlerts from "../components/Article";
import LocationNews from "../screens/LocationBaseNews";
import GoogleMap from "../screens/GoogleMap";
import CategoryNews from "../screens/CategoryNews";
import Businness from "../screens/Businness";
import Sports from "../screens/Sports";
import World from "../screens/World";
import WeatherDetails from "../screens/WeatherDetails";
import Local from "../screens/Local";

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
    <Stack.Screen
      name="LocationNews"
      component={LocationNews}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Location Wise News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="GoogleMap"
      component={GoogleMap}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "My Current location",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        //headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="NewsAlerts"
      component={NewsAlerts}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Latest News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
       // headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="Businness"
      component={Businness}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Businness News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
       // headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="Sports"
      component={Sports}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Sports News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
       // headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="World"
      component={World}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "World News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        //headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="Local"
      component={Local}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Local News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
       // headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="WeatherDetails"
      component={WeatherDetails}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Check Weather Details",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
       // headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
      />
    <Stack.Screen
      name="CategoryNews"
      component={CategoryNews}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Check News and Weather",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        //headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
    />

  </Stack.Navigator>
);

export default OnboardNavigator;
