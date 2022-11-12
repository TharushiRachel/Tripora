import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

function BottomNavigator({ navigation }) {
  return (
    <View style={styles.footer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <AntDesign name="home" color={"white"} size={22} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: colors.white,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <AntDesign name="search1" color={"white"} size={22} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: colors.white,
            }}
          >
            Explore
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <AntDesign name="hearto" color={"white"} size={22} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: colors.white,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <AntDesign name="user" color={"white"} size={22} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: colors.white,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});
export default BottomNavigator;
