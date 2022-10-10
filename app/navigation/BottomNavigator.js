import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Dashboard from "../screens/Dashboard";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.primary,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: "transparent",
        // paddingTop: 4,
        // paddingBottom: 4,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        // paddingBottom: 10,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search1" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Plan"
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="hearto" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
