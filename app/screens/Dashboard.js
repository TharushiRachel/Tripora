import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
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
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 5 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Where are you going?"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
          />
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
              onPress={() => navigation.navigate("TripScedule")}
            >
              <MaterialIcons name="date-range" size={44} color={colors.white} />
              <Text style={styles.title}>Create Schedule</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner2}
              onPress={() => navigation.navigate("BestTime")}
            >
              <MaterialIcons name="schedule" size={44} color={colors.white} />
              <Text style={styles.title}>Check Best Time to Visit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner3}
              onPress={() => navigation.navigate("Language")}
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
              onPress={() => navigation.navigate("CategoryNews")}
            >
              <MaterialIcons name="list-alt" size={44} color={colors.white} />
              <Text style={styles.title}>Check News Alerts</Text>
            </TouchableOpacity>
          </View>
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
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    borderColor: colors.primary,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
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
    width: 260,
    height: 280,
    marginLeft: 20,
    margin: 10,
  },

  negombo_text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 600,
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
    fontSize: 16,
    // fontWeight: "bold",
    paddingHorizontal: 20,
    textAlign: "center",
  },
});

export default Dashboard;
