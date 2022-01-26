import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../../public/assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../../public/assets/images/user-profile.jpg')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              marginLeft: 10,
            }}
          />
          <Text
            style={{color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Maruf Hasan
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Medium',
                marginRight: 8,
              }}>
              280 Credits
            </Text>
            <Icons name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          marginLeft: 5,
        }}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IonIcons name="share-social-outline" size={23} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              Share
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Auth')}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IonIcons name="exit-outline" size={23} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              Signout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
