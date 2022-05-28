 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import type {Node} from 'react';
 import AntIcon from "react-native-vector-icons/AntDesign";
 import {Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, RefreshControl} from 'react-native';
 import Icon from 'react-native-ionicons'
 import { SliderBox } from "react-native-image-slider-box";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import axios from 'axios';

 const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

 function U_HomePage({navigation}){
  console.disableYellowBox = true;
  const images = [
    require('../image/sliders/slide1.jpg'),
    require('../image/sliders/slide2.jpg'),
    require('../image/sliders/slide3.jpg'),
    require('../image/sliders/slide4.jpg'),
    require('../image/sliders/slide5.jpg'),
  ];
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    messages();
    
   });
  const [number, setNumber] = React.useState( );
  const messages = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios
    .get('http://10.0.2.2:5000/api/questions/NumberOfAnswer',{
      headers: {Authorization : 'Bearer '  +  data,
      },
    })
    .then(function (response) {
      setNumber(response.data);
      //console.log(response.data);
    })
  };
  
     return(
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}/>}>
        <View View style={styles.cantainer}>
        <SliderBox images={images}
          sliderBoxHeight={200}
          autoplay
          circleLoop
          ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 30}}
          imageLoadingColor="#2196F3"
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 5,}} />
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('MyDiet')}>
          <Image
          source={require('../image/mydiet.jpg')}
          style={ {height:70, width:70}}/>
            <Text style={styles.btnTxt}>MY DIET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Exercises')}>
          <Image
          source={require('../image/exercises/exercise.jpg')}
          style={ {height:65, width:75,  borderRadius:70/2, marginTop:10}}/> 
            <Text style={styles.btnTxt}> EXERCISE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
          <Image
          source={require('../image/foodcalori.jpg')}
          style={ {height:80, width:75,  borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>FOOD CALORI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Dietitians')}>
          <Image
          source={require('../image/dietitians.png')}
          style={ {height:65, width:75,  borderRadius:70/2, marginTop:10}}/>
            <Text style={styles.btnTxt}>DIETITIANS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Messages')}>
          <Image
          source={require('../image/message.png')}
          style={ {height:65, width:65,  borderRadius:70/2, marginTop:10}}/>
            <Text style={styles.btnTxt}>MESSAGES <Text style={styles.notifBx}> ({number}) </Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Settings')}>
            <Image
            source={require('../image/settings.jpg')}
            style={ {height:78, width:65,  borderRadius:70/2}}/>
            <Text style={styles.btnTxt}>SETTINGS</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
 
     )
 }
 const styles = StyleSheet.create({
    cantainer: {
      flex:1,
      height:670,
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
      left:35,
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
      left:205,
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
    notifBx:{
      alignSelf:"flex-end",
      fontFamily: 'sans-serif-condensed',
      //bottom:10,
      //bottom:5,
      fontSize:18,
      fontWeight:"bold",
      color:"darkgreen",
      },
    });

 export default U_HomePage;