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
import { MaterialIcons } from "@expo/vector-icons";

function SlideButton({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <MaterialIcons name="arrow-forward-ios" size={25} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "25%",
    marginVertical: 10,
    bottom: "10%",
  },
});

export default SlideButton;
