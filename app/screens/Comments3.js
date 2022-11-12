import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    Platform,
    StyleSheet ,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    CheckBox,
    SafeAreaView

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../config/Buttons'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
// import { BottomSheetSlideInSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

const Comments3 = ({ navigation, onPress }) => {

    // const [data,setTourGuide] = useState([]);
    
    // const [loading,setLoading] = useState(true)

    
    // const url = "http://localhost:3000/comment"

//  useEffect(()=>{
//    fetch(url)
//    .then(response => response.json())
//    .then((json)=>setTourGuide(json))
//    .catch((error)=>console.log(error))
//    .finally(()=> setLoading(false))
//  },[])


return(
    <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("GTourGuide")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text11}> Reviews</Text>               
        </View> 

        <ScrollView>
                <TouchableOpacity  onPress={() => navigation.navigate("TourGuideScreen")}>
                    
            
                    
                        <TouchableOpacity onPress={() => navigation.navigate("GTourGuide")}>
                        <View style={styles.item} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            
                                {/* <View>
                                    <Image source={guide1} style={styles.guide_img} />
                                </View> */}
                                <View style={styles.text_view}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.text}>Zeinab F</Text>
                                        <Text style={styles.text1}>2022-11-07</Text>
                                                   
                                    </View> 
                                    
                                    <Text style={styles.text2}>Amazing trip with my group to a wonderful nature land and our tour guid so helpful and engaging, every day was more exciting and enjoyable than the other totally recommended.</Text>
                                    
                                </View>
                            </View>
                        </View>


                        <View style={styles.item} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            
                                <View style={styles.text_view}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.text}>Heba Sallam</Text>
                                        <Text style={styles.text1}>2022-10-20</Text>
                                                   
                                    </View> 
                                    
                                    <Text style={styles.text2}>Thank you again for all of your help planning our trip to Sri Lanka ! We are still talking about how it truly was a trip of a lifetime. </Text>
                                </View>
                                
                            </View>
                        </View>


                        <View style={styles.item} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            
                                <View style={styles.text_view}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.text}>Manuela S</Text>
                                        <Text style={styles.text1}>2022-10-13</Text>
                                                   
                                    </View> 
                                    
                                    <Text style={styles.text2}>Amazing pozitive personality, knowledgeable about the places and good organizer. Would highly recommend him to anyone interested to visit.</Text>
                                </View>
                                
                            </View>
                        </View>
                        </TouchableOpacity>
                    
                
            </TouchableOpacity>
            </ScrollView>   
    </SafeAreaView>
)

};

export default Comments3;

const styles = StyleSheet.create({
    text11: {
        color: '#000000',
        // fontWeight:800,
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

    text4:{
        fontSize:16,
        // fontWeight:600,
        marginLeft:40,
        marginTop:25
   },

   text5:{
        fontSize:16,
        // fontWeight:600,
        marginLeft:40,
        color:'#A9A9A9',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginRight:40
    },

    text:{
        color:colors.primary,
        fontSize:18,
        marginLeft:5,
        marginBottom:10,
        fontWeight: "bold",
        
    },

    text1:{
        color:'#696969',
        fontSize:16,
        marginLeft:5,
        
    },

    text2:{
        color:'#696969',
        fontSize:16,
        marginLeft:5,
        marginBottom:30
    },

    text_view:{
        flex:1,
        justifyContent:'center',
        // alignItems:'flex-start',
        width:300,
        marginLeft:20,
        marginRight:20,
        marginBottom:10
        
    },

    item:{
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'flex-start',
        margin:15,
        marginRight:20,
        marginLeft:20,
        padding:15,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

})