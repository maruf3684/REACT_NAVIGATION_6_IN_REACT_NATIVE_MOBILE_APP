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

const CustomSwitch = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#e4e4e4',
        height: 44,
        borderRadius: 20,
        borderColor: 'AD40AF',
      }}>
      <TouchableOpacity
        onPress={() => props.Setactive(1)}
        style={{
          flex: 1,
          backgroundColor: props.active == 1 ? '#AD40AF' : '#e4e4e4',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: props.active == 1 ?  'white' : '#AD40AF',
          }}>
          Free to play
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.Setactive(2)}
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: props.active == 2 ? '#AD40AF' : '#e4e4e4',

          alignItems: 'center',
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: props.active == 2 ? 'white' : '#AD40AF',
          }}>
          Paid Games
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
