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

function ArrowButton({ onPress, title }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.gray }]}
      onPress={onPress}
    >
      <View style={[styles.inner, { backgroundColor: colors.gray }]}>
        <MaterialIcons name="arrow-back-ios" size={25} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    padding: 5,
    paddingLeft: 10,
    alignSelf: "flex-start",
    borderRadius: 100,
    marginHorizontal: "2%",
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

export default ArrowButton;
