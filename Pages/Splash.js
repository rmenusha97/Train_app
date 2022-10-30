import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {View,SafeAreaView,Text,StyleSheet, ImageBackground,Image} from 'react-native'




const Splash= ()=>{

    const [isGo,setIsGo]=useState(true);
    const Navigation = useNavigation();

    useEffect(()=>{
        if(isGo==true){
            setTimeout(()=>{
                Navigation.navigate("Login");
                setIsGo(false);
            },2000)
            
        }
    }

    );


        return(
            <SafeAreaView>
            <ImageBackground
            source={require("../assets/back.png")}
            style={{ width: "100%", height: "110%", }}
            >
            
               
                <View style={{paddingTop:230,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        
                            <Image source={require('../assets/Logo.png')} style={{width:200,height:210,borderRadius:1000,}}/>
                            
                        
                </View>
                <View>
                <Text style={{color:"#fff",fontSize:60,fontFamily:'times',textAlign:"center",fontWeight:'bold'}}>Train Booking</Text>
                </View>
        
              
                 
          
                
            
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
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"a7a7a7a",
        borderRadius:10,
    },
    defaultButton:{
        padding:15,
        backgroundColor: '#a2a2db',
        borderRadius:20,
    },


});

export default Splash;