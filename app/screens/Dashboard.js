import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

function Dashboard({ navigation }) {
  return (
    <>
      <View style={styles.topView1}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/back8.jpg")}
          resizeMode={"cover"}
        ></ImageBackground>
      </View>

      <View style={styles.topView2}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner1}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <MaterialIcons name="date-range" size={44} color={colors.white} />
              <Text style={styles.title}>Create Schedule</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner2}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <MaterialIcons name="schedule" size={44} color={colors.white} />
              <Text style={styles.title}>Check Best Time to Visit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner3}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <MaterialIcons
                name="people-outline"
                size={44}
                color={colors.white}
              />
              <Text style={styles.title}>Find a Tour Guide</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner4}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <MaterialIcons name="list-alt" size={44} color={colors.white} />
              <Text style={styles.title}>Check News Alerts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },

  topView1: {
    height: "52%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView2: {
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 15,
  },
  inner1: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  inner2: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  inner3: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  inner4: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
    color: colors.white,
    fontSize: 16,
    // fontWeight: "bold",
    paddingHorizontal: 20,
    textAlign: "center",
  },
});

export default Dashboard;
