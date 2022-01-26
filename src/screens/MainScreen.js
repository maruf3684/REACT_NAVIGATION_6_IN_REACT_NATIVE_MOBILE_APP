import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
  } from 'react-native';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import GamingImg from '../../public/assets/gaming.svg';

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
    <View style={{marginTop:20}}>
      <Text
        style={{
          fontSize: 30,
          textTransform: 'uppercase',
          fontFamily: 'Inter-Bold',
          color:'#AD40AF'
        }}>
        Gameon
      </Text>
    </View>
   
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <GamingImg
      width={300}
      height={300}
      style={{transform: [{rotate: '-15deg'}]}}
    />

   </View>

    <TouchableOpacity
     onPress={()=>navigation.navigate('Login')}
      style={{
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        marginBottom:50
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          fontFamily: 'Roboto-MediumItalic',
        }}>
        Let's Began
      </Text>
      <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
    </TouchableOpacity>
  </SafeAreaView>
  );
};

export default MainScreen;
