import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    Pressable,
    Modal,
    Dimensions,
    TextInput,
    SafeAreaView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../config/colors";
import tourguide from '../assets/guideavatar.jpg'; 
import PrevSlideButton from "../components/PrevSlideButton";

const { width } = Dimensions.get("window");


const IMAGENAME = require("../assets/guide1.png"); 

const GTourGuide = ({navigation, onPress}) =>{
    // const [data,setTourGuide] = useState([]);
    // const [data,setData] = useState([]);
    // const [loading,setLoading] = useState(true)

    // const { onPress, title = 'Save' } = props;

    // const url = "http://localhost:3000/tour-guide/633168f0bacc220c49e10bc8"
    // const url = "http://127.0.0.1:1100/tour-guide"

//  useEffect(()=>{
//    fetch(url)
//    .then(response => response.json())
//    .then((json)=>setTourGuide(json))
//    .catch((error)=>console.log(error))
//    .finally(()=> setLoading(false))
//  },[])



     // This is to manage Modal State
     const [isModalVisible, setModalVisible] = useState(false);
  
     // This is to manage TextInput State
     const [inputValue, setInputValue] = useState("");
   
     // Create toggleModalVisibility function that will
     // Open and close modal upon button clicks.
     const toggleModalVisibility = () => {
         setModalVisible(!isModalVisible);
         navigation.navigate("TourGuide");
     };


 

    return(
        <SafeAreaView style={styles.container}>
        {/* <View style={styles.body}> */}

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Language")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Tour Guide</Text>
                
            </View> */}

<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Language")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text11}> Tour Guide</Text>               
      </View>  

            <Text style={styles.text6}>Recomended for you</Text>
  

            <View style={styles.box1}>
                <Image source={tourguide} style={styles.guide_img} />
                <Text style={styles.text2}>EG Upali</Text>
            </View>

            <Text style={styles.text3}>Account Info</Text>

            <Text style={styles.text4}>NAME</Text>
            <Text style={styles.text5}>E.G Upali</Text>

            <Text style={styles.text4}>EMAIL</Text>
            <Text style={styles.text5}>egupali@hotmail.com</Text>

            <Text style={styles.text4}>MOBILE</Text>
            <Text style={styles.text5}>077-7605809</Text>

            <Text style={styles.text4}>COST PER DAY</Text>
            <Text style={styles.text5}>$20 - $40</Text>




{/* <View style={styles.container}>
      {
        loading ? <Text>Loading ...</Text>:
        data.map((post)=>(
          <View >
            <View style={styles.box1}>
                <Image source={tourguide} style={styles.guide_img} />
                <Text style={styles.text2}>{post.username}</Text>
            </View>

            <Text style={styles.text3}>Account Info</Text>

            <Text style={styles.text4}>NAME</Text>
            <Text style={styles.text5}>{post.fullname}</Text>

            <Text style={styles.text4}>EMAIL</Text>
            <Text style={styles.text5}>{post.email}</Text>

            <Text style={styles.text4}>MOBILE</Text>
            <Text style={styles.text5}>{post.phone}</Text> */}

            {/* <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.name}</Text> */}
             {/* <Text style={{fontSize:15, color:'blue'}} >{post.email}</Text> */}
            {/* <Text style={{fontSize:15, color:'blue'}} >{post.phone}</Text> */}
          {/* </View>
        ))
      }
    </View> */}


            {/* <Button title="HIRE" style={styles.hire_btn}
             color="#54D2C4"
             borderRadius="25"
             onPress={() => Alert.alert('Button with adjusted color pressed')}/> */}

            {/* <Pressable style={styles.hire_btn} onPress={toggleModalVisibility}> Add a Comment</Pressable> */}
            <TouchableOpacity
          style={styles.hire_btn}
          onPress={toggleModalVisibility}
        >
          <Text style={styles.btnText}>Add a Comment</Text>
        </TouchableOpacity>


            <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <TextInput placeholder="Enter Comment" 
                                   value={inputValue} style={styles.textInput} 
                                   onChangeText={(value) => setInputValue(value)} />
  
                        <Button title="ADD" onPress={() => navigation.navigate("Dashboard")} />

                        
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
          style={styles.hire_btn}
          onPress={() => navigation.navigate("Comments3")}
        >
          <Text style={styles.btnText}>View Comments</Text>
        </TouchableOpacity>

        {/* </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    box1:{
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:20,
        height:200,
        padding:15,
        
    },

    text2:{
        textAlign: 'center',
        fontSize:24,
        // fontWeight:700
    },

   text3:{
        fontSize:24,
        // fontWeight:700,
        marginLeft:40,
        marginTop:25
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
        // fontWeight:800,
        marginRight:20
        
    },

    guide_img:{
        width: 150, 
        height: 150,

    },

    text6:{
        fontSize:16,
        // fontWeight:400,
        color:'#696969',
        marginLeft:20
    },

    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },

    //new
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
      },
      smallText: {
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingLeft: 5,
      },
      view1: {
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 2,
        borderColor: colors.primary,
      },
      text1: {
        color: "#black",
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: "center",
        fontWeight: "bold",
      },
      
      text11: {
        color: '#000000',
        // fontWeight:800,
        marginRight:230,
        marginTop:35,
        fontSize:18,
        marginBottom:40
    },
      text1Container: {
        alignItems: "center",
        justifyContent: "center",
      },
      picContainer: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      },
      button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "85%",
        marginVertical: 10
      },
      button2: {
        backgroundColor: colors.gray,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "85%",
        marginVertical: 10,
        marginTop:100
      },
      btnText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
      },
      btnText2: {
        color: colors.primary,
        fontSize: 13,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
      },
      view2: {
        marginTop: 20,
        height: "25%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 30,
        marginRight: 50,
        // borderTopWidth: 2,
        // borderColor: colors.primary,
      },
      view3: {
        height: "25%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderTopWidth: 2,
        borderColor: colors.primary,
      },
      view4: {
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        // borderTopWidth: 2,
        borderColor: colors.primary,
      },
      View3left: {
        flex: 1,
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
      },
      view3right: {
        flex: 1,
        width: "50%",
        alignItems: "flex-start",
        justifyContent: "center",
      },
      back_btn: {
        marginLeft:30,
        marginTop:37,
        color:colors.primary,
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
    },

    button: {
      backgroundColor: colors.primary,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      width: "85%",
      marginVertical: 10
    },
    
    
});

export default GTourGuide;
