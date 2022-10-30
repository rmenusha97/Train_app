import { useNavigation } from "@react-navigation/native";
import React, { useState }  from "react";
import {View,SafeAreaView,Text,StyleSheet,ScrollView, ImageBackground,TextInput,Alert, TouchableOpacity,Image} from 'react-native'
import firestore from '@react-native-firebase/firestore';



const LoginPage=  ()=>{
    const [data, setData = []] = useState('');
    async function loadData (){
   
    firestore()
  .collection('customers')
  .get()
  .then(querySnapshot => {
    //console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      setData( documentSnapshot.data());
    });
  });
}
    loadData();
    const navigation=useNavigation();
   // const users = await firestore().collection('User').get();
   // console.log(users);
        return(
            <SafeAreaView>
            <ImageBackground
            source={require("../assets/back.png")}
            style={{ width: "100%", height: "110%", }}
            >
            
                <ScrollView>
                <View style={{paddingTop:30,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        
                            <Image source={require('../assets/Logo.png')} style={{width:180,height:180,borderRadius:1000,}}/>
                        
                    </View>
                <View >
                    <Text style={{fontSize:26,padding:10,fontWeight:'bold',textAlign:'center'}}>Book Your Ticket Here!</Text>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Your Email Address"/> 
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/> 
                </View>
                <View style= {styles.formInput}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Forgot")}}>
                        <Text style={{color:"#db2218", textAlign:'right',fontSize:16,fontWeight:'bold'}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style= {styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton} onPress={()=>{  navigation.navigate("Home")
                    //Alert.alert('Enter details to signin!')
                        
                         // Alert.alert('Enter details to signin!')
                        for(var i =0; i<data.length;i++){
                            if(data[i]['email']=="1234@gmail.com" && data[i]["pass"]=="134"){
                                
                                break;
                            }
                        }
                        
                       }}>
                        <Text style={{color:"#ffffff", fontWeight:'bold',textAlign:'center',fontSize:20,fontWeight:'bold'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formInput}>
                    <Text style={{color:"#fff",textAlign:'center'}}>Or</Text>
                </View>

                <View style={styles.formInput}>
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <TouchableOpacity style={{marginRight:10}} >
                            <Image source={require('../assets/google.png')} style={{width:30,height:30,borderRadius:1000,}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Image source={require('../assets/facebook.png')} style={{width:32,height:32,borderRadius:1000,}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formInput}>
                    <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
                        <Text style={{color:"#fff", textAlign:'center',fontSize:16,fontWeight:'bold'}}>New to here? Register</Text>
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

export default LoginPage;