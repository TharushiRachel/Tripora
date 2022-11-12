import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function LocationScreen1({ navigation, onPress }) {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar translucent backgroundColor="rgba(0,0,0,0)" /> */}
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/LocPic1.jpg")}
      >
        <View style={styles.details}>
          <Text
            style={{ color: colors.white, fontSize: 35, fontWeight: "bold" }}
          >
            Let's Plan
          </Text>
          <Text
            style={{ color: colors.white, fontSize: 35, fontWeight: "bold" }}
          >
            Your Trip !
          </Text>
          <Text style={{ color: colors.white, lineHeight: 25, marginTop: 15 }}>
            .........................
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("TravelerRegi")}
          >
            <View style={styles.btn}>
              <Text style={{ fontWeight: "bold" }}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationScreen1;
