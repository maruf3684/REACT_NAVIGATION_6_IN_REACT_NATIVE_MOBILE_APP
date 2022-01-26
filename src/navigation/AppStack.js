import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import Icons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';


const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerInactiveTintColor: '#333',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          fontFamily: 'Roboto-Medium',
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Auth"
        component={AuthStack}
        options={{
          headerShown: false,
          drawerItemStyle: { display:'none'},
          drawerIcon: ({color}) => (
            <Icons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};

export default AppStack;
