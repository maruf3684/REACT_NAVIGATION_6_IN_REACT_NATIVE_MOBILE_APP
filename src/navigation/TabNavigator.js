import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import Favouritescreen from '../screens/Favouritescreen';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import GameDetails from '../screens/GameDetails';

//for homepage
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={({route}) => {
          return {title: route.params?.title};
        }}
      />
    </Stack.Navigator>
  );
};

//

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <IonIcons name="home-outline" size={22} color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <FeatherIcons
              name="shopping-bag"
              size={22}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favouritescreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <IonIcons
              name="heart-outline"
              size={22}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'No Nested Route';
  if (routeName === 'GameDetails') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
