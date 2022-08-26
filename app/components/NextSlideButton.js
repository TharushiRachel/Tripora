import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

function SlideButton({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <View style={styles.inner}>
        <MaterialIcons
          name="arrow-forward-ios"
          size={25}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    padding: 5,
    backgroundColor: colors.gray,
    alignSelf: "flex-start",
    borderRadius: 100,
    marginHorizontal: "2%",
  },
  inner: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

export default SlideButton;
