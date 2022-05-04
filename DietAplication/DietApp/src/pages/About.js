import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';



function About({navigation}) {


    return (
      <View View style={styles.topView}>
          
      
              <Text style={styles.title} >What is Diet Tracker App?</Text>
              <Text style={styles.txt} >Diet tracker provides excellent opportunities for both dietitians and users with its very easy to use interface.
              Among these opportunities, as it can be understood from the interface, there is the opportunity to easily access your diet in response to dietary demand.
              In addition, you can support your diet with sports activities for users from the exercises screen.Enjoy the app !</Text>
             
      </View>
     
 );
}

const styles = StyleSheet.create({

topView: {
    backgroundColor: 'white',
    height: 500,
    marginTop: 80,
    marginLeft:15,
    width:360,
    borderRadius: 20,
    shadowColor: 'purple',
    elevation: 15,
  },
title: {
    color: 'purple',
    fontWeight:'bold',
    fontSize:23,
    textAlign:'center',
    marginTop:20,
},
txt: {
    marginTop:40,
    fontSize:19,
    marginLeft:60,
    marginRight:40,
},
});
export default About; 