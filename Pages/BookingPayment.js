import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, } from 'react-native'

import firestore from '@react-native-firebase/firestore'; 






const BookingPayment = () => {
    const navigation = useNavigation();
    const [data, setData = []] = useState('');
    async function pay(){
        console.log(data['num'])
        firestore()
        .collection('trains').doc(global.data["id"])
        .update({
            bookedSeatsFirstClass: data['num'],
           

        })
        .then(() => {
            console.log('customers added!');
        });
    }

    async function loadData() {

        firestore()
            .collection('temp')
            .get()
            .then(querySnapshot => {
            

                querySnapshot.forEach(documentSnapshot => {
                  
                    console.log(documentSnapshot.data());
                    setData(documentSnapshot.data());

                });
            });

    }
    if(data==[])
    {loadData();}
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#3e2387' }}>
                <SafeAreaView >
                    <View>
                        {/* Train Detail */}
                        <View style={{ marginTop: 35, marginBottom: 15, marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', justifyContent: 'space-between', width: '90%', padding: 5, backgroundColor: '#3e2387' }}>
                            <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 45, fontWeight: 'bold', textAlign: 'center', color: "#FFF", }}>Grab & Pay for your Seat </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </View>

            <View style={{ flex: 1, backgroundColor: '#3e2387', marginTop: 30 }}>
                <SafeAreaView >


                    <ScrollView>


                        <View style={styles.formInput}>
                            <TextInput style={styles.numberInput} placeholder="Enter Your Seat Number: " keyboardType="numeric" />
                        </View>
                        <View style={styles.formInput}>
                            <TextInput style={styles.textInput} placeholder="Cardholder Name:" />
                        </View>
                        <View style={styles.formInput}>
                            <TextInput style={styles.textInput} placeholder="Email Address:" />
                        </View>

                        <View style={styles.formInput}>
                            <TextInput style={styles.textInput} placeholder="Card Number: " keyboardType="numeric" />
                        </View>
                        <View style={styles.formInput}>
                            <TextInput style={styles.textInput} placeholder="Expiration Date: " keyboardType="numeric" />
                        </View>

                        <View style={styles.formInput}>
                            <TextInput style={styles.textInput} placeholder="Security Code: " keyboardType="numeric" />
                        </View>





                    </ScrollView>
                    <View style={{ marginTop: 24, marginBottom: 24, alignItems: 'center', }}>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => {pay(); navigation.navigate("BookingPayment") }}>
                            <Text style={{ color: "#ffffff", fontWeight: 'bold', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Pay Now</Text>
                            <Text style={{ color: "#ffffff", fontWeight: 'bold', textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginBottom: 10 }}>Rs. {data["num"] * global.data["firstClass"]["price"]}</Text>
                        </TouchableOpacity>

                    </View>

                </SafeAreaView>
            </View>
        </ScrollView>
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

        marginTop: 15,

        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 10,
        fontWeight: 'bold',
        color: "black",
        backgroundColor: 'white',

    },
    numberInput: {

        marginTop: 25,
        marginBottom: 25,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 10,
        fontWeight: 'bold',
        color: "black",
        backgroundColor: 'white',

    },
    defaultButton: {

        padding: 7,
        backgroundColor: '#e28743',
        borderRadius: 100,
        width: 155,
        height: 55,
    },
    menueContinerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    searchInputContainer: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,

    },
    SeatContainer: {
        backgroundColor: "#a2a2db",
        padding: 5,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,

    },


});

export default BookingPayment;