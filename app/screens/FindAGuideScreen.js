import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
    Pressable,
    SafeAreaView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import guide1 from '../assets/guide1.png';

const FindAGuideScreen =({navigation, onPress}) =>{

    const [data,setTourGuide] = useState([]);
    // const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true)

    // const { onPress, title = 'Save' } = props;

    const url = "http://192.168.1.9:3000/newtour-guide"

 useEffect(()=>{
   fetch(url)
   .then(response =>
    response.json()
)

   .then((json)=>{
    setTourGuide(json.data)
    // console.log(json)
})
   .catch((error)=>console.log(error))
   .finally(()=> setLoading(false))
 },[])

    // const [Items, setItems] = useState([
    //     {id: 1, name: 'Sujeewa de Silva', description: 'My main aim in tour guiding is to let the guests have..'},
    //     {id: 2, name: 'Ravi Munasinghe', description: 'Experience in Geology and Gemology study...'},
    //     {id: 3, name: 'Stanley', description: 'I am working as a National Tour Guide since 2002 and speaks Italian and .....'},
    //     {id: 4, name: 'Sisira Kuruppu', description: 'I am a National Tourist Guide Lecturer, who .....'}
    // ])

    return(
        <SafeAreaView>
            
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="left" size={20} style={styles.back_btn} />
                </TouchableOpacity>
                <Text style={styles.text1}>Find a Tour Guide</Text>
                
            </View>

            {/* <TouchableOpacity style={styles.hire_btn} onPress={() => navigation.navigate("RegisterT")}>
                <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333', justifyContent:'center'}} >Add New Guide</Text>
                </TouchableOpacity> */}

            <ScrollView>
                <TouchableOpacity  onPress={() => navigation.navigate("TourGuideScreen")}>
                    
            {
                loading ? <Text>Loading ...</Text>:
                data.map((post, i)=>{
                    return(
                        <TouchableOpacity key={i} onPress={() => navigation.navigate("TourGuide")}>
                        <View style={styles.item} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            
                                <View>
                                    <Image source={guide1} style={styles.guide_img} />
                                </View>
                                <View style={styles.text_view}>
                                    <Text style={styles.text}>{post.name}</Text>
                                    <Text style={styles.text2}>{post.language}</Text>
                                    <Text style={styles.text2}>{post.phone}</Text>
                                </View>
                                
                            </View>
                        </View>
                        </TouchableOpacity>
                    )
                })
            }
            </TouchableOpacity>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor:'#FAF9F6',
        // alignItems:'center',
        // justifyContent:'center',
        flex:1
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


    text:{
        color:'#000000',
        fontSize:18,
        // fontWeight:600,
        marginLeft:5,
        
    },

    text2:{
        color:'#696969',
        fontSize:16,
        // fontWeight:400,
        marginLeft:5
    },

    text1: {
        color: '#000000',
        // fontWeight:800,
        marginRight:130,
        marginTop:35,
        fontSize:18,
        marginBottom:40
        
    },

    back_btn: {
        marginLeft:30,
        marginTop:37,
        color:colors.primary,
    },

    guide_img:{
        width: 110, 
        height: 110,

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

    text_view:{
        justifyContent:'center',
        alignItems:'flex-start',
       width:190
    },

    hire_btn:{
        // width:320,
        height:48,
        marginLeft:200,
        borderRadius:25,
        backgroundColor:colors.primary,
        justifyContent:'right',
        alignItems:'right',
        color:'white',
        fontSize:18,
        marginTop:0,
        // fontWeight:800,
        marginRight:20,
        padding:5
        
    },

    
    
});

export default FindAGuideScreen;
