import axios from "axios";
import React from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import colors from "../config/colors";

export default class RegisterT extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone: "",
      fullname: "",
      languageProficiencies: "",
      type: "",
      licenseNo: "",
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signUp = async () => {
    const {
      username,
      password,
      email,
      phone,
      fullname,
      licenseNo,
      languageProficiencies,
      type,
    } = this.state;
    axios
      .post("http://localhost:3000/tour-guide", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        // const msg = `Parameters: ${parameters}\nPrediction: ${data.prediction}`;
        // setQuote(res.data.prediction);
        alert("Data added");
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let guide = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      phone: this.state.phone,
      fullname: this.state.fullname,
      licenseNo: this.state.licenseNo,
      languageProficiencies: this.state.languageProficiencies,
      type: this.state.type,
    };
    console.log("data to send", guide);

    axios
      .post("http://localhost:3000/tour-guide", guide)
      .then((response) => {
        alert("Data successfully inserted");
        props.navigation.navigate("FindAGuide");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Add details</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("fullname", val)}
          // value={this.state.username}
          // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("username", val)}
          // value={this.state.username}
          // onChange={this.onChange}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("email", val)}
          // value={this.state.email}
          // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("phone", val)}
          // value={this.state.phone}
          // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder="License No"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("licenseNo", val)}
          // value={this.state.phone}
          // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Language Proficiencies"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) =>
            this.onChangeText("languageProficiencies", val)
          }
          // value={this.state.phone}
          // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Type"
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("type", val)}
          // value={this.state.phone}
          // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#B5B5B5"
          onChangeText={(val) => this.onChangeText("password", val)}
          // value={this.state.password}
          // onChange={this.onChange}
        />
        {/* <Button
          title='Register'
          style={styles.hire_btn}
          onPress={this.onSubmit}
        >Register</Button> */}

        <Pressable style={styles.hire_btn} onPress={this.onSubmit}>
          {" "}
          REGISTER
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 338,
    height: 48,
    backgroundColor: "#FFFFFF",
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 25,
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF9F6",
  },

  text1: {
    color: "#000000",
    fontWeight: "bold",
    marginRight: 170,
    marginTop: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  hire_btn: {
    width: 338,
    height: 48,
    backgroundColor: "#54D2C4",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 25,
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});
