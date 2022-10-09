import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList,TouchableOpacity,TextInput} from "react-native";
import Article from "./NewsAlerts";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import { Feather, Entypo } from "@expo/vector-icons"; 

// function HomeScreen(navigation, onPress){
const NewsScreen = ({navigation, onPress,clicked, searchPhrase, setSearchPhrase}) => {
    const [items,setArticles] = useState([]);
    // const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true)

 const url = "http://localhost:3000/"

 useEffect(()=>{
   fetch(url)
   .then(response => response.json())
   .then((json)=>setArticles(json))
   .catch((error)=>console.log(error))
   .finally(()=> setLoading(false))
 },[])

    return(
        <SafeAreaView style={styles.container}>
             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("CategoryNews")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Alerts!!</Text>               
            </View>      
            

            <Text style={styles.text2}>News Notifications</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}></View>
                    {
                loading ? <Text>Loading ...</Text>:
                items.map((post)=>(
                    <Article
                    urlToImage = {post.image}
                    title = {post.title}
                    // description = {post.description}
                    //author = {post.author}
                    publishedAt = {post.date}
                    sourceName = {post.source}
                    url={post.source}
                />
                ))
            }
          

       
        </SafeAreaView>
    )
}

export default NewsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    body : {
        backgroundColor:'#FAF9F6',
        // alignItems:'center',
        // justifyContent:'center',
        flex:1
    },

    text1: {
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

    text2:{
        fontSize:16,
        // fontWeight:400,
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
        // fontWeight:600,
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
    },
    container2: {
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    
      },
})