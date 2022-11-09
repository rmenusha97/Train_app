import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import firestore from '@react-native-firebase/firestore';




var el = [];
const HomePage = () => {
    const [data, setData = []] = useState('');

    async function loadData() {

        firestore()
            .collection('trains')
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    el.push(documentSnapshot.data());

                    setData(documentSnapshot.data());

                });
            });

    }

    if (data == []) { loadData() } else {
        el.map((i) => console.log(i["title"]))
    }
    console.log(data);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#3e2387' }}>
                <SafeAreaView >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 20,
                            alignItems: "center",
                            paddingHorizonatal: 10
                        }}>

                        <TouchableOpacity>
                            <Icon name="menu" size={40} color="#a2a2db" style={{ width: 27, marginLeft: 17 }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Alert.alert('Profile Pic Not Include') }}>
                            <Icon name="account-circle" size={55} color="#a2a2db" style={{ marginLeft: 235 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <View
                            style={{
                                borderColor: "#fff" ,
                                fontWeight: 'bold',
                                flexDirection: "row",
                                backgroundColor: "#ff",
                                borderRadius: 50,
                                alignItems: "center",
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                                marginTop: 30,
                                marginBottom: 30,
                                fontWeight: 'bold',
                              

                                //marginBottom:40,
                            }}>
                            <Icon name="search" size={33} color="#a2a2db" style={{ marginLeft: 0 }} />
                            <TextInput placeholder=" Find Your Train Here." placeholderTextColor="#fff" style={{ fontSize: 18, }} />
                        </View >
                    </TouchableOpacity>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginRight: 0, margiTop: 30 }}>
                        <TouchableOpacity onPress={() => { Alert.alert('Train List') }}>
                            <View
                                style={{
                                    width: 66,
                                    marginLeft: 10,
                                    height: 66,
                                    borderRadius: 50,
                                    backgroundColor: "#5facdb",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <Icon name="train" size={35} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Alert.alert('No any Message Available') }}>
                            <View style={{
                                width: 66,
                                marginLeft: 30,
                                height: 66,
                                borderRadius: 50,
                                backgroundColor: "#873e23",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Icon name="mail" size={35} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                width: 66,
                                marginLeft: 30,
                                height: 66,
                                borderRadius: 50,
                                backgroundColor: "#ffa06c",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Icon name="map" size={35} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                width: 66,
                                marginLeft: 30,
                                height: 66,
                                borderRadius: 50,
                                backgroundColor: "#588723",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Icon name="delete" size={35} color="#FFFFFF" />

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                width: 66,
                                marginLeft: 30,
                                height: 66,
                                borderRadius: 50,
                                backgroundColor: "#bb32fe",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Icon name="settings" size={30} color="#FFFFFF" />

                            </View>
                        </TouchableOpacity>
                    </ScrollView>


                    <ScrollView
                        vertical
                        showsverticalScrollIndicator={false}
                        style={{ marginRight: 0, marginTop: 30 }}>

                        {el.map((i) => (

                            <View style={{
                                backgroundColor: "#FFFFFF",
                                height: 200,
                                width: '100%',
                                alignItems: "center",
                                borderRadius: 15,
                                padding: 5,
                                marginBottom: 10,

                            }}>

                                <Image source={require('../assets/1.jpg')} style={{ width: "100%", height: 150, borderRadius: 10, }} />

                                <View style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            marginLeft: 10,
                                            color: "#21130d",
                                            textAlign: "center",
                                            //marginRight:30
                                        }}>
                                            {i['title']}
                                        </Text>
                                        <Text style={{
                                            fontSize: 10,
                                            color: "#21130d",
                                            textAlign: "center",
                                            fontWeight: 'bold',

                                        }}>
                                            {i['startPoint']} - {i["endPoint"]}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { global.data = i; navigation.navigate("BookingPageSelection") }}>
                                        <Image source={require('../assets/chair.png')} style={{ width: 40, height: 40, borderRadius: 10, }} />
                                    </TouchableOpacity>
                                </View>
                            </View>))}


                    </ScrollView>
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
        backgroundColor: 'black',

    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#a2a2db',
        borderRadius: 20,
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
    }


});

export default HomePage;