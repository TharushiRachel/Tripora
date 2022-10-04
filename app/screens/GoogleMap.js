import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Platform,SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";


const GoogleMap = ({ navigation }) => {
  
    return (
      // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
           <MapView style={StyleSheet.absoluteFill}
                  initialRegion={{
                    latitude: 6.906079,
                    longitude: 79.969628,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            />
         <View style={styles.bottomCard}>
                {/* <Text>Where are you going..?</Text> */}
                <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inpuStyle}>                  
                    <Text style={styles.data}>My Current location</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomCard: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 30,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24
    },
    inpuStyle: {
        backgroundColor: colors.white,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        width:300,
        justifyContent: 'center',
        marginTop: 16,
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    },
    data:{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      color:colors.black,
      fontWeight: 'bold',
  },
  back_btn: {
    marginLeft:-10,
    marginTop:16,
    color:colors.white,
}
});

export default GoogleMap;
