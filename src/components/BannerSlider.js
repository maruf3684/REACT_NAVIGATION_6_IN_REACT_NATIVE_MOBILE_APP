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

const BannerSlider = props => {
  return (
    <View>
      <Image
        source={props.data.item.image}
        style={{height: 150, width: 300, borderRadius:10}}
      />
    </View>
  );
};

export default BannerSlider;
