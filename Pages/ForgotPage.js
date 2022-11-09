import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,SafeAreaView,Text,StyleSheet,ScrollView, ImageBackground,TextInput, TouchableOpacity,Image} from 'react-native'




const ForgotPage= ()=>{
    const navigation=useNavigation();
    
        return(
            <SafeAreaView>
            <ImageBackground
            source={require("../assets/back.png")}
            style={{ width: "100%", height: "110%", }}
            >
            
                <ScrollView>
                <View style={{paddingTop:85,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        
                            <Image source={require('../assets/wp1.png')} style={{width:180,height:180,}}/>
                        
                    </View>
                

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Your Email Adddress" placeholderTextColor="#000" /> 
                </View>

                

                <View style= {styles.formInput}>
                    <TouchableOpacity>
                        <Text style={{color:"#fff", textAlign:'right',fontSize:16,fontWeight:'bold'}}></Text>
                    </TouchableOpacity>
                </View>
                <View style= {styles.formInput }>
                    <TouchableOpacity style={styles.defaultButton } >
                        <Text style={{color:"#ffffff", fontWeight:'bold',textAlign:'center',fontSize:20,fontWeight:'bold'}}>SEND RESET LINK</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                        <Text style={{paddingTop:10,color:"#ffffff", textAlign:'center',fontSize:16,fontWeight:'bold'}}>Already Have Account? Login</Text>
                    </TouchableOpacity>
                </View>
               
                

                 
                </ScrollView>
                
            
            </ImageBackground>
            </SafeAreaView>
            
        );
    }

const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    defaultBg:{
        width:'100%',
        height:130,
    },
    formInput:{
        marginTop:10,
        padding:5,
        
        

    },
    textInput:{
        padding:15,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7a",
        borderRadius:10,
    },
    defaultButton:{
        padding:15,
        backgroundColor: '#a2a2db',
        borderRadius:20,
    },


});

export default ForgotPage;