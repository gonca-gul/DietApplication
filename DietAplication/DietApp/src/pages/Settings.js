import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



function Settings({navigation}) {
  const Logout = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios.get('http://10.0.2.2:5000/api/users/logout',{
      headers: {Authorization : 'Bearer '  +  data,
       },
      })
    .then(async response => {
      await AsyncStorage.setItem('token' , (response.data.token));
      console.log(data) 
      console.log(response.data);
      navigation.navigate("UserLogin"); 
      ;})
      .catch ((error) => {
      });
};

    return (
      <View View style={styles.cantainer}>
          <ScrollView>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('ChangePassword' )}>
          <FontAwesome  name="lock" color="green"  size={33} />
            <Text style={styles.btnTxt}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('ChangePassword')}>
          <Ionicons  name="notifications-circle" color="mediumvioletred"  size={34} />
            <Text style={styles.btnTxt}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('About')}>
          <AntIcon  name="questioncircle" color="darkorange"  size={30} />
            <Text style={styles.btnTxt}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={Logout}>
          <AntIcon  name="logout" color="purple"  size={30} />
            <Text style={styles.btnTxt}>LogOut</Text>
          </TouchableOpacity>
          </ScrollView>
      </View>
 );
}

const styles = StyleSheet.create({
cantainer: {
  flex:1,
   backgroundColor: 'white',
},
btn: {
    marginBottom: 3,
    borderColor: 'plum',
    backgroundColor: 'white',
    width: 400,
    height: 60,
    padding: 10,
    /*backgroundColor: 'indianred',*/
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'purple',
    elevation: 25,
  },
  btnTxt:{
    marginLeft: 25,
    fontSize:20,
  },
});
export default Settings; 