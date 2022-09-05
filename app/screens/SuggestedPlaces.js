import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const SuggestedPlaces = ({ navigation, onPress }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.item}>
          <Image
            source={require("../assets/pidurangala.jpg")}
            style={styles.negombo_img}
          />
          <Text style={styles.negombo_text}>Pidurangala</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AntDesign
              name="enviroment"
              size={20}
              style={styles.location_icon}
            />
            <Text style={styles.negombo_text2}>Dambulla, Sri Lanka</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image
            source={require("../assets/pidurangalarct.png")}
            style={styles.negombo_img}
          />
          <Text style={styles.negombo_text}>Pidurangala Royal Cave Temple</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AntDesign
              name="enviroment"
              size={20}
              style={styles.location_icon}
            />
            <Text style={styles.negombo_text2}>Dambulla, Sri Lanka</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image
            source={require("../assets/sigiriya.png")}
            style={styles.negombo_img}
          />
          <Text style={styles.negombo_text}>Archaeological Museum</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AntDesign
              name="enviroment"
              size={20}
              style={styles.location_icon}
            />
            <Text style={styles.negombo_text2}>Dambulla, Sri Lanka</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image
            source={require("../assets/sigiriyaPaintings.png")}
            style={styles.negombo_img}
          />
          <Text style={styles.negombo_text}>Sigiri Art Gallery</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AntDesign
              name="enviroment"
              size={20}
              style={styles.location_icon}
            />
            <Text style={styles.negombo_text2}>Dambulla, Sri Lanka</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "black",
    marginRight: 100,
    marginTop: 35,
    fontSize: 18,
    marginBottom: 40,
  },

  back_btn: {
    marginLeft: 30,
    marginTop: 37,
    color: colors.primary,
  },

  text2: {
    fontSize: 16,
    color: "#696969",
    marginLeft: 20,
  },

  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  negombo_img: {
    width: 220,
    height: 200,
  },

  negombo_text: {
    marginTop: 10,
    fontSize: 20,
    color: colors.primary,
  },

  location_icon: {
    color: colors.primary,
  },

  negombo_text2: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.gray,
  },
});

export default SuggestedPlaces;
