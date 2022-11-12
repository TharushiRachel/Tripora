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
import PrevSlideButton from "../components/PrevSlideButton";
import NextSlideButton from "../components/NextSlideButton";

const Dot = (props) => {
  let currentStyle = props.active ? styles.dotActive : styles.dotInactive;
  return <View style={[styles.dot, currentStyle]}></View>;
};

function SlideScreen4({ navigation, onPress }) {
  return (
    // Background Image
    <ImageBackground
      style={styles.background}
      source={require("../assets/back2.jpg")}
      resizeMode={"cover"}
    >
      {/* Screen image */}
      <View style={styles.topView1}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../assets/sc4.png")} />
          <View></View>
        </View>
      </View>

      {/* Text container */}
      <View style={styles.topView2}>
        <Text style={styles.title}>Let's Start Your Journey!</Text>
        {/* <Text style={styles.subTitle}>
          Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
          Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
          Hello Hello 
        </Text> */}
      </View>

      {/* Buttons and dots */}
      <View style={styles.topView3}>
        <View style={styles.View3left}>
          <View style={styles.buttonsContainer}>
            <PrevSlideButton
              onPress={() => navigation.navigate("SlideScreen3")}
            />
          </View>
        </View>
        <View style={styles.view3middle}>
          <View style={styles.dotsContainer}>
            <Dot />
            <Dot />
            <Dot />
            <Dot active={true} />
          </View>
        </View>
        <View style={styles.view3right}>
          <View style={styles.buttonsContainer}>
            <NextSlideButton
              onPress={() => navigation.navigate("SlideScreen1")}
            />
          </View>
        </View>
      </View>

      {/* End button */}
      <View style={styles.topView4}>
        <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("SingIn")}>
          <Text style={styles.bottomText}>Get Started</Text>
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
    width: 200,
    height: 200,
  },
  imgContainer: {
    position: "absolute",
    alignItems: "center",
    top: "40%",
    // bottom: "30%",
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
    backgroundColor: colors.gray,
  },
  dotsContainer: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  View3left: {
    flex: 1,
    // height: "10%",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  view3middle: {
    flex: 1,
    // height: "10%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  view3right: {
    flex: 1,
    // height: "10%",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 10,
    color: colors.black,
    fontSize: 14,
    paddingHorizontal: 20,
    textAlign: "center",
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
    borderColor: colors.primary,
    // borderColor: "transparent",
    borderWidth: 3,
    borderRadius: 25,
  },
  bottomText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  topView1: {
    backgroundColor: "transparent",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView2: {
    backgroundColor: "transparent",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView3: {
    backgroundColor: "transparent",
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  topView4: {
    backgroundColor: "transparent",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SlideScreen4;
