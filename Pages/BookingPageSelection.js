import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';







const BookingPage = () => {
    const navigation = useNavigation();
    console.log(global.data["firstClass"]["seats"]);
    return (
        <View style={{ flex: 1, backgroundColor: '#3e2387', }}>
            <View >
                <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 45, fontWeight: 'bold',marginTop:30, textAlign: 'center', color: "#FFF", }}>{global.data['title' ]}
                <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 45, fontWeight: 'bold',marginTop:30, textAlign: 'center', color: "#FFF", }}> Train</Text></Text>
                <Text style={{ fontSize: 40, padding: 10, fontWeight: 'italic', textAlign: 'center', color: "#ffffff", marginTop: 2 }}>Select Your Class Here!</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30, }}>
                <TouchableOpacity style={styles.defaultButton} onPress={() => {
                    if (global.data["bookedSeatsFirstClass"] < global.data["firstClass"]["seats"]) {
                        navigation.navigate("FirstClass", {
                            paramKey: 'Some Param from previous Screen',
                        })
                    } else {

                    }
                }}>
                    <Text style={{ color: "#ffffff", fontWeight: 'bold', textAlign: 'center', fontSize: 20, fontWeight: 'bold', }}>First Class</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
                <TouchableOpacity style={styles.defaultButton} onPress={() => { if (global.data["bookedSeatsSecondClass"] < global.data["secondClass"]["seats"]) { navigation.navigate("SecondClass") } else { } }}>
                    <Text style={{ color: "#ffffff", fontWeight: 'bold', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Second Class</Text>
                </TouchableOpacity>
                
            </View>
            <View>
            <Text style={{ marginTop:30, fontSize: 30, fontWeight: 'bold', color: "#FFF", marginLeft: 5 }}>ArrivalTime :-   
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>{global.data[ 'startTime']}</Text></Text>
            </View>
            <View>
            <Text style={{ marginTop:30, fontSize: 30, fontWeight: 'bold', color: "#FFF", marginLeft: 5  }}>DepartureTime:-
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>{global.data[ 'endTime']}</Text></Text>
            </View>
        </View>


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
        marginTop: 50,
        marginBottom: 50,
        padding: 20,
    },

    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "a7a7a7a",
        borderRadius: 10,

        marginTop: 20
    },
    defaultButton: {

        padding: 15,
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

export default BookingPage;