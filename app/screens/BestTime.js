import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";
// import { useFormikContext } from "formik";

const locations = [
  { label: "Abhayagiriya", value: 1 },
  { label: "Buddangala", value: 2 },
  { label: "Hortan Plains", value: 3 },
  { label: "Isurumuniya", value: 4 },
  { label: "Nine Arches Bridge", value: 5 },
  { label: "Jethawanaramaya", value: 6 },
  { label: "Lovamahapaya", value: 7 },
  { label: "Sigiriya", value: 8 },
  { label: "Temple of the Tooth", value: 9 },
  { label: "Wilpaththu National Park", value: 10 },
  { label: "", value: 11 },
];

const displayDetails = () => {
  if (locations.value == 1) {
    return <Text>Best Time to Visit 8AM</Text>;
  } else if (locations.value == 2) {
    return <Text>Best Time to Visit - 9AM</Text>;
  } else if (locations.value == 3) {
    return <Text>Best Time to Visit - 6AM</Text>;
  } else if (locations.value == 4) {
    return <Text>Best Time to Visit - 7AM</Text>;
  } else {
    return (
      <>
        <View style={styles.textContainer}>
          <MaterialIcons name="schedule" size={17} color="blue" />

          <Text style={styles.smallText}>Best Time to Visit - 7AM</Text>
        </View>

        <View style={styles.textContainer}>
          <MaterialIcons name="lock-open" size={17} color="blue" />
          <Text style={styles.smallText}>Opens - 6AM</Text>
        </View>
      </>
    );
  }
};

function BestTime({ onPress }) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/back10.jpg")}
        resizeMode={"cover"}
      >
        <SafeAreaView style={styles.droidSafeArea}>
          <View style={styles.topView1}>
            <Text style={styles.title}>Select A Location</Text>
            <Form
              initialValues={{
                category: null,
              }}
              onSubmit={(values) => console.log(values)}
            >
              <Picker
                items={locations}
                name="category"
                placeholder="Locations"
              />
            </Form>
          </View>

          <View style={styles.topView2}>{displayDetails()}</View>

          <View style={styles.topView3}>
            <Text style={styles.title}>Check Busy times</Text>
            <Form
              initialValues={{
                category: null,
              }}
              onSubmit={(values) => console.log(values)}
            >
              <Picker placeholder="Month to visit" />
              <Picker placeholder="Day to Visit" />
              <Picker placeholder="Time" />
            </Form>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Check</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.topView4}>
            <View style={styles.textContainer}>
              <MaterialIcons name="lock-open" size={17} color="blue" />
              <Text style={styles.smallText}>Crowed - 87%</Text>
            </View>
            <View style={styles.textContainer}>
              <MaterialIcons name="lock-open" size={17} color="blue" />
              <Text style={styles.smallText}>Status - Busy</Text>
            </View>
            <View style={styles.textContainer}>
              <MaterialIcons name="lock-open" size={17} color="blue" />
              <Text style={styles.smallText}>Suggested Time - 6AM</Text>
            </View>
          </View>

          <View style={styles.topView5}>
            <View style={styles.View5left}>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.btnText}>Add to Schedule</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.view5right}>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.btnText}>View Suggestions</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  topView1: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView2: {
    height: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  topView3: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  topView4: {
    height: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  topView5: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  View5left: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  view5right: {
    flex: 1,
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "95%",
    marginVertical: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    extTransform: "uppercase",
  },
  smallText: {
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 5,
  },
});

export default BestTime;
