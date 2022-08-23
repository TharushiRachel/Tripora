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
import SlideButton from "../components/SlideButton";
import SkipText from "../components/SkipText";
import SlideTitle from "../components/SlideTitle";

const Dot = (props) => {
  let currentStyle = props.active ? styles.dotActive : styles.dotInactive;
  return <View style={[styles.dot, currentStyle]}></View>;
};

function SlideScreen3({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/back2.jpg")}
      resizeMode={"cover"}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/ss3.png")} />
      </View>
      <View style={styles.dotsContainer}>
        <Dot />
        <Dot />
        <Dot active={true} />
        <Dot />
      </View>
      <SlideTitle title="Meet Best Tour Guides" />
      <SlideButton onPress={() => navigation.navigate("SlideScreen4")} />
      <SkipText title="Skip" />
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
    width: 220,
    height: 240,
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
});

export default SlideScreen3;
