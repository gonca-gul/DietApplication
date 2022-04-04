import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import AntIcon from "react-native-vector-icons/AntDesign";
import {Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

function Exercises({navigation}){
    
       return(
        
          <View View style={styles.cantainer}>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('DietList')}>
            <Image
            source={require('../image/exercises/Vpipe.jpg')}
            style={ {height:100, width:70}}/>
              <Text style={styles.btnTxt}>Inverted V Pipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Exercise')}>
            <Image
            source={require('../image/exercises/leglift2.jpg')}
            style={ {height:70, width:90, marginBottom:10,}}/> 
              <Text style={styles.btnTxt}> W Leg Lifts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
            <Image
            source={require('../image/exercises/superman.jpg')}
            style={ {height:80, width:75,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Superman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
            <Image
            source={require('../image/exercises/plank.jpg')}
            style={ {height:60, width:90,marginBottom:10, marginTop:10}}/>
              <Text style={styles.btnTxt}>Plank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Messages')}>
            <Image
            source={require('../image/exercises/climber.jpg')}
            style={ {height:75, width:75,  marginTop:10, marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Mountier Climber</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Messages')}>
            <Image
            source={require('../image/exercises/crunch.jpg')}
            style={ {height:70, width:90,  marginTop:10 ,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Crunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Settings')}>
            <Image
              source={require('../image/exercises/squat.jpg')}
              style={ {height:80, width:82,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Squats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Settings')}>
            <Image
              source={require('../image/exercises/bridge.jpg')}
              style={ {height:85, width:85}}/>
              <Text style={styles.btnTxt}>Bridge</Text>
            </TouchableOpacity>
          </View>
       )
   }
const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: 'white',
  },
  btn: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 160,
    height: 135,
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
    bottom:580,
    backgroundColor: 'white',
    width: 160,
    height: 135,
    padding: 10,
    marginTop: 15,
    left:195,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'purple',
    elevation: 30,
    },
  btnTxt: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
  },
});
  
   export default Exercises;