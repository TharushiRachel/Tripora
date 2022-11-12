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
import { Feather, Entypo } from "@expo/vector-icons";
import sigiriya from "../assets/dsigiriya.png";
import templeOfTooth from "../assets/dtempleOfTooth.png";
import fishing from "../assets/fishing.png";
import nineArch from "../assets/nineArch.png";
import painting from "../assets/sigiriyaPaintings.png";
import elephants from "../assets/elephants.png";
import mirissa from "../assets/mirissa.png";
import waterfall from "../assets/waterfall.png";
import { MaterialIcons } from "@expo/vector-icons";
import BottomNavigator from "../components/BottomNavigator";

const Dashboard = ({
  navigation,
  onPress,
  clicked,
  searchPhrase,
  setSearchPhrase,
  setCLicked,
}) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Feather
            name="map-pin"
            size={20}
            color="black"
            style={{ marginLeft: 5 }}
          />
          {/* Input field */}
          <TouchableOpacity
            // style={styles.inner1}
            onPress={() => navigation.navigate("GoogleMap")}
          >
            <Text
              style={styles.input}
              value={searchPhrase}
              onChangeText={setSearchPhrase}
              onFocus={() => {
                setClicked(true);
              }}
            >
              See Your Current Location Here
            </Text>

            {/* cross Icon, depending on whether the search bar is clicked or not */}
            {clicked && (
              <Entypo
                name="cross"
                size={20}
                color="black"
                style={{ padding: 1 }}
                onPress={() => {
                  setSearchPhrase("");
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></Button>
          </View>
        )}
      </View>

      <ScrollView horizontal>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={sigiriya} style={styles.negombo_img} />

          <Image source={templeOfTooth} style={styles.negombo_img} />
          <Image source={fishing} style={styles.negombo_img} />
          <Image source={nineArch} style={styles.negombo_img} />
          <Image source={waterfall} style={styles.negombo_img} />
          <Image source={painting} style={styles.negombo_img} />
          <Image source={elephants} style={styles.negombo_img} />
          <Image source={mirissa} style={styles.negombo_img} />
        </View>
      </ScrollView>

      <View style={styles.topView2}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner1}
              onPress={() => navigation.navigate("LocationScreen1")}
            >
              <MaterialIcons name="date-range" size={40} color={colors.white} />
              <Text style={styles.title}>Create Schedule</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner2}
              onPress={() => navigation.navigate("BestTime")}
            >
              <MaterialIcons name="schedule" size={40} color={colors.white} />
              <Text style={styles.title}>Check Best Time to Visit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner3}
              onPress={() => navigation.navigate("TourGuideScreen")}
            >
              <MaterialIcons
                name="people-outline"
                size={40}
                color={colors.white}
              />
              <Text style={styles.title}>Find a Tour Guide</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner4}
              onPress={() => navigation.navigate("CategoryNews")}
            >
              <MaterialIcons name="list-alt" size={40} color={colors.white} />
              <Text style={styles.title}>Check News Alerts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottoma tabs */}
      <View style={styles.footer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Dashboard")}
          >
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
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("GoogleMap")}
          >
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
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAF9F6",
    // alignItems:'center',
    // justifyContent:'center',
    flex: 1,
  },

  container: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    borderColor: colors.primary,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: colors.primary,
  },
  input: {
    fontSize: 16,
    marginLeft: 30,
    width: "90%",
    color: "gray",
    alignItems: "center",
    justifyContent: "center",
  },

  negombo_img: {
    width: 240,
    height: 260,
    marginLeft: 20,
    margin: 10,
  },

  location_icon: {
    color: colors.primary,
  },

  topView2: {
    backgroundColor: colors.black,
    height: "38%",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    flex: 2,
    backgroundColor: colors.white,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 25,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "55%",
    padding: 15,
  },
  inner1: {
    flex: 1,
    backgroundColor: "#0FBB5E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  inner2: {
    flex: 1,
    backgroundColor: "#5486D2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  inner3: {
    flex: 1,
    backgroundColor: "#692C7E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  inner4: {
    flex: 1,
    backgroundColor: "#DB2929",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
    color: colors.white,
    fontSize: 14,
    // fontWeight: "bold",
    paddingHorizontal: 20,
    textAlign: "center",
  },
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

export default Dashboard;
