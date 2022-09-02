import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    Pressable
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import tourguide from '../assets/tourguide.png'; 
import PrevSlideButton from "../components/PrevSlideButton";


const IMAGENAME = require("../assets/guide2.png"); 

const TourGuideScreen = ({navigation, onPress}) =>{

    // const { onPress, title = 'Save' } = props;

    return(
        <View style={styles.body}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Tour Guide</Text>
                
            </View>

            <Text style={styles.text6}>Recomended for you</Text><br></br>

            <View style={styles.box1}>
                <Image source={tourguide} style={styles.guide_img} />
                <Text style={styles.text2}>Sujeewa de Silva</Text>
            </View>

            <Text style={styles.text3}>Account Info</Text>

            <Text style={styles.text4}>NAME</Text>
            <Text style={styles.text5}>T. N. S. De Silva</Text>

            <Text style={styles.text4}>EMAIL</Text>
            <Text style={styles.text5}>sujeewads@gmail.com</Text>

            <Text style={styles.text4}>MOBILE</Text>
            <Text style={styles.text5}>077-2621988</Text>

            {/* <Button title="HIRE" style={styles.hire_btn}
             color="#54D2C4"
             borderRadius="25"
             onPress={() => Alert.alert('Button with adjusted color pressed')}/> */}

            <Pressable style={styles.hire_btn} onPress={onPress}> HIRE</Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor:'#FAF9F6',
        // alignItems:'center',
        // justifyContent:'center',
        flex:1
    },
    
    box1:{
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:20,
        height:200,
        padding:15,
        
    },

    text1: {
        color: '#000000',
        fontWeight:800,
        marginRight:170,
        marginTop:35,
        fontSize:18,
        marginBottom:40
    },

    back_btn: {
        marginLeft:30,
        marginTop:37,
        color:colors.primary,
    },

    text2:{
        textAlign: 'center',
        fontSize:24,
        fontWeight:700
    },

   text3:{
        fontSize:24,
        fontWeight:700,
        marginLeft:40,
        marginTop:25
   },

   text4:{
        fontSize:16,
        fontWeight:600,
        marginLeft:40,
        marginTop:25
   },

   text5:{
        fontSize:16,
        fontWeight:600,
        marginLeft:40,
        color:'#A9A9A9',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginRight:40
    },

    hire_btn:{
        // width:320,
        height:48,
        marginLeft:20,
        borderRadius:25,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:18,
        marginTop:30,
        fontWeight:800,
        marginRight:20
        
    },

    guide_img:{
        width: 150, 
        height: 150,

    },

    text6:{
        fontSize:16,
        fontWeight:400,
        color:'#696969',
        marginLeft:20
    },

   
    
});

export default TourGuideScreen;