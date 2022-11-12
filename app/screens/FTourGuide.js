import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  Dimensions,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import tourguide from "../assets/guide1.png";
import PrevSlideButton from "../components/PrevSlideButton";

const { width } = Dimensions.get("window");

const IMAGENAME = require("../assets/guide1.png");

const FTourGuide = ({ navigation, onPress }) => {
  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate("TourGuide");
  };

  return (
    <View style={styles.body}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={styles.bottomContainer}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <AntDesign name="left" size={20} style={styles.back_btn} />
        </TouchableOpacity>
        <Text style={styles.text1}>Tour Guide</Text>
      </View>

      <Text style={styles.text6}>Recomended for you</Text>

      <View style={styles.box1}>
        <Image source={tourguide} style={styles.guide_img} />
        <Text style={styles.text2}>Sisira</Text>
      </View>
      <View>
        <Text style={styles.text3}>Account Info</Text>

        <Text style={styles.text4}>NAME</Text>
        <Text style={styles.text5}>J. S. K. Jayalath</Text>

        <Text style={styles.text4}>EMAIL</Text>
        <Text style={styles.text5}>sisira.jayalath.sj@gmail.com</Text>

        <Text style={styles.text4}>MOBILE</Text>
        <Text style={styles.text5}>N-1580</Text>
      </View>
      <TouchableOpacity style={styles.hire_btn} onPress={toggleModalVisibility}>
        {" "}
        <Text>Add a Comment</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}
      >
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Enter Comment"
              value={inputValue}
              style={styles.textInput}
              onChangeText={(value) => setInputValue(value)}
            />

            {/** This button is responsible to close the modal */}
            <Button
              title="ADD"
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>
        </View>
      </Modal>
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

  box1: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 200,
    padding: 15,
  },

  text1: {
    color: "#000000",
    // fontWeight:"bold",
    marginRight: 170,
    marginTop: 35,
    fontSize: 18,
    marginBottom: 40,
  },

  back_btn: {
    marginLeft: 30,
    marginTop: 37,
    color: colors.primary,
  },

  text2: {
    textAlign: "center",
    fontSize: 24,
    // fontWeight:700
  },

  text3: {
    fontSize: 24,
    // fontWeight:700,
    marginLeft: 40,
    marginTop: 25,
  },

  text4: {
    fontSize: 16,
    // fontWeight:600,
    marginLeft: 40,
    marginTop: 25,
  },

  text5: {
    fontSize: 16,
    // fontWeight:600,
    marginLeft: 40,
    color: "#A9A9A9",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginRight: 40,
  },

  hire_btn: {
    // width:320,
    height: 48,
    marginLeft: 20,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 18,
    marginTop: 30,
    // fontWeight:800,
    marginRight: 20,
  },

  guide_img: {
    width: 150,
    height: 150,
  },

  text6: {
    fontSize: 16,
    // fontWeight:400,
    color: "#696969",
    marginLeft: 20,
  },

  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    height: 180,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default FTourGuide;
