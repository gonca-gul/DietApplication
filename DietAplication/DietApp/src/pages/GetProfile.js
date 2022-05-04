import * as React from 'react';
import type {Node} from 'react';
import { View, Text,Image, StyleSheet ,TextInput, ScrollView,Button,  TouchableOpacity, Touchable, TouchableHighlight } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect} from "react";
import {dietitians} from './Dietitians';

function GetProfile(){

  const [gender, setGender] = React.useState();
  const [birthday, setBirthday] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [response, setResponse] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [bio, setBio] = React.useState('');


 
   
    React.useEffect(() => {
        getInfo();
       }, []);
        const getInfo= () => { 
              axios
            .get('http://10.0.2.2:5000/api/dietitians/&{username}/getDietitian')
            .then(function (response) {
                setUsername(response.data.username);
                setEmail(response.data.email);
                setGender(response.data.gender);
                setBirthday(response.data.birthday);
                setBio(response.data.bio)
                console.log(response.data);
            })
            .catch(function (error) {
                alert(error);
            })
            .then(function () {
            });
        }
  
    return(
      <View View style={styles.cantainer} >
        <ScrollView>
        <Image style={styles.backImg} source={require('../../src/image/ProfileBack.jpg')} />
          <View  style={styles.image}>
        
          <Image 
            style={{
              marginBottom:20,
              width:150,
              height: 150,
              borderRadius: 150/2,
              borderWidth:1,
              borderColor: 'plum',}}
            source={require('../../src/image/ProfileBack.jpg')}/>
        </View>
        
        <View style={styles.topView}>
            <Text style={styles.txt}> Username </Text>
            <Text style={styles.nameInput} 
                value={username}
                onChangeText={username=> setUsername(username)}  />
            <Text style={styles.txt}> E-Mail </Text>
            <Text style={styles.nameInput} 
                value={email}
                onChangeText={email => setEmail(email)}  />
            <Text style={styles.txt}> Gender </Text>
            <Text style={styles.nameInput}
                value={gender} 
                onChangeText={gender => setGender(gender)}  />
            <Text style={styles.txt} > Date of Birth </Text>
            <Text style={styles.nameInput} 
              dateFormat="YYYY-MM-DD"
              value={birthday}
              onChangeText={date => setBirthday(birthday)}></Text>
            <Text style={styles.txt}> Experience </Text>
            <Text style={styles.nameInput}
                value={bio} 
                onChangeText={bio => setBio(bio)}  />
            
        </View>
    </ScrollView>
</View>
    )
}
const styles = StyleSheet.create({
container: {
  flex:1,
},
backImg:{
    height:180,
  },
icon1:{
  left: 62,
  marginTop:18,
  bottom:110,
},
icon2:{
  left: 85,
  marginTop:18,
  top:25,
  bottom:115,
},
image: {
  left:120,
  bottom:100,
  marginBottom:20,
  width:150,
  height: 150,
  borderRadius: 150/2,
  borderWidth:1,
  borderColor: 'plum',
},

txt:{
    marginTop:20,
  top:10,
  flexDirection:'row',
  left:45,
  fontSize:15,
},
topView: {
    bottom:80,  
    backgroundColor: 'white',
    height: 700,
    marginLeft:25,
    width:340,
    borderRadius: 20,
    shadowColor: 'purple',
    elevation: 15,
  }, 
nameInput: {
  height: 50,
  width: 250,
  marginTop:15,
  marginLeft: 50,
  borderBottomWidth: 1,
  borderBottomColor: 'plum',
  marginBottom: 20,
  bottom:10,
  fontSize:17,
  fontWeight:'bold',
},

btnSnd: {
    height:60,
    top:30,
    width:150,
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
  datePickerStyle: {
    width:250,
    marginLeft:50,
    marginTop:30,
  },
});

export default GetProfile; 