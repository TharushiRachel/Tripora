import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function WelcomeScreen({ navigation, onPress }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back6.jpg")}
      resizeMode={"cover"}
    >
      <View style={styles.topView1}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../assets/logo.png")} />
          <View></View>
        </View>
      </View>

      <View style={styles.topView2}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate("SlideScreen1")}
        >
          <Text style={styles.text}>Start Tour</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topView3}>
        <Text style={styles.title}>Already have account? </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.subTitle}> Login Here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  img: {
    width: 110,
    height: 140,
  },
  imgContainer: {
    position: "absolute",
    alignItems: "center",
    top: "30%",
    // bottom: "30%",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    marginVertical: 10,
    bottom: "8%",
  },

  title: {
    marginTop: 10,
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    width: "80%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: colors.primary,
    borderColor: "transparent",
    borderWidth: 3,
    borderRadius: 25,
  },
  bottomText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  topView1: {
    backgroundColor: "transparent",
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView2: {
    backgroundColor: "transparent",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView3: {
    backgroundColor: "transparent",
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default WelcomeScreen;
