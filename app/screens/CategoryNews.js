import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import ItemPicker from "../components/ItemPicker";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
const locations = [
  { label: "Businness News", value: 0 },
  { label: "World News", value: 1 },
  { label: "Tech News", value: 2 },
  { label: "Sports News", value: 3 },
];
function CategoryNews({ navigation }) {
  const [id, setId] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const [msg4, setMsg4] = useState("");
  const [msg5, setMsg5] = useState([]);
  // Busy count prediction
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
        // const msg = `Parameters: ${parameters}\nCrowd: ${data.prediction}%`;
        const msg = `${data.prediction}%`;
        const msg2 = `${data.status}`;
        setMsg(msg);
        setMsg2(msg2);
        // alert(msg);
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };
  // Alternative places suggestion
  const handleSubmit4 = (e) => {
    e.preventDefault();
    const params = {
      id,
      month,
      day,
      time,
    };
    axios
      .post("https://tripora.herokuapp.com/locationsuggest", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg5 = `${data.best_location}`;
        setMsg5(msg5);
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };
  return (
    <>
      <View style={styles.view1}>
        <View style={styles.textContainer}></View>
        {/* <View style={styles.picContainer}>
          <ItemPicker
            selectedItem={locations[id]}
            locations={locations}
            value={id}
            onSelectItem={(item) => setId(item.value)}
            items={locations}
            icon="apps"
            placeholder="Select A Category"            
          />
          
        </View> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("Businness")}                         
          }
        >
          <Text style={styles.btnText}>Business News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => { navigation.navigate("World")}                         
          }
        >
          <Text style={styles.btnText2}>World News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("Sports")}                         
          }
        >
          <Text style={styles.btnText}>Sports News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => { navigation.navigate("World")}                         
          }
        >
          <Text style={styles.btnText2}>Tech News</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => { {
            if(id == 1){
              navigation.navigate("Businness")
            }
            else if(id  == 2){
              navigation.navigate("World")
            }
            else if(id == 3){
              navigation.navigate("World")
            }
            else{
              navigation.navigate("Sports")
            }
           }
          }                         
          }
        >
          <Text style={styles.btnText}>Check News Updates</Text>
        </TouchableOpacity> */}
      </View>
            {/* <View style={styles.view3}>
                <View style={styles.button}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("LocationNews")}
                      >
                        <Text style={styles.btnText}>View Location Wise News</Text>
                      </TouchableOpacity>
              </View>
            </View> */}
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
    padding: 13,
    width: "85%",
    marginVertical: 10,
  },
  button2: {
    backgroundColor: colors.gray,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    width: "85%",
    marginVertical: 10,
  },
  btnText2: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
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
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
});
export default CategoryNews;
