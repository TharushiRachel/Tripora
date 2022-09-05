import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import ItemPicker from "../components/ItemPicker";
import { MaterialIcons } from "@expo/vector-icons";

const categories = [
  { label: "Abhayagiriya", value: 1 },
  { label: "Batticaloa Fort", value: 2 },
  { label: "Buddangala", value: 3 },
  { label: "Heritage meuseum", value: 4 },
  { label: "Kallady Beach", value: 5 },
  { label: "Lovamahapaya", value: 6 },
  { label: "Pasikuda Beach", value: 7 },
  { label: "Ruwanweliseya", value: 8 },
  { label: "Sri maha Bodhi", value: 9 },
  // { label: "Furniture", value: 10 },
  // { label: "Clothing", value: 11 },
  // { label: "Cameras", value: 12 },
  // { label: "Furniture", value: 13 },
  // { label: "Clothing", value: 14 },
  // { label: "Cameras", value: 15 },
  // { label: "Furniture", value: 16 },
  // { label: "Clothing", value: 17 },
  // { label: "Cameras", value: 18 },
  // { label: "Furniture", value: 19 },
  // { label: "Clothing", value: 20 },
  // { label: "Cameras", value: 21 },
  // { label: "Furniture", value: 22 },
  // { label: "Clothing", value: 23 },
  // { label: "Cameras", value: 24 },
  // { label: "Furniture", value: 25 },
  // { label: "Clothing", value: 26 },
  // { label: "Cameras", value: 27 },
  // { label: "Furniture", value: 28 },
  // { label: "Clothing", value: 29 },
  // { label: "Cameras", value: 30 },
  // { label: "Furniture", value: 31 },
  // { label: "Clothing", value: 32 },
  // { label: "Cameras", value: 33 },
  // { label: "Furniture", value: 34 },
  // { label: "Clothing", value: 35 },
  // { label: "Cameras", value: 36 },
  // { label: "Furniture", value: 37 },
  // { label: "Clothing", value: 38 },
  // { label: "Cameras", value: 39 },
  // { label: "Furniture", value: 40 },
  // { label: "Clothing", value: 41 },
  // { label: "Cameras", value: 42 },
  // { label: "Furniture", value: 43 },
  // { label: "Clothing", value: 44 },
  // { label: "Cameras", value: 45 },
  // { label: "Furniture", value: 46 },
  // { label: "Clothing", value: 47 },
  // { label: "Cameras", value: 48 },
  // { label: "Furniture", value: 49 },
  // { label: "Clothing", value: 50 },
  // { label: "Cameras", value: 51 },
  // { label: "Furniture", value: 52 },
  // { label: "Clothing", value: 53 },
  // { label: "Cameras", value: 54 },
  // { label: "Furniture", value: 55 },
  // { label: "Clothing", value: 56 },
  // { label: "Cameras", value: 57 },
  // { label: "Furniture", value: 58 },
  // { label: "Clothing", value: 59 },
  // { label: "Cameras", value: 60 },
];

const months = [
  { label: "January", value: 1 },
  { label: "Feburary", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

const days = [
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
  { label: "Sunday", value: 7 },
];

const times = [
  { label: "00:00", value: 0 },
  { label: "01:00", value: 1 },
  { label: "02:00", value: 2 },
  { label: "03:00", value: 3 },
  { label: "04:00", value: 4 },
  { label: "05:00", value: 5 },
  { label: "06:00", value: 6 },
  { label: "07:00", value: 7 },
  { label: "08:00", value: 8 },
  { label: "09:00", value: 9 },
  { label: "10:00", value: 10 },
  { label: "10:00", value: 11 },
  { label: "12:00", value: 12 },
  { label: "13:00", value: 13 },
  { label: "14:00", value: 14 },
  { label: "15:00", value: 15 },
  { label: "16:00", value: 16 },
  { label: "17:00", value: 17 },
  { label: "18:00", value: 18 },
  { label: "19:00", value: 19 },
  { label: "20:00", value: 20 },
  { label: "21:00", value: 21 },
  { label: "22:00", value: 22 },
  { label: "23:00", value: 23 },
];

function BestTime({ navigation }) {
  const [category, setCategory] = useState(categories[null]);
  const [month, setMonth] = useState(months[null]);
  const [day, setDay] = useState(days[null]);
  const [time, setTime] = useState(times[null]);
  return (
    <>
      <View style={styles.view1}>
        <ItemPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="Select A Location"
        />
        <View style={styles.textContainer}>
          <MaterialIcons name="access-time" size={17} color="blue" />
          <Text style={styles.smallText}>Best Time to visit - 6AM</Text>
        </View>
      </View>

      <View style={styles.view2}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>
            Check the peak times on the day you want to travel
          </Text>
        </View>
        <View style={styles.picContainer}>
          <ItemPicker
            selectedItem={month}
            onSelectItem={(item) => setMonth(item)}
            items={months}
            icon="calendar-month"
            placeholder="Choose Month"
          />
          <ItemPicker
            selectedItem={day}
            onSelectItem={(item) => setDay(item)}
            items={days}
            icon="calendar-today"
            placeholder="Choose Day"
          />
          <ItemPicker
            selectedItem={time}
            onSelectItem={(item) => setTime(item)}
            items={times}
            icon="clock-time-five-outline"
            placeholder="Choose Time"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Check Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view3}>
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

      <View style={styles.view4}>
        <View style={styles.View4left}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Add to Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view4right}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SuggestedPlaces")}
            >
              <Text style={styles.btnText}>View Suggestions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view1: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  smallText: {
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingLeft: 5,
  },
  view2: {
    backgroundColor: "white",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
  text1: {
    color: "#black",
    fontSize: 18,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  text1Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  picContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "85%",
    marginVertical: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  view3: {
    height: "15%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 30,
    marginRight: 50,
    // borderTopWidth: 2,
    // borderColor: colors.primary,
  },
  view4: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
  View4left: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  view4right: {
    flex: 1,
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
export default BestTime;
