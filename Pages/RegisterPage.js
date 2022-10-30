import { useNavigation } from "@react-navigation/native";
import React, {  useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import firestore from '@react-native-firebase/firestore'; 


function createUser(firstname,lastname, email,phone, password,) {
   // console.log(firstname);
    firestore()
        .collection('customers')
        .add({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone:phone,
            password: password

        })
        .then(() => {
            console.log('customers added!');
        });
}


const RegisterPage = () => {

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredemail] = useState('');
    const [enteredPhoneNumber, setEnteredphonenumber] = useState('');
    const [enteredPassword, setEnteredpassword] = useState('');
    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../assets/back.png")}
                style={{ width: "100%", height: "110%", }}
            >

                <ScrollView>
                    <View style={{ paddingTop: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                        <Image source={require('../assets/add.png')} style={{ width: 180, height: 180, borderRadius: 1000, }} />

                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} value={enteredFirstName} onChangeText={text => setEnteredFirstName(text)} placeholder="Your First Name" />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} value={enteredLastName} onChangeText={text => setEnteredLastName(text)} placeholder="Your Last Name" />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} value={enteredEmail} onChangeText={text => setEnteredemail(text)} placeholder="Your Email Address" />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput}  value={enteredPhoneNumber} onChangeText={text => setEnteredphonenumber(text)} placeholder="Mobile Number" secureTextEntry={true} />
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput}  value={enteredPassword} onChangeText={text => setEnteredpassword(text)} placeholder="Password" secureTextEntry={true} />
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text style={{ color: "#fff", textAlign: 'right', fontSize: 16, fontWeight: 'bold' }}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => {
                            createUser(enteredFirstName,enteredLastName, enteredEmail,enteredPhoneNumber,enteredPassword);
                            navigation.navigate("Login")
                        }}>
                            <Text style={{ color: "1C1C1C", fontWeight: 'bold', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{ height: 1, backgroundColor: '#ddd', width: '100%' }}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                            <Text style={{ color: "#ffffff", textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Already Have Account? Login</Text>
                        </TouchableOpacity>
                    </View>



                </ScrollView>


            </ImageBackground>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    defaultBg: {
        width: '100%',
        height: 130,
    },
    formInput: {
        marginTop: 10,
        padding: 5,


    },
    textInput: {
        padding: 6,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "a7a7a7a",
        borderRadius: 10,
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#a2a2db',
        borderRadius: 20,
    },


});

export default RegisterPage;