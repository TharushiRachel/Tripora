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
  Button 
} from "react-native";
import colors from "../config/colors";
import { AntDesign } from '@expo/vector-icons';
import { Feather, Entypo } from "@expo/vector-icons"; 

const Dashboard = ({ navigation, onPress, clicked, searchPhrase, setSearchPhrase, setCLicked }) =>{
    
    return (
        <View style={styles.body}>

    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
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
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
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


    
    </View>
    );
  }
  
  const styles = StyleSheet.create({

    body : {
        backgroundColor:'#FAF9F6',
        // alignItems:'center',
        // justifyContent:'center',
        flex:1
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
        borderColor:colors.primary
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor:colors.primary
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        color:"black",
        alignItems: "center",
      },


  });
  
  export default Dashboard;