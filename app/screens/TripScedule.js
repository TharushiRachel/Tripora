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

function TripSchedule(){

    return(
        <View style={styles.body}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <AntDesign name="left" size={20} style={styles.back_btn} />
                <Text style={styles.text1}>Let's plan your trip!</Text>
            </View>

            <Text style={styles.text2}>Recomended for you</Text>
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

    text2:{
        fontSize:16,
        fontWeight:400,
        color:'#696969',
        marginLeft:20
    }
})

export default TripSchedule;