import axios from 'axios'
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable
} from 'react-native'
import colors from "../config/colors";


export default class Preferences extends React.Component {

    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onChangeText=this.onChangeText.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            country: '', 
            language: '', 
            preferedType: '', 
          }
    }
  
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value })
}

  signUp = async () => {
    const { country, language, preferedType } = this.state
    axios
      .post("http://localhost:3000/tourist/preferences", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        // const msg = `Parameters: ${parameters}\nPrediction: ${data.prediction}`;
        // setQuote(res.data.prediction);
        alert('Data added');
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));

  }


  onChange(e){
    this.setState({[e.target.name]: e.target.value })
}

  onSubmit(e,navigation){
    e.preventDefault();
    let tourist={
        country:this.state.country,
        language:this.state.language,
        preferedType:this.state.preferedType,
    }
    console.log('data to send',tourist);

    axios.post('http://localhost:3000/tourist/preferences', tourist)
.then(response => {
//   alert('Data successfully inserted')
  navigation.navigate("Dashboard")
})
.catch(error => {
  console.log(error.message);
  alert(error.message)
})
}
 
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text1}>Add details</Text>

        <TextInput
          style={styles.input}
          placeholder='Country'
          autoCapitalize="none"
          placeholderTextColor='#B5B5B5'
          onChangeText={val => this.onChangeText('country', val)}
        // value={this.state.username}
        // onChange={this.onChange}
        />
        <TextInput
          style={styles.input}
          placeholder='Language'
          autoCapitalize="none"
          placeholderTextColor='#B5B5B5'
          onChangeText={val => this.onChangeText('language', val)}
        // value={this.state.username}
        // onChange={this.onChange}
        />
        
        <TextInput
          style={styles.input}
          placeholder='Prefered Types'
          autoCapitalize="none"
          placeholderTextColor='#B5B5B5'
          onChangeText={val => this.onChangeText('preferedType', val)}
        // value={this.state.email}
        // onChange={this.onChange}
        />
        
        <Pressable style={styles.hire_btn} onPress={this.onSubmit}> REGISTER</Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 338,
    height: 48,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 25,
    fontSize: 18,
    fontWeight: '400',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FAF9F6'
  },

  text1: {
    color: '#000000',
    fontWeight:800,
    marginRight:170,
    marginTop:15,
    fontSize:18,
    marginBottom:20
},
hire_btn:{

    width: 338,
    height: 48,
    backgroundColor: '#54D2C4',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 25,
    fontSize: 18,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
},
})