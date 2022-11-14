import React from "react";
import {View,StyleSheet,Text,Pressable,Image} from "react-native";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';
import colors from "../config/colors";

const Article = (props) => {

    const goToSource = () =>{
        WebBrowser.openBrowserAsync(props.url);
    }

    return(
        
        <Pressable style={styles.container} onPress={goToSource}>
            
            {/* image */}
            <View>
            <Image source={{
                uri: props.urlToImage
            }}
            style={styles.image}
            />
            </View>

            <View style={styles.text_view}>


        {/*    title */}
            <Text style={styles.title}>{props.title}</Text>

        {/*    description */}
            <Text style={styles.description} numberOfLines={3}>
                {props.description}
            </Text>

            <View style={styles.data}>
                {/* <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text> */}
                <Text style={styles.data}>Date: <Text style={styles.data}>{moment(props.publishedAt).format("MMM Do YY") }</Text></Text>
            </View>

        {/*     source */}
            <View style={{marginTop: 10}}>
                <Text style={styles.data}>Source: <Text style={styles.data}>{props.sourceName}</Text></Text>
            </View>
            </View>
        </Pressable>
    )
}

export default Article;

const styles = StyleSheet.create({
    container:{
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
    image:{
        height: 100,
        width: 200,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40
    },
    title:{
        marginTop:0,
        fontSize:20,
        //fontWeight:600,
        color:colors.primary,
        marginLeft:10,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
        color:colors.black,
        fontWeight: 'bold',
        
    },

    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        marginLeft:5,
        fontSize:16,
        color:colors.gray,
        marginLeft:10
    },
    source:{
        color: "colors.gray",
        fontWeight: "bold",
        fontSize: 18
    },
    text_view:{
        justifyContent:'center',
        alignItems:'flex-start',
        width:190
    }
})
