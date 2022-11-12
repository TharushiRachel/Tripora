import React, { Component, useState } from "react";
import {
  Button,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

export default class TourGuideRegister extends Component {
  // function TourGuideRegister({onPress}) {

  // const [username, setUserName] = useState("");
  // const [fullname, setFullName] = useState("");
  // const [email, setEamil] = useState("");
  // const [phone, setPhone] = useState("");
  // const [licenseNo, setLicenseNo] = useState("");
  // const [languageProficiencies, setLanguage] = useState("");
  // const [type, setType] = useState("");
  // const [description, setDescription] = useState("");
  // const [password, setPasword] = useState("");
  // let [displaytext, setDisplaytext] = React.useState("");

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   const params = {
  //       email: '',
  //       password: '',
  //       fullname: '',
  //       username: '',
  //       languageProficiencies: '',
  //       type: '',
  //       phone: '',
  //       licenseNo: '',
  //       description: ''
  //   };

  //   axios
  //     .post("http://localhost:3000/tour-guide", params)
  //     .then((res) => {
  //       const data = res.data.data;
  //       const parameters = JSON.stringify(params);
  //       // const msg = `Parameters: ${parameters}\nPrediction: ${data.prediction}`;
  //       // alert(msg);
  //       // reset();
  //       alert('Data successfully inserted')
  //     })
  //     .catch((error) => alert(`Error: ${error.message}`));
  // };

  emailInputRef = React.createRef();
  passwordInputRef = React.createRef();
  fullnameInputRef = React.createRef();
  usernameInputRef = React.createRef();
  licenseNoInputRef = React.createRef();
  languageProficienciesInputRef = React.createRef();
  typeInputRef = React.createRef();
  phoneInputRef = React.createRef();
  scrollViewRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullname: "",
      username: "",
      languageProficiencies: "",
      type: "",
      phone: "",
      licenseNo: "",
      description: "",
      showEmailError: false,
      showPasswordError: false,
      showFirstnameError: false,
      showLastnameError: false,
      showOccupationError: false,
      showAddressError: false,
      showZipError: false,
      showPhoneError: false,
    };
    this.submitPressed = this.submitPressed.bind(this);
  }

  inputs = () => {
    return [
      this.emailInputRef,
      this.passwordInputRef,
      this.fullnameInputRef,
      this.usernameInputRef,
      this.licenseNoInputRef,
      this.languageProficienciesInputRef,
      this.typeInputRef,
      this.phoneInputRef,
    ];
  };

  editNextInput = () => {
    console.log("editNextInput");
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
      return;
    }

    const nextIndex = activeIndex + 1;
    if (
      nextIndex < this.inputs().length &&
      this.inputs()[nextIndex].current != null
    ) {
      this.setFocus(this.inputs()[nextIndex], true);
    } else {
      this.finishEditing();
    }
  };

  onInputFocus = () => {
    this.setState({
      activeIndex: this.getActiveInputIndex(),
    });
  };

  onChangeInputHandler = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  getActiveInputIndex = () => {
    const activeIndex = this.inputs().findIndex((input) => {
      if (input.current == null) {
        return false;
      }
      console.log("input: ", input);
      return input.current.isFocused();
    });
    console.log("activeIndex: ", activeIndex);
    return activeIndex;
  };

  finishEditing = () => {
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
      return;
    }
    this.setFocus(this.inputs()[activeIndex], false);
  };

  setFocus(textInputRef, shouldFocus) {
    if (shouldFocus) {
      setTimeout(() => {
        textInputRef.current.focus();
      }, 100);
    } else {
      textInputRef.current.blur();
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitPressed(e) {
    // console.log("submitPressed this.state: ", this.state);
    // this.setState({
    //     showEmailError: this.state.email.length < 4,
    //     showPasswordError: this.state.password.length < 4,
    //     showFirstnameError: this.state.firstname.length < 4,
    //     showLastnameError: this.state.lastname.length < 4,
    //     showOccupationError: this.state.occupation.length < 4,
    //     showAddressError: this.state.address.length < 4,
    //     showZipError: this.state.zip.length < 4,
    //     showPhoneError: this.state.phone.length < 4,
    // });
    // Keyboard.dismiss();
    e.preventDefault();
    let tourguide = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      languageProficiencies: this.state.languageProficiencies,
      type: this.state.type,
    };
    console.log("data to send", tourguide);
    axios
      .post("http://localhost:3000/tour-guide", tourguide)
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    const params = {
      email,
      password,
      fullname,
      username,
      languageProficiencies,
      type,
      phone,
      licenseNo,
      description,
    };

    axios
      .post("http://localhost:3000/tour-guide", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        // const msg = `Parameters: ${parameters}\nPrediction: ${data.prediction}`;
        // alert(msg);
        alert("Data added");
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        contentOffset={{ x: 0, y: 24 }}
        ref={this._scrollViewRef}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 24 }}
        contentInsetAdjustmentBehavior="always"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        enableOnAndroid={true}
        extraHeight={32}
        extraScrollHeight={Platform.OS == "android" ? 32 : 0}
        enableResetScrollToCoords={false}
        onKeyboardDidShow={this._keyboardDidShowHandler}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Registration</Text>

          <View style={styles.inputTextWrapper}>
            <TextInput
              // placeholder="Full Name"
              // style={styles.textInput}
              // returnKeyType="next"
              // onSubmitEditing={this.editNextInput}
              // onFocus={this.onInputFocus}
              // onChangeText={this.onChangeInputHandler}
              // ref={this.fullnameInputRef}
              // value={this.state.fullname}
              // onChange={this.onChange}
              selectedItem={fullname}
              onSelectItem={(item) => setFullName(item)}
              items={fullname}
              icon="apps"
              name="fullname"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            {this.state.showFirstnameError && (
              <Text style={styles.errorText}>Please enter your full name.</Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="User Name"
              style={styles.textInput}
              returnKeyType="next"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.usernameInputRef}
              // value={this.state.username}
            />
            {this.state.showLastnameError && (
              <Text style={styles.errorText}>
                Please enter your username name.
              </Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              returnKeyType="next"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.emailInputRef}
              // value={this.state.email}
            />
            {this.state.showEmailError && (
              <Text style={styles.errorText}>
                Please enter your email address.
              </Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="Phone"
              style={styles.textInput}
              returnKeyType="done"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.phoneInputRef}
              // value={this.state.phone}
            />
            {this.state.showPhoneError && (
              <Text style={styles.errorText}>
                Please enter your phone number.
              </Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="License No"
              style={styles.textInput}
              returnKeyType="next"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.licenseNoInputRef}
              // value={this.state.languageProficiencies}
            />
            {this.state.showOccupationError && (
              <Text style={styles.errorText}>
                Please enter your language proficiencies.
              </Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="Language Proficiencies"
              style={styles.textInput}
              returnKeyType="next"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.languageProficienciesInputRef}
              // value={this.state.languageProficiencies}
            />
            {this.state.showOccupationError && (
              <Text style={styles.errorText}>
                Please enter your language proficiencies.
              </Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="Type"
              style={styles.textInput}
              returnKeyType="next"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.typeInputRef}
              // value={this.state.type}
            />
            {this.state.showAddressError && (
              <Text style={styles.errorText}>Please enter your type</Text>
            )}
          </View>

          <View style={styles.inputTextWrapper}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={true}
              returnKeyType="next"
              onSubmitEditing={this.editNextInput}
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeInputHandler}
              ref={this.passwordInputRef}
              // value={this.state.password}
            />
            {this.state.showPasswordError && (
              <Text style={styles.errorText}>Please enter a password.</Text>
            )}
          </View>

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={this.handleSubmit} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    fontSize: 36,
    padding: 24,
    margin: 12,
    textAlign: "center",
  },
  inputTextWrapper: {
    marginBottom: 24,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    paddingRight: 30,
  },
  errorText: {
    color: "red",
    fontSize: 10,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 36,
  },
});

// export default TourGuideRegister;
