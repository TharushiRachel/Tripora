import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Buttons from "../config/Buttons";

const SignInScreen = ({ navigation, onPress }) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff", flexDirection: "column" }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#fff",
                marginTop: 60,
              }}
            >
              Register Now !
            </Text>
            {/* <Image source={require('../assets/waving_hand.png')} style={{width:30,height:30}}  /> */}
          </View>
        </View>

        <View style={styles.footer}>
          <View
            style={{
              flex: 2,
              flexDirection: "column",
              backgroundColor: "#fff",
              paddingTop: 8,
              paddingHorizontal: "3%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#ededed",
                width: "95%",
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
              }}
            >
              <Icon
                name="user"
                size={22}
                color="#818181"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="  User Name"
                placeholderTextColor="#818181"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#ededed",
                width: "95%",
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
                marginTop: 20,
              }}
            >
              <Icon
                name="envelope-o"
                size={20}
                color="#818181"
                style={{ marginRight: 7 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="  Your Email"
                placeholderTextColor="#818181"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#ededed",
                width: "95%",
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
                marginTop: 20,
              }}
            >
              <Icon
                name="phone"
                size={20}
                color="#818181"
                style={{ marginRight: 8 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="  Mobile Number"
                placeholderTextColor="#818181"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#ededed",
                width: "95%",
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
                marginTop: 20,
              }}
            >
              <Icon
                name="lock"
                size={22}
                color="#818181"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="  Password"
                secureTextEntry={true}
                placeholderTextColor="#818181"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#ededed",
                width: "95%",
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
                marginTop: 20,
              }}
            >
              <Icon
                name="lock"
                size={22}
                color="#818181"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="  Confirm Password"
                secureTextEntry={true}
                placeholderTextColor="#818181"
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={styles.bottomContainer}
                onPress={() => navigation.navigate("Dashboard")}
              >
                <Buttons btn_text={"Sign Up"} />
              </TouchableOpacity>
            </View>

            {/* <View style={styles.topView4}>
              <TouchableOpacity
                style={styles.bottomContainer}
                onPress={() => navigation.navigate("Dashboard")}
              >
                <Text style={styles.bottomText}>Sign Up</Text>
              </TouchableOpacity>
            </View> */}

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundColor: "#fff",
                marginBottom: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#818181",
                }}
              >
                Already have a account?{" "}
              </Text>
              <TouchableOpacity
                style={styles.bottomContainer}
                onPress={() => navigation.navigate("SingIn")}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#333",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            {/* <View>
              <TouchableOpacity
                style={styles.bottomContainer}
                onPress={() => navigation.navigate("RegisterT")}
              >
                <Text
                  style={{
                    fontSize: 18,

                    color: "green",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Register as a Tour Guide
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    fontWeight: "bold",
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    color: "#05375a",
    textAlign: "left",
    justifyContent: "flex-start",
    marginTop: 5,
    marginBottom: 5,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

  topView4: {
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#009387",
    height: 50,
    marginBottom: 30,
    borderRadius: 10,
    fontSize: 15,
    letterSpacing: 1.5,
    textAlign: "center",
    position: "relative",
    color: "#fff",
  },
});
