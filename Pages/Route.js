import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPage from "./ForgotPage";
import Splash from "./Splash";
import BookingPage from "./BookingPageYalDevi";
import BookingPayment from "./BookingPayment";
import BookingPageSelection from "./BookingPageSelection";
import FirstClass from "./FirstClass";
import SecondClass from "./SecondClass";


const Stack = createNativeStackNavigator();

const AppRouter = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomePage}/>
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginPage}/>
          <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterPage}/>
          <Stack.Screen name="Forgot" options={{headerShown:false}} component={ForgotPage}/>
          <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
          <Stack.Screen name="Booking" options={{headerShown:false}} component={BookingPage}/>
          <Stack.Screen name="BookingPayment" options={{headerShown:false}} component={BookingPayment}/>
          <Stack.Screen name="BookingPageSelection" options={{headerShown:false}} component={BookingPageSelection}/>
          <Stack.Screen name="FirstClass" options={{headerShown:false}} component={FirstClass}/>
          <Stack.Screen name="SecondClass" options={{headerShown:false}} component={SecondClass}/>
        </Stack.Navigator>
      </NavigationContainer>

    )

}

export default AppRouter;