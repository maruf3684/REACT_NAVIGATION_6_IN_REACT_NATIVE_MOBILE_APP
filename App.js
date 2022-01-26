
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {
  return(
    <>
    <StatusBar
    animated={true}
    backgroundColor="#AD40AF"
    />
    <NavigationContainer>
       {/* <AuthStack/> */}
       <AppStack/>
    </NavigationContainer>
    </>
  ) 
};

export default App;
