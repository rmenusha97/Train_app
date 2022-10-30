import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import ForgotPage from './Pages/ForgotPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRouter from './Pages/Route';

const App = () => {
 // const [count, setCount] = useState(0);

  return (
    <AppRouter/>
  );
};

export default App;

