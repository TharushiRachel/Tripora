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
import negombo from '../assets/negombo.png';
import sigiriya from '../assets/sigiriya.png';
import templeOfTooth from '../assets/templeOfTooth.png';
import nineArch from '../assets/nineArch.png';
import yala from '../assets/yala.png';
import mirissa from '../assets/mirissa.png';


const TripSchedule =({navigation, onPress})=>{

    return(
        <View style={styles.body}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Let's plan your trip!</Text>
            </View>

            <Text style={styles.text2}>Recomended for you</Text>

            <ScrollView>
            {/* <View style={styles.item}>
                <Image source={negombo} style={styles.negombo_img} />
                <Text style={styles.negombo_text}>Negombo</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AntDesign name="enviroment" size={20} style={styles.location_icon}/>
                    <Text style={styles.negombo_text2} >Negombo, Sri Lanka</Text>
                </View>
            </View> */}

            
            <View style={styles.item}>
                <Image source={sigiriya} style={styles.negombo_img} />
                <Text style={styles.negombo_text}>Sigiriya</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AntDesign name="enviroment" size={20} style={styles.location_icon}/>
                    <Text style={styles.negombo_text2} >Dambulla, Sri Lanka</Text>                   
                </View>
                    <Text style={styles.negombo_text2} >October 1</Text>
            </View>


            <View style={styles.item}>
                <Image source={templeOfTooth} style={styles.negombo_img} />
                <Text style={styles.negombo_text}>Temple of The Tooth</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AntDesign name="enviroment" size={20} style={styles.location_icon}/>
                    <Text style={styles.negombo_text2} >Kandy, Sri Lanka</Text>
                </View>
                <Text style={styles.negombo_text2} >October 3</Text>
            </View>

            <View style={styles.item}>
                <Image source={nineArch} style={styles.negombo_img} />
                <Text style={styles.negombo_text}>Nine Arch Bridge</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AntDesign name="enviroment" size={20} style={styles.location_icon}/>
                    <Text style={styles.negombo_text2} >Ella, Sri Lanka</Text>
                </View>
                <Text style={styles.negombo_text2} >October 5</Text>
            </View>

            <View style={styles.item}>
                <Image source={yala} style={styles.negombo_img} />
                <Text style={styles.negombo_text}>Yala National Park</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AntDesign name="enviroment" size={20} style={styles.location_icon}/>
                    <Text style={styles.negombo_text2} >Yala, Sri Lanka</Text>
                </View>
                <Text style={styles.negombo_text2} >October 7</Text>
            </View>

            <View style={styles.item}>
                <Image source={mirissa} style={styles.negombo_img} />
                <Text style={styles.negombo_text}>Mirissa Beach</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AntDesign name="enviroment" size={20} style={styles.location_icon}/>
                    <Text style={styles.negombo_text2} >Matara, Sri Lanka</Text>
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
        width: 220, 
        height: 200,
    },

    negombo_text:{
        marginTop:10,
        fontSize:20,
        fontWeight:600,
        color:colors.primary
    },

    location_icon:{
        color:colors.primary,
    },

    negombo_text2:{
        marginLeft:5,
        fontSize:16,
        color:colors.gray
    }
})

export default TripSchedule;