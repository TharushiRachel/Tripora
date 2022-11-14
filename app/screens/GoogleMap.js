import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Platform,SafeAreaView } from 'react-native';
import MapView, { Circle,Callout,Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import * as Location from 'expo-location';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LONGITUDE = 79.9729445;
const LATITUDE = 6.9146775;

const GoogleMap = ({ navigation }) => {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
    let address = await Location.reverseGeocodeAsync(location.coords);
    console.log(address);
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

    return (
      // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
           <MapView style={StyleSheet.absoluteFill}
                  initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                  }}
                  provider="google"
            >
              <Marker coordinate={{ 
                    latitude: LATITUDE,
                    longitude: LONGITUDE}} >

                    <Callout>
                      <Text>I'm here</Text>
                    </Callout>
              </Marker>
              <Circle center={{ 
                    latitude: LATITUDE,
                    longitude: LONGITUDE}} radius={1000} /> 
            </MapView>
         {/* <View style={styles.bottomCard}> */}
                {/* <Text>Where are you going..?</Text> */}
                {/* <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inpuStyle}>                  
                    <Text style={styles.data}>My Current location</Text>
                </TouchableOpacity> */}
            {/* </View> */}
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
        width:350,
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
