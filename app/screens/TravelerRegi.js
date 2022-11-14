import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import ItemPicker from "../components/ItemPicker";
import axios from "axios";
import ItemPicker from "../components/ItemPicker";
import colors from "../config/colors";

const locations = [
  { label: "Nuwara Eliya", value: 1 },
  { label: "Colombo", value: 2 },
  { label: "Kandy", value: 3 },
  { label: "Galle", value: 4 },
  { label: "Jaffna", value: 5 },
];

const dayTypes = [
  { label: "1 to 3 days", value: 1 },
  { label: "3 to 7 days", value: 2 },
  { label: "1 to 2 weeks", value: 3 },
  { label: "2 to 3 weeks", value: 4 },
  { label: "3 to 4 weeks", value: 5 },
];

function TravelerRegi() {
  const [district, setDistrict] = useState(0);
  const [days, setDays] = useState(0);
  const [religious, setReligious] = useState(0);
  const [historic, setHistoric] = useState(0);
  const [parks, setParks] = useState(0);
  const [falls, setFalls] = useState(0);
  const [lakes, setLakes] = useState(0);
  const [mountains, setMountains] = useState(0);
  const [beaches, setBeaches] = useState(0);
  const [other, setOther] = useState(0);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      district,
      days,
      religious,
      historic,
      parks,
      falls,
      lakes,
      mountains,
      beaches,
      other,
    };

    axios
      .post("https://triporaplan.herokuapp.com/plan", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg = `locations: ${data.locations}`;
        // setQuote(res.data.prediction);
        setMsg(msg);
        alert(msg);
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  return (
    <View style={styles.view1}>
      <ItemPicker
        selectedItem={locations[district - 1]}
        locations={locations}
        value={district}
        onSelectItem={(item) => setDistrict(item.value)}
        items={locations}
        icon="apps"
        placeholder="Select A Location"
      />

      <ItemPicker
        selectedItem={dayTypes[days - 1]}
        locations={dayTypes}
        value={days}
        onSelectItem={(item) => setDays(item.value)}
        items={dayTypes}
        icon="apps"
        placeholder="Select A Date Range"
      />

      <View style={styles.boxes}>
        <View style={styles.vcontainer}>
          <Text>Religious</Text>
          <View style={styles.inputview}>
            <TextInput
              label="religious"
              value={religious}
              onChangeText={(text) => setReligious(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Historic</Text>
          <View style={styles.inputview}>
            <TextInput
              label="historic"
              value={historic}
              onChangeText={(text) => setHistoric(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Parks</Text>
          <View style={styles.inputview}>
            <TextInput
              label="parks"
              value={parks}
              onChangeText={(text) => setParks(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Falls</Text>
          <View style={styles.inputview}>
            <TextInput
              label="falls"
              value={falls}
              onChangeText={(text) => setFalls(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Lakes</Text>
          <View style={styles.inputview}>
            <TextInput
              label="lakes"
              value={lakes}
              onChangeText={(text) => setLakes(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Mountains</Text>
          <View style={styles.inputview}>
            <TextInput
              label="mountains"
              value={mountains}
              onChangeText={(text) => setMountains(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Beaches</Text>
          <View style={styles.inputview}>
            <TextInput
              label="beaches"
              value={beaches}
              onChangeText={(text) => setBeaches(text)}
            />
          </View>
        </View>

        <View style={styles.vcontainer}>
          <Text>Other</Text>
          <View style={styles.inputview}>
            <TextInput
              label="other"
              value={other}
              onChangeText={(text) => setOther(text)}
            />
          </View>
        </View>

        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.button}
            onPress={(e) => {
              handleSubmit(e);
            }}
          >
            <Text style={styles.btnText}>View Suggested Locations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TravelerRegi;

const styles = StyleSheet.create({
  input: {
    height: 1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
  inputview: {
    padding: 2,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  btnText: {
    fontSize: 18,
    letterSpacing: 1.5,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
  btn: {
    backgroundColor: "green",
    borderRadius: 10,
    width: "50%",
  },
  view3: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "85%",
    marginVertical: 10,
  },
  vcontainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  // boxes: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column",
  // },
});