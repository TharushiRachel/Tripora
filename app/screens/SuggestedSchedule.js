import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const SuggestedSchedule = ({ route }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text1}>["Victoria Park","nuwara eliya post office","Holy Trinity Church","Seetha Amman Kovil"]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "black",
    // marginRight: 10,
    marginTop: 35,
    fontSize: 18,
    marginBottom: 40,
    padding: 20,
  },

  text2: {
    fontSize: 16,
    color: "#696969",
    marginLeft: 20,
  },

  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  negombo_img: {
    width: 220,
    height: 200,
  },

  negombo_text: {
    marginTop: 10,
    fontSize: 20,
    color: colors.primary,
  },

  location_icon: {
    color: colors.primary,
  },

  negombo_text2: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.gray,
  },
  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default SuggestedSchedule;
