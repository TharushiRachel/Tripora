import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";

function SlideTitle({ onPress, title }) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 18,
    // textTransform: "uppercase",
    fontWeight: "bold",
    bottom: "20%",
  },
});

export default SlideTitle;
