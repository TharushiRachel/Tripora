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

function SkipText({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.text} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 16,
    // textTransform: "uppercase",
    fontWeight: "bold",
    bottom: "8%",
  },
});

export default SkipText;
