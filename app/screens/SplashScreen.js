import { Image, View, Button, StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../config/colors";
// import { Button } from "react-native-elements";

import Onboarding from "react-native-onboarding-swiper";

const SplashScreen = () => (
  <Onboarding
    onDone={() => console.log("done")}
    pages={[
      {
        backgroundColor: colors.white,
        image: (
          <Image source={require("../assets/s5.png")} style={styles.image} />
        ),
        title: <Text style={styles.title}>Let's start your Journey</Text>,
        // subtitle: "Done with React Native Onboarding Swiper",
      },
      {
        backgroundColor: colors.white,
        image: (
          <Image source={require("../assets/s2.png")} style={styles.image} />
        ),
        title: <Text style={styles.title}>Explore new places</Text>,
        //subtitle: "This is the subtitle that sumplements the title.",
      },
      {
        backgroundColor: colors.white,
        image: (
          <Image source={require("../assets/s6.png")} style={styles.image} />
        ),
        title: <Text style={styles.title}>Meet Tour Guides</Text>,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "70%",
    top: "10%",
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    bottom: "15%",
  },
});

export default SplashScreen;
