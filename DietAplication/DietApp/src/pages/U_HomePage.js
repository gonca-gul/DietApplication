 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import type {Node} from 'react';
 import AntIcon from "react-native-vector-icons/AntDesign";
 import {Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
 import SearchBar from 'react-native-search-bar';
 import Icon from 'react-native-ionicons'
 import { SliderBox } from "react-native-image-slider-box";
 import ProgressCircle from 'react-native-progress-circle';

 function U_HomePage(){
  const images = [
    require('../image/slide1.jpg'),
    require('../image/slide2.jpg'),
    require('../image/slide3.jpg'),
    require('../image/slide4.jpg'),
    require('../image/slide5.jpg'),
  ];
     return(
      <ScrollView>
        <View View style={styles.cantainer}>
        <SearchBar
          placeholder="Find Your Dietitian"
          width={360}
          marginTop={15}
          left={20}
          height={50}
          marginBottom={15}/>
        <SliderBox images={images}
          sliderBoxHeight={200}
          autoplay
          circleLoop
          ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
          imageLoadingColor="#2196F3"
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 5,}} />
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
          <Image
          source={require('../image/mydiet.jpg')}
          style={ {height:70, width:70, right:70}}/>
            <Text style={styles.btnTxt}>MY DIET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('ClientList')}>
          <Image
          source={require('../image/exercise.jpg')}
          style={ {height:65, width:75, right:60, borderRadius:70/2}}/> 
            <Text style={styles.btnTxt}> EXERCISE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Settings')}>
          <Image
          source={require('../image/foodcalori.jpg')}
          style={ {height:85, width:75, right:50, borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>FOOD CALORI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Messages')}>
          <Image
          source={require('../image/message.png')}
          style={ {height:65, width:65, right:60, borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>MESSAGES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Messages')}>
            <Image
            source={require('../image/settings.jpg')}
            style={ {height:85, width:65, right:60, borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>SETTINGS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
     )
 }
 const styles = StyleSheet.create({
    cantainer: {
      flex:1,
      backgroundColor: 'white',
    },
    btn: {
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: 'white',
      width: 340,
      height: 85,
      padding: 10,
      marginTop: 15,
      left:25,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'orchid',
      elevation: 30,
    },
    btnTxt: {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 20,
    },
    });

 export default U_HomePage;