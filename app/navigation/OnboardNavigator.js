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
import SingIn from "../screens/SingIn";
import Registration from "../screens/Registration";
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
// import NewsAlerts from "../screens/NewsAlerts";
import TourGuideRegister from "../screens/TourGuideRegister";
import TourGuideList from "../screens/TourGuideList";
import RegisterT from "../screens/RegisterT";
import Preferences from "../screens/Preferences";
import Language from "../screens/Language";
import FTourGuide from "../screens/FTourGuide";
import GTourGuide from "../screens/GTourGuide";
import TravelerRegi from "../screens/TravelerRegi"
import LocationScreen1 from "../screens/LocationScreen1";
import SuggestedSchedule from "../screens/SuggestedSchedule";

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
    {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
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
    <Stack.Screen name="SingIn" component={SingIn} />
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="FindAGuide" component={FindAGuide} />
    <Stack.Screen name="TourGuide" component={TourGuide} />
    <Stack.Screen name="TripScedule" component={TripScedule} />
    <Stack.Screen name="NewsAlerts" component={NewsAlerts} />
    {/* <Stack.Screen name="CategoryNews" component={CategoryNews} /> */}
    <Stack.Screen
      name="CategoryNews"
      component={CategoryNews}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Category & Location Wise News",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
    />
    <Stack.Screen name="LocationNews" component={LocationNews} />
    <Stack.Screen name="GoogleMap" component={GoogleMap} />
    <Stack.Screen name="Businness" component={Businness} />
    <Stack.Screen name="Sports" component={Sports} />
    <Stack.Screen name="World" component={World} />
    <Stack.Screen name="TourGuideRegister" component={TourGuideRegister} />
    <Stack.Screen name="TourGuideList" component={TourGuideList} />
    <Stack.Screen name="RegisterT" component={RegisterT} />
    <Stack.Screen name="Preferences" component={Preferences} />
    <Stack.Screen name="Language" component={Language} />
    <Stack.Screen name="FTourGuide" component={FTourGuide} />
    <Stack.Screen name="GTourGuide" component={GTourGuide} />
    <Stack.Screen name="LocationScreen1" component={LocationScreen1} />
    <Stack.Screen
      name="TravelerRegi"
      component={TravelerRegi}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Plan Your Trip",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
    />
    <Stack.Screen
      name="SuggestedSchedule"
      component={SuggestedSchedule}
      options={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerTitle: "Plan Your Trip",
        headerStatusBarHeight: 20,
        headerTitleStyle: { fontSize: 18 },
        headerBackTitle: { backgroundColor: "#54D2C4" },
      }}
    />



  </Stack.Navigator>
);

export default OnboardNavigator;
