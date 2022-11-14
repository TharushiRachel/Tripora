import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import BottomNavigator from "../components/BottomNavigator";

const PlaceDetails = ({ navigation, route }) => {
  const place = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              color: colors.white,
              marginBottom: 30,
            }}
          >
            {place.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={30} color={colors.orange} />
            <Text
              style={{ color: colors.white, fontWeight: "bold", fontSize: 20 }}
            >
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={style.detailsContainer}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color={colors.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            {place.location}
          </Text>
        </View>
        <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
          About the destination
        </Text>
        <Text style={{ marginTop: 10, lineHeight: 22 }}>{place.details}</Text>
      </View>
      <BottomNavigator />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: colors.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    top: -60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
});

export default PlaceDetails;
