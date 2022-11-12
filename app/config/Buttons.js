import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Buttons = ({ on_press, btn_text }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        width: "95%",
        backgroundColor: "#009387",
        height: 50,
        marginBottom: 30,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          letterSpacing: 1.5,
          textAlign: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        {btn_text}
      </Text>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
