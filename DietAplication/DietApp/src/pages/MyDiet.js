import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect} from "react";
import moment from 'moment';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,Dimensions   } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const screenWidth = Dimensions.get("window").width;

function MyDiet({navigation}) {
      
  const [breakfast, setBreakfast] = React.useState();
  const [midMorning, setMidmorning] = React.useState();
  const [lunch, setLunch] = React.useState();
  const [eveningSnack, setEveningSnack] = React.useState();
  const [dinner, setDinner] = React.useState();
  const [snack, setSnack] = React.useState();
  const [note, setNote] = React.useState();
  const [totalCalorie, setTotalCal] = React.useState();

  React.useEffect(() => {
    myDiet();
   }, []);

  const myDiet = async () => {
      const data = await AsyncStorage.getItem('token');
      await axios
      .get('http://10.0.2.2:5000/api/dietLists/myList',{
        headers: {Authorization : 'Bearer '  +  data,
         },
        })
      .then(async response => {
        setBreakfast(response.data.breakfast);
        setMidmorning(response.data.midMorning);
        setLunch(response.data.lunch);
        setEveningSnack(response.data.eveningSnack);
        setDinner(response.data.dinner);
        setSnack(response.data.snack);
        setTotalCal(response.data.totalCalorie);
        setNote(response.data.note);
        console.log(response.data);
      })
        .catch(function (error) { 
        alert(error);
      })
        .then(function () {
      })
  }; 
return (   
  <ScrollView>
    <View View style={styles.cantainer}>
        <LinearGradient
        start={{x: 0.1, y: 0.20}} 
        end={{x: 0.3, y: 1.0}}
        locations={[0.0,0.0,0.4]}
        colors={['limegreen', 'ivory' ,'white' /* lightsalmon */ ]}
        style={styles.linearGradient}>
            <View style={styles.calBox}>
                <Text style={styles.topTxt}>Weakly Calorie Intake</Text>
                <Text style={styles.caloriInput}>{totalCalorie}</Text>
            </View>
            <View style={styles.mealViews}>
                <Text style={styles.titles}>Breakfast</Text>
                <FontAwesome5 name="egg" size={25} color="mediumvioletred" style={{bottom:27,left:130}}  />
                <Text style={styles.caloriInput}>{breakfast}</Text>
            </View>
            <View style={styles.mealViews}>
                <Text style={styles.titles}>First Snack</Text>
                <MaterialCommunityIcons name="tea" size={26} color="mediumvioletred" style={{bottom:27,left:140}}  />
                <Text style={styles.caloriInput}>{midMorning}</Text>
            </View>
            <View style={styles.mealViews}>
                <Text style={styles.titles}>Lunch</Text>
                <MaterialCommunityIcons name="food-drumstick" size={25} color="mediumvioletred" style={{bottom:27,left:95}}  />
                <Text style={styles.caloriInput}>{lunch}</Text>
            </View>
            <View style={styles.mealViews}>
                <Text style={styles.titles}>Second Snack</Text>
                <MaterialCommunityIcons name="food-apple" size={26} color="mediumvioletred" style={{bottom:30,left:165}}  />
                <Text style={styles.caloriInput}>{eveningSnack}</Text>
            </View>
            <View style={styles.mealViews}>
                <Text style={styles.titles}>Dinner</Text>
                <MaterialIcons name="dinner-dining" size={26} color="mediumvioletred" style={{bottom:30,left:100}}  />
                <Text style={styles.caloriInput}>{dinner}</Text>
            </View>
            <View style={styles.mealViews}>
                <Text style={styles.titles}>Third Snack</Text>
                <FontAwesome5 name="coffee" size={25} color="mediumvioletred" style={{bottom:29,left:155}}  />
                <Text style={styles.caloriInput}>{snack}</Text>
            </View>
            <View style={styles.note}>
                <Text style={styles.titles}>Notes</Text>
                <AntDesign name="edit" size={26} color="mediumvioletred" style={{bottom:30,left:95}}  />
                <Text style={styles.caloriInput}>{note}</Text>
          </View>
      </LinearGradient>
    </View>
  </ScrollView>
);
}
const styles = StyleSheet.create({
  cantainer: {
    flex:1,
    backgroundColor: 'white',
    height:1770,
  },
  linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 700,
      width: 500,
  },
  calBox:{
      shadowColor:'black',
      elevation:40,
      right:50,
      height:100,
      width:340,
      marginTop:1060,
      backgroundColor:'white',
  },
  topTxt:{
      fontSize: 26,
      color:'mediumvioletred',
      fontWeight:'700',
      textAlign:'center',
      fontFamily: 'sans-serif-condensed',
  },
  caloriInput:{
      textAlign:'center',
      borderBottomWidth: 0.5,
      borderBottomColor: 'purple',
      width:250,
      left:50,
      fontSize:23,
      color:'black',
  },
  mealViews:{
      marginTop:20,
      right:50,
      height:200,
      width:340,
      shadowColor:'black',
      elevation:30,
      backgroundColor:'white',
      borderRadius:30,
  },
  titles:{
      fontSize: 25,
      color:'dimgray',
      left:25,
      top:15,
      color:'purple',
      marginBottom:15,
      fontFamily: 'sans-serif-condensed',
  },
  note:{
      marginTop:20,
      right:50,
      height:200,
      width:370,
      shadowColor:'black',
      elevation:30,
      backgroundColor:'white',
      borderRadius:20,
  },
  btnSnd: {
      height:70,
      top:60,
      width:200,
      borderRadius:30,
      backgroundColor:'mediumvioletred',
      justifyContent: 'center',
      alignSelf:'center',
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 20,
    },
  });
  
  export default MyDiet; 