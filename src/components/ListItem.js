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

const ListItem = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
          source={props.item.poster}
        />
        <View style={{marginBottom: 1, overflow: 'hidden'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            {props.item.title}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            {props.item.subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          paddingHorizontal: 15,
          backgroundColor: '#0aada8',
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 9,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {props.item.price || 'Play Now'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
