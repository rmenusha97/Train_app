import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View,SafeAreaView,Text,StyleSheet,ScrollView, TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';








const BookingPageEllaOdisy= ()=>{
    const navigation=useNavigation();
    
        return(
            <ScrollView>
                <View style={{flex:1, backgroundColor:'#3e2387'}}>
                    <SafeAreaView >
                    <View>
            {/* Train Detail */}
            <View style={{ marginTop: 15, marginBottom: 5, marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', justifyContent: 'space-between', width: '90%', padding: 5, backgroundColor: '#3e2387' }}>
                <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 25, fontWeight: 'bold',textAlign:'center' , color:"#FFF",}}>The Ella Odyssey </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: 20,fontWeight: 'bold', color:"#FFF",marginLeft:10  }}>ArrivalTime</Text>
                    <Icon name="train" size={50} color="#FFFFFF"  />
                    <Text style={{  marginTop: 'auto', marginBottom: 'auto', fontSize: 20,fontWeight: 'bold', color:"#FFF", }}>DepartureTime</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 1, paddingLeft: 30, paddingRight: 30 }}>
                    <Text style={{ fontSize: 20,color:"#FFFFFF" }}>06.00</Text>
                    <Text style={{ fontSize: 20 , color:"#FFFFFF" }}>14.00</Text>
                </View>
            </View>
            {/* Seats */}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5, marginBottom: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <Image source={require('../assets/TrainSeat1.png')} style={{width:20,height:20,borderRadius:1000 }}/>
                </View>
                <Text style={{ marginLeft: 10,color:"#FFFFFF" }}>Available</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <Icon name="lock" size={20} color="brown"  />
                </View>
                <Text style={{ marginLeft: 10 ,color:"#FFFFFF"}}>Already Booked</Text>
            </View>
        </View>
            </SafeAreaView>
            </View>




            
             
        <View style={{flex:1, backgroundColor:'#3e2387', marginTop:30}}>
            <SafeAreaView >
                    

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 5 }}>
        
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>01</Text>
                </TouchableOpacity>
                </View>
                
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>02</Text>
                </TouchableOpacity>
                </View>
            </View>
            

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Image source={require('../assets/TrainSeat1.png')} style={{width:20,height:20,borderRadius:1000 }}/>
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>03</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>04</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 25 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>05</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>06</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>07</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>08</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>09</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>10</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>11</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Image source={require('../assets/TrainSeat1.png')} style={{width:20,height:20,borderRadius:1000 }}/>
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>12</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 25 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>13</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>14</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>15</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>16</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>17</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>18</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>19</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>20</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 25 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>21</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>22</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>23</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>24</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Image source={require('../assets/TrainSeat1.png')} style={{width:20,height:20,borderRadius:1000 }}/>
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>25</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>26</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>27</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Image source={require('../assets/TrainSeat1.png')} style={{width:20,height:20,borderRadius:1000 }}/>
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>28</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 25 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>29</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30,marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>30</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer,  { width: 30, height: 30 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>31</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.SeatContainer,  { width: 30, height: 30, marginLeft: 20 }]}>
                <TouchableOpacity>
                <Icon name="lock" size={20} color="brown"  />
                <Text style={{ marginTop: 5, color:"#FFFFFF", fontSize:10, textAlign: 'center'}}>32</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
        



            <View style={{marginTop:24,marginBottom:24,alignItems:'center',}}>
        <TouchableOpacity style={styles.defaultButton}  onPress={()=>{navigation.navigate("BookingPayment")}}>
                        <Text style={{color:"1C1C1C", fontWeight:'bold',textAlign:'center',fontSize:18,fontWeight:'bold'}}>Book Now</Text>
                    </TouchableOpacity>

                    </View> 
            </SafeAreaView>
            </View> 
            </ScrollView>
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
        backgroundColor: '#e28743',
        borderRadius:100,
        width: 155,
        height: 55,
    },
    menueContinerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    searchInputContainer:{
        height:50,
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius:10,

    },
    SeatContainer: {
        backgroundColor: "#a2a2db",
        padding: 5,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    modalContainer:{
        width: '80%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius: 20,
        elevation:20,

    },

  
});

export default BookingPageEllaOdisy;