import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import AntIcon from "react-native-vector-icons/AntDesign";
import {Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

function Exercises({navigation}){
    
       return(
        
          <View View style={styles.cantainer}>
            <ScrollView>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Butt_Kicks')}>
              <Image
                source={require('../image/exercises/butt-kicks.png')}
                style={ {height:70, width:90,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Butt Kicks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Double_Leg_Raise')}>
              <Image
                source={require('../image/exercises/double-leg-raise.jpg')}
                style={ {height:70, width:90, marginBottom:10, marginTop:10}}/> 
              <Text style={styles.btnTxt}> Double Leg Raise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Straight_Leg_Raise')}>
              <Image
                source={require('../image/exercises/straight-leg-raise.png')}
                style={ {height:80, width:75,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Straight Leg Raise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('Plank')}>
              <Image
                source={require('../image/exercises/plank.jpg')}
                style={ {height:60, width:90,marginBottom:10, marginTop:10}}/>
              <Text style={styles.btnTxt}>Plank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Climber')}>
              <Image
                source={require('../image/exercises/climber.jpg')}
                style={ {height:75, width:75,  marginBottom:5,}}/>
              <Text style={styles.btnTxt}>Mountier Climber</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Reverse_Crunch')}>
              <Image
                source={require('../image/exercises/reverse-crunch.jpg')}
                style={ {height:70, width:90,  marginTop:10 ,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Reverse Crunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Squat')}>
              <Image
                source={require('../image/exercises/squat.jpg')}
                style={ {height:80, width:82,marginBottom:10,}}/>
              <Text style={styles.btnTxt}>Squat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Cobra')}>
              <Image
                source={require('../image/exercises/cobra.png')}
                style={ {height:85, width:85}}/>
              <Text style={styles.btnTxt}>Cobra Stretch</Text>
            </TouchableOpacity>
            </ScrollView>
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