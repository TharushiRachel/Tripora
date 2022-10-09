import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors";
import ItemPicker from "../components/ItemPicker";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons'; 

const locations = [
  { label: "Businness News", value: 1 },
  { label: "Politic News", value: 2 },
  { label: "Tech News", value: 3 },
  { label: "Sports News", value: 4 },
  { label: "General News", value: 5 },
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
  { label: "", value: 13 },
];





function BestTime({ navigation }) {
  const [category, setId] = useState("");
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const [msg4, setMsg4] = useState("");

  // Busy count prediction
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      category,
    };

    axios
      .post("https://tripora2.herokuapp.com/news", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        // const msg = `Parameters: ${parameters}\nCrowd: ${data.prediction}%`;
        const msg = `${data.news}%`;
        // const msg2 = `${data.status}`;
        setMsg(msg);
        // setMsg2(msg2);
        alert(msg);
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };





  return (
    <>
     <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text11}> Predict News Details!!</Text>               
      </View>   
      <View style={styles.view1}>
        <View style={styles.textContainer}>
          {/* <Text style={styles.text1}>
            Check the peak times on the day you want to travel
          </Text> */}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Businness")}
        >
          <Text style={styles.btnText}>Businness News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("Sports")}
        >
          <Text style={styles.btnText2}>Sports News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("World")}
        >
          <Text style={styles.btnText}>World News</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("World")}
        >
          <Text style={styles.btnText2}>Entertainment News</Text>
        </TouchableOpacity>
      </View>

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
              <Text style={styles.btnText}>View Daily News</Text>
            </TouchableOpacity>
     </View>
     </View>
      {/* <View style={styles.view3}>
     
        <View style={styles.View3left}>
      
        </View> */}
{/* 
        <View style={styles.view3right}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SuggestedPlaces")}
            >
              <Text style={styles.btnText}>View Suggestions</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      {/* </View> */}
      </SafeAreaView>
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
    fontWeight: "bold",
    paddingLeft: 5,
  },
  view1: {
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
  
  text11: {
    color: '#000000',
    // fontWeight:800,
    marginRight:230,
    marginTop:35,
    fontSize:18,
    marginBottom:40
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
  button2: {
    backgroundColor: colors.gray,
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
  btnText2: {
    color: colors.primary,
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
    // borderTopWidth: 2,
    // borderColor: colors.primary,
  },
  view3: {
    height: "25%",
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
  View3left: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  view3right: {
    flex: 1,
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  back_btn: {
    marginLeft:30,
    marginTop:37,
    color:colors.primary,
},
container:{
  flex: 1,
  backgroundColor: '#fff',
},
});
export default BestTime;