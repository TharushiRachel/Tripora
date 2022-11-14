import React, { useState } from 'react';
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
import { RadioButton } from 'react-native-paper';


const Language = ({ navigation, onPress }) => {

    const [checked, setChecked] = React.useState('first');
    

    return (
    // <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
    //   <View style={styles.container}>
  
    //             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //                 <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
    //                     <AntDesign name="left" size={20} style={styles.back_btn} />
    //                 </TouchableOpacity>
    //                 <Text style={styles.text1}>Select Your Language</Text>
                
    //             </View>

    //             <View style={styles.topView4}>
    //                 <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("TourGuide")}>
    //                     <Text style={styles.bottomText}>English</Text>
    //                 </TouchableOpacity>
    //             </View>

    //             <View style={styles.topView4}>
    //                 <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("FTourGuide")}>
    //                     <Text style={styles.bottomText}>French</Text>
    //                 </TouchableOpacity>
    //             </View>

    //             <View style={styles.topView4}>
    //                 <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("GTourGuide")}>
    //                     <Text style={styles.bottomText}>German</Text>
    //                 </TouchableOpacity>
    //             </View>


    //             <View style={styles.topView5}>
    //                 <TouchableOpacity style={styles.bottomContainer1} onPress={() => navigation.navigate("FindAGuide")}>
    //                     <Text style={styles.bottomText}>View all Tour Guides</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View> 
            
                    
    // </ScrollView>

    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dashboard")}>
            <AntDesign name="left" size={20} style={styles.back_btn}/>
                </TouchableOpacity>
                <Text style={styles.text11}> Select Language</Text>               
      </View>   
      <View style={styles.view1}>
        <View style={styles.textContainer}>
          
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TourGuide")}
        >
          <Text style={styles.btnText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FTourGuide")}
        >
          <Text style={styles.btnText}>French</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GTourGuide")}
        >
          <Text style={styles.btnText}>German</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("FindAGuide")}
        >
          <Text style={styles.btnText2}>Find A Guide</Text>
        </TouchableOpacity>
      </View>

      
      </SafeAreaView>
    );

   
};

export default Language;

const styles = StyleSheet.create({
//     container: {
//       flex: 1 
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 20,
//         paddingBottom: 50
//     },
//     footer: {
//         flex: 2,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 30
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     text_footer: {
//         fontWeight: 'bold',
//         color: '#05375a',
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     actionError: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#FF0000',
//         paddingBottom: 5
//     },
//     textInput: {
//         width: 338,
//         height: 48,
//         backgroundColor: '#FFFFFF',
//         margin: 10,
//         padding: 8,
//         color: 'black',
//         borderRadius: 25,
//         fontSize: 18,
//         fontWeight: '400',
//     },
//     errorMsg: {
//         color: '#FF0000',
//         fontSize: 14,
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     social_img:{
//         width:25,
//         height:25,
//         marginLeft:15
//     },

//     topView4:{
//       justifyContent:'center',
//       width:'95%',
//       backgroundColor:'#009387',
//       height:50,
//       marginBottom:30,
//       borderRadius:10,
//       fontSize:15,
//       letterSpacing:1.5,
//       textAlign:'center',
//       position:'relative',
//       fontFamily:'OpenSans-SemiBold',
//       color:'#fff'
//   },

//   topView5:{
//     justifyContent:'center',
//     width:'95%',
//     backgroundColor:'#009387',
//     height:50,
//     marginTop:300,
//     borderRadius:10,
//     fontSize:15,
//     letterSpacing:1.5,
//     textAlign:'center',
//     position:'relative',
//     fontFamily:'OpenSans-SemiBold',
//     color:'#fff'
// },

//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   checkbox: {
//     alignSelf: "center",
//   },
//   label: {
//     margin: 8,
//   },


//   text1: {
//     color: '#000000',
//     fontWeight:800,
//     marginRight:100,
//     marginTop:35,
//     fontSize:18,
//     marginBottom:40
// },
// back_btn: {
//     marginLeft:30,
//     marginTop:37,
//     color:colors.primary,
// },



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

  });
