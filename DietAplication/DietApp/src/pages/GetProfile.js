import * as React from 'react';
import type {Node} from 'react';
import { NavigationContainer, useLinkProps, useRoute } from '@react-navigation/native';
import { View, Text,Image, StyleSheet ,TextInput, ScrollView,Button,  TouchableOpacity, Touchable, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect} from "react";
import LinearGradient from 'react-native-linear-gradient';


function GetProfile({navigation,route}){
  route = useRoute();
  const items = route.params.items; 
  //console.log(item);

  React.useEffect(() => {
    getInfo();
   }, []);

  const [gender, setGender] = React.useState();
  const [age, setAge] = React.useState()
  const [open, setOpen] = React.useState(false)
  const [response, setResponse] = React.useState(null);
  const [username, setUsername] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');

  const getInfo= () => { 
      axios
      .get('http://10.0.2.2:5000/api/dietitians/getDietitian/'+items,)
      .then(function (response) {
        setUsername(response.data.username);
        setName(response.data.name);
        setSurname(response.data.surname);
        setGender(response.data.gender);
        setAge(response.data.age);
        setBio(response.data.bio)
        //console.log(response.data);
      })
      .catch(function (error) {
        alert(error);
      })
      .then(function () {
      });
    }
  let avatar;
  const images = (newitem) => {
    if (newitem==='female') {
      avatar=require('../../src/image/female.png');
    } else if(newitem==='male') {
      avatar=require('../../src/image/male.png'); 
    }else{
      avatar=null;
    }
    return avatar;
    };
    return(
      <View View style={styles.cantainer} >
        <ScrollView>
        <LinearGradient
          colors={[ 'lightgreen', 'cadetblue' ]}
          style={styles.linearGradient}>
        </LinearGradient>
          <View style={styles.infoView}>
          <View  style={styles.image}>
          <Image 
            style={{
              marginBottom:20,
              width:150,
              height: 150,
              alignSelf:"center",
              borderRadius: 130/2,}}
            source={images(gender)}/>
            <Text style={{textAlign:"center",fontFamily:"sans-serif-condensed", fontSize:23,fontWeight:"700"}}>{name}  {surname}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:"flex-start"}}>
            <Text style={styles.txt}> Gender</Text>
            <Text style={styles.nameInput}>  {gender}</Text>
            <Text style={styles.txt} >   Age </Text>
            <Text style={styles.nameInput}>       {age} </Text>
        </View>
          </View>
            <Text style={styles.txtAbouttitle}> About {name} </Text>
            <Text style={styles.about}>{bio}</Text>
            
    </ScrollView>
</View>
    )
}
const styles = StyleSheet.create({
container: {
  flex:1,
},

image: {
  bottom:60,
  marginBottom:20,
  width:150,
  height: 150,
  borderRadius: 130/2,
  backgroundColor:"lightseagreen",
  borderWidth:2,
  elevation:50,
  alignSelf:"center",
  shadowColor:"purple",
  borderColor: 'white',
},
linearGradient: {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  height: 150,
  width: 400,
},
txt:{
  marginTop:10,
  marginLeft:50,
  fontSize:19,
},
infoView:{
  backgroundColor:"white",
},
nameInput: {
  height: 60,
  width: 90,
  right:70,
  marginTop:40,
  marginBottom: 10,
  fontSize:21,
  fontWeight:'bold',
  color:'lightseagreen'
},
txtAbouttitle:{
  fontSize:24,
  textAlign:"center",
  marginTop:20,
  fontWeight:'bold',
},
about:{
  fontSize:19,
  marginTop:20,
  marginLeft:30,
  marginRight:30,
  color:'cadetblue'
 },

});

export default GetProfile; 