import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Platform,
    StyleSheet ,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    CheckBox

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../config/Buttons'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import { RadioButton } from 'react-native-paper';


const Preferences = ({ navigation, onPress }) => {

    const [checked, setChecked] = React.useState('first');
    

    return (
    <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
      <View style={styles.container}>
  
      {/* <Text style={styles.text1}>Add details</Text> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Add Details</Text>
            </View>
              
        <View style={styles.footer}>
        <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%'}} >
            <View style={{flexDirection:'column',paddingTop:20}} >

            <Text>Enter Your Language</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'155%',borderRadius:10,height:50}} >
                        
                        <TextInput style={styles.input} placeholder="" placeholderTextColor="#818181" />
                        

                </View>

                <Text>Enter Your Prefered Types</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} > 
                    
                        <TextInput style={styles.input} placeholder="ex: history, birding, water sports" secureTextEntry={true} placeholderTextColor="#818181" />
                        
                    </View>

               
                {/* <Buttons  btn_text={"Hire a Guide"}/>      */}

                <View style={styles.topView4}>
                    <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("TourGuide")}>
                        <Text style={styles.bottomText}>Hire a Guide</Text>
                    </TouchableOpacity>
                </View>
            </View> 
            
                     
        </View>     
        </View>      
      </View>
    </ScrollView>
    );

   
};

export default Preferences;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        fontWeight: 'bold',
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        // flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        // paddingLeft: 10,
        // color: '#05375a',
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
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    },

    topView4:{
      justifyContent:'center',
      width:'95%',
      backgroundColor:'#009387',
      height:50,
      marginBottom:30,
      borderRadius:10,
      fontSize:15,
      letterSpacing:1.5,
      textAlign:'center',
      position:'relative',
      fontFamily:'OpenSans-SemiBold',
      color:'#fff'
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },


  text1: {
    color: '#000000',
    fontWeight:800,
    marginRight:100,
    marginTop:35,
    fontSize:18,
    marginBottom:40
},
back_btn: {
    marginLeft:30,
    marginTop:37,
    color:colors.primary,
},



//new

  });
