import React from 'react';
import { 
    View, 
    Text, 
    Platform,
    StyleSheet ,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView 

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../config/Buttons'


const SignInScreen = ({ navigation, onPress }) => {

    return (
    <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
      <View style={styles.container}>
  
  
        <View style={styles.header}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:30,color:'#fff'}} >Welcome Back !</Text>
                    <Image source={require('../assets/waving_hand.png')} style={{width:30,height:30}}  />
             </View>  
        </View>
              
        <View style={styles.footer}>
        <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%'}} >
            <View style={{flexDirection:'column',paddingTop:20}} >
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#818181"/>
                        <TextInput style={styles.input} placeholder="  Enter Email" placeholderTextColor="#818181" />

                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput style={styles.input} placeholder="  Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                <View style={{width:'95%',marginBottom:10}} >
                        <Text style={{fontSize:17,fontFamily:'OpenSans-SemiBold',
                    color:'#818181',alignSelf:'flex-end',paddingTop:10}} >Forgot Password?</Text>
                </View>
                <Buttons  btn_text={"Login"}/>     
            </View> 
            <div>
            <View style={{flexDirection:'column',width:'95%'}} >
            <Text style={{fontFamily:"OpenSans-Bold",textAlign:'center',color:'#818181',fontSize:20}} >Or</Text>
                    
                    <TouchableOpacity onPress={()=>console.log("google login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/google_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium'}} >Sign in with Google </Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={()=>console.log("facebook login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/facebook_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium'}} >Sign in with Facebook </Text>
                    </TouchableOpacity>
            </View>
            <br></br>
            </div> 
            
            <div>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
                <Text style={{fontFamily:'OpenSans-Medium',fontSize:17,color:'#818181'}} >Don't have a account? </Text>
                <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Registration")}>
                <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333'}} >Sign Up</Text>
                </TouchableOpacity>
                
            </View> 

            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("RegisterT")}>
                <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333', justifyContent:'center'}} >Register as a Tour Guide</Text>
                </TouchableOpacity>
            </div>
                     
        </View>     
        </View>      
      </View>
    </ScrollView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        fontWeight: 'bold',
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
  });
