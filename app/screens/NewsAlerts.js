import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    Pressable,
    ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import landslide from '../assets/landslide.png';
import sigiriya from '../assets/sigiriya.png'
import flood from '../assets/flood.png';
import storm from '../assets/storm.png';

const NewsAlerts =({navigation, onPress})=>{

    return(
        <View style={styles.body}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Alert!!</Text>
            </View>

            <Text style={styles.text2}>Recomended for you</Text>

            <ScrollView>
            <View style={styles.item}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Image source={landslide} style={styles.negombo_img} />
                    </View>

                    <View style={styles.text_view}>
                        <Text style={styles.negombo_text}>Landslide</Text>
                        <Text style={styles.negombo_text2} >Negombo, Sri Lanka</Text>
                    </View>    
                </View>
            </View>

            <View style={styles.item}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                    <Image source={flood} style={styles.negombo_img} />
                    </View>

                    <View style={styles.text_view}>
                        <Text style={styles.negombo_text}>Flood</Text>
                        <Text style={styles.negombo_text2} >Negombo, Sri Lanka</Text>
                    </View>    
                </View>
            </View>

            <View style={styles.item}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                    <Image source={storm} style={styles.negombo_img} />
                    </View>

                    <View style={styles.text_view}>
                        <Text style={styles.negombo_text}>Storm</Text>
                        <Text style={styles.negombo_text2} >Negombo, Sri Lanka</Text>
                    </View>    
                </View>
            </View>

            <View style={styles.item}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                    <Image source={sigiriya} style={styles.negombo_img} />
                    </View>

                    <View style={styles.text_view}>
                        <Text style={styles.negombo_text}>Negombo</Text>
                        <Text style={styles.negombo_text2} >Negombo, Sri Lanka</Text>
                    </View>    
                </View>
            </View>


            </ScrollView>

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
        marginRight:230,
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
    },

    item:{
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        marginRight:20,
        marginLeft:20,
        padding:15,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3, 
    },

    negombo_img:{
        width: 110, 
        height: 100,
        // borderRadius:100
    },

    negombo_text:{
        marginTop:0,
        fontSize:20,
        fontWeight:600,
        color:colors.primary,
        marginLeft:10
    },

    location_icon:{
        color:colors.primary,
    },

    negombo_text2:{
        marginLeft:5,
        fontSize:16,
        color:colors.gray,
        marginLeft:10
    },

    text_view:{
        justifyContent:'center',
        alignItems:'flex-start',
        width:190
    }
})

export default NewsAlerts;