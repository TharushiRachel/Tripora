import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import ItemPicker from "../components/ItemPicker";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
// import Icon from 'react-native-vector-icons/MaterialIcons';

const locations = [
  { label: "Businness", value: 0 },
  { label: "World", value: 1 },
  { label: "Local", value: 2 },
  { label: "Sports", value: 3 },
];

function BestTime({ navigation }) {
  const [id, setId] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const [msg4, setMsg4] = useState("");
  const [msg5, setMsg5] = useState([]);

  //predic news baseed on category
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      id,
      month,
      day,
      time,
    };

    axios
      .post("https://tripora.herokuapp.com/news", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg = `${data.prediction}%`;
        const msg2 = `${data.status}`;
        setMsg(msg);
        setMsg2(msg2);

      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

const pressHadler = (id) => {
 // console.log(id.label);
  navigation.navigate(id.label);
}
// const categoryIcons = [
//   <Icon name="flight" size={25} color={colors.primary} />,
//   <Icon name="beach-access" size={25} color={colors.primary} />,
//   <Icon name="near-me" size={25} color={colors.primary} />,
//   <Icon name="place" size={25} color={colors.primary} />,
// ];

// const ListCategories = () => {
//   return (
//     <View style={styles.categoryContainer}>
//       {categoryIcons.map((icon, index) => (
//         <View key={index} style={styles.iconContainer}>
//           {icon}
//         </View>
//       ))}
//     </View>
//   );
// };
  return (
    <>
        <ImageBackground
      style={styles.background}
      source={require("../assets/back6.jpg")}
      resizeMode={"cover"}
    >
      <View style={styles.view1}>
        <View style={styles.textContainer}></View>
        <View style={styles.picContainer}>
          <ItemPicker
            selectedItem={locations[id]}
            locations={locations}
            value={id}
            onSelectItem={(item) => setId(item.value)}
            items={locations}
            icon="apps"
            placeholder="Select A Category"
          />    
        <TouchableOpacity
          style={styles.button}
                      onPress={() => pressHadler(locations[id])}
                      >
                      <Text style={styles.btnText}>Check News Updates</Text>
        </TouchableOpacity>              
        </View>
       
      </View>
      {/* <ListCategories /> */}
            <View style={styles.view3}>
                <View style={styles.button}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("LocationNews")}
                      >
                        <Text style={styles.btnText}>View Location Wise News</Text>
                      </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view4}>
              <View style={styles.button}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate("NewsAlerts")}
                    >
                      <Text style={styles.btnText}>View Latest News</Text>
                    </TouchableOpacity>
            </View>
          </View>
            <View style={styles.view4}>
              <View style={styles.button}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate("WeatherDetails")}
                    >
                      <Text style={styles.btnText}>View Weather Details</Text>
                    </TouchableOpacity>
            </View>
     </View>
     </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  smallText: {
    fontSize: 14,
    textTransform: "uppercase",
    // fontWeight: "bold",
    paddingLeft: 5,
  },
  smallText2: {
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingLeft: 5,
    color: "blue",
  },
  view1: {
    height: "55%",
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
    marginTop: 10,
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
  view2: {
    marginTop: 20,
    height: "25%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 30,
    marginRight: 50,
  },
  view3: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
  view4: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // borderTopWidth: 2,
    borderColor: colors.primary,
  },
  background: {
    flex: 1,
    height: "110%",
    width: "100%",
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default BestTime;
