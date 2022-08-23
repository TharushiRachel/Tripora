import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
} from "react-native";
import colors from "../config/colors";
import SlideButton from "../components/SlideButton";
import SkipText from "../components/SkipText";
import SlideTitle from "../components/SlideTitle";
import { Entypo } from "@expo/vector-icons";

const Dot = (props) => {
  let currentStyle = props.active ? styles.dotActive : styles.dotInactive;
  return <View style={[styles.dot, currentStyle]}></View>;
};

function SlideScreen4() {
  return (
    <ImageBackground
      source={require("../assets/back2.jpg")}
      resizeMode={"cover"}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/ss4.png")} />
      </View>
      <View style={styles.dotsContainer}>
        <Dot />
        <Dot />
        <Dot />
        <Dot active={true} />
      </View>
      <SlideTitle title="Let's start Your Amazing Journey " />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={onPress}
      >
        <Entypo name="check" size={26} color={colors.white} />
      </TouchableOpacity>
      <SkipText />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 210,
    height: 220,
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  dotInactive: {
    backgroundColor: "#D2D2D4",
  },
  dotsContainer: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: "60%",
  },
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

export default SlideScreen4;
