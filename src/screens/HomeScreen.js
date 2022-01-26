import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {sliderData, freeGames, paidGames} from '../model/data';
import {windowWidth} from '../utils/Dimensions';
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

const HomeScreen = ({navigation}) => {
  const [active, Setactive] = useState(1);

  const renderBanner = props => {
    return <BannerSlider data={props} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{padding: 20}}>
        {/* hallow */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Text
            style={{fontSize: 18, fontFamily: 'Roboto-Medium', marginLeft: 1,color: '#0aada8'}}>
            Maruf Hasan
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../public/assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        {/* search */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 0,
          }}>
          <Icons
            name="search"
            size={20}
            style={{marginRight: 5}}
            color="#C6C6C6"
          />
          <TextInput placeholder="Search" />
        </View>

        {/* see all */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            marginTop: 10,
          }}>
          <Text
            style={{fontSize: 18, fontFamily: 'Roboto-Medium', marginLeft: 3}}>
            Upcomming Games
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#0aada8'}}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* carousel */}
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth-49}
          itemWidth={290}
          loop={true}
        />
        </View>
 

        {/* switch */}
        <View style={{marginTop: 15}}>
          <CustomSwitch active={active} Setactive={Setactive} />
        </View>

        {/* list item */}
        <View style={{marginTop: 15}}>
          {active === 1
            ? freeGames.map((item, index) => (
                <ListItem
                  item={item}
                  key={index}
                  onPress={() =>
                    navigation.navigate('GameDetails', {
                      title: item.title,
                      id: item.id,
                    })
                  }
                />
              ))
            : paidGames.map((item, index) => (
                <ListItem
                  item={item}
                  key={index}
                  onPress={() =>
                    navigation.navigate('GameDetails', {
                      title: item.title,
                      id: item.id,
                    })
                  }
                />
              ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
