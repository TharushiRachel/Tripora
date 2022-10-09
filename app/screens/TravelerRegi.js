import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import ItemPicker from "../components/ItemPicker";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const locations = [
  { label: "Jaffna", value: 1 },
 // { label: "test", value: 2 },
  { label: "Mannar", value: 3 },
 // { label: "test", value: 4 },
 //{ label: "test", value: 5 },
  { label: "Puttalam", value: 6 },
  { label: "Kurunegala", value: 7 },
  { label: "Gampaha", value: 8 },
  { label: "Colombo", value: 9 },
  { label: "Kalutara", value: 10 },
  { label: "Anuradhapura", value: 11 },
  { label: "Polonnaruwa", value: 12 },
  { label: "Matale", value: 13 },
  { label: "Kandy", value: 14 },
  { label: "NuwaraEliya", value: 15 },
  { label: "Kegalle", value: 16 },
  { label: "Ratnapura", value: 17 },
  { label: "Trincomalee", value: 18 },
  { label: "Batticaloa", value: 19 },
  { label: "Ampara", value: 20 },
  { label: "Badulla", value: 21 },
  { label: "Monaragala", value: 22 },
  { label: "Hambantota", value: 23 },
  { label: "Matara", value: 24 },
  { label: "Galle", value: 25 },
 
];


function TravelerRegi({ navigation }) {
  const [id, setId] = useState("");
  const [day, setDay] = useState("");
  const [msg, setMsg] = useState("");
  const [Pref, setPref] = useState([]);

  const [Types, setTypes] = useState([]);

  const options = ['Religious Sites','Historic Sites','Beaches','Parks','Falls','Lakes','Markets','Other','Mountains'];

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
      .post("https://tripora.herokuapp.com/prediction", params)
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


  const insertData = () => {
    fetch('http://127.0.0.1:5000/add', {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({title:title, body:body})
    })
    .then(resp => resp.json())
    .then(data => {
      props.navigation.navigate('Home')
    })
    .catch(error => console.log(error))
  }


  function pickType(selectedType){
    //const index = teaveltypes.findIndex(teaveltype => teaveltype === selectedType)

    if (Types.includes(selectedType)) {
      setTypes(Types.filter(teaveltype => teaveltype !== selectedType))
      return;
    }

    setTypes(teaveltypes => teaveltypes.concat(selectedType))
  }

  return (
    <>
      <View style={styles.view1}>
        <View style={styles.textContainer}></View>
        <View style={styles.picContainer}>
          <ItemPicker
            selectedItem={locations[id - 1]}
            locations={locations}
            value={id}
            onSelectItem={(item) => setId(item.value)}
            items={locations}
            icon="apps"
            placeholder="Select A Starting District"
          />

        <TextInput style={styles.input} placeholder="  Enter No of Days" placeholderTextColor="#818181" 
          value={day}
          onChangeText={(text) => setDay(text)}/>


        <View style={styles.container}>
        <Text style={styles.title}>Select your preferred type of locetions</Text>

        <View style={styles.options}>
            {options.map(option => (
                <View key={option} style={styles.traveltype}>
                    <TouchableOpacity
                      style={styles.checkBox}
                      onPress={()=>pickType(option)}>
                      {Types.includes(option) && (
                        <Text style={styles.check}>✔️</Text>
                    )}
                    </TouchableOpacity>
                    <Text style={styles.traveltypeName}>{option}</Text>
            </View>
            ))}
            </View>
        </View>




        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            insertData();
          }}
        >
          <Text style={styles.btnText}>Check Now</Text>
        </TouchableOpacity>
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

  checkBox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'green',
    marginRight :5,
  },

  input: {
    alignSelf: 'center',
    fontSize: 16,
    width: '70%',
    marginTop: 20,
    marginBottom: 20,
  },

  check: {
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    justifycontent: 'center',
    alignItems :'center',
  },

  options: {
    alignSelf: 'flex-start',
    marginLeft: 50,
  },

  traveltype: {
    flexDirection: 'row',
    marginVertical: 7,
  },

  traveltypeName: {
    textTransform: 'capitalize',
    fontSize: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
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
    height: "75%",
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
    width: "80%",
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
});
export default TravelerRegi;