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

 function U_HomePage({navigation}){
  const images = [
    require('../image/slide1.jpg'),
    require('../image/slide2.jpg'),
    require('../image/slide3.jpg'),
    require('../image/slide4.jpg'),
    require('../image/slide5.jpg'),
  ];
     return(
      
        <View View style={styles.cantainer}>
          <ScrollView>
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
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('DietList')}>
          <Image
          source={require('../image/mydiet.jpg')}
          style={ {height:70, width:70}}/>
            <Text style={styles.btnTxt}>MY DIET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Exercise')}>
          <Image
          source={require('../image/exercise.jpg')}
          style={ {height:65, width:75,  borderRadius:70/2, marginTop:10}}/> 
            <Text style={styles.btnTxt}> EXERCISE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
          <Image
          source={require('../image/foodcalori.jpg')}
          style={ {height:80, width:75,  borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>FOOD CALORI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Messages')}>
          <Image
          source={require('../image/message.png')}
          style={ {height:65, width:65,  borderRadius:70/2, marginTop:10}}/>
            <Text style={styles.btnTxt}>MESSAGES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Settings')}>
            <Image
            source={require('../image/settings.jpg')}
            style={ {height:78, width:65,  borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>SETTINGS</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      
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
      width: 160,
      height: 105,
      padding: 10,
      marginTop: 15,
      top:20,
      left:25,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'purple',
      elevation: 30,
    },
    btn2: {
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: 'white',
      top:-340,
      width: 160,
      height: 105,
      padding: 10,
      bottom:365,
      marginTop: 15,
      left:195,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'purple',
      elevation: 30,
    },
    btnTxt: {
      color: 'limegreen',
      fontWeight: 'bold',
      fontSize: 18,
    },
    });

 export default U_HomePage;