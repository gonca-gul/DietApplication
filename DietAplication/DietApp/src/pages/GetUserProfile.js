import * as React from 'react';
import type {Node} from 'react';
import { NavigationContainer, useLinkProps, useRoute } from '@react-navigation/native';
import { View, Text,Image, StyleSheet ,TextInput, ScrollView,Button,  TouchableOpacity, Dimensions,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {useEffect} from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import AntIcon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function GetUserProfile({navigation,route}){
  route = useRoute();
  const item = route.params.item; 
  //console.log(item);

  React.useEffect(() => {
    getInfoUser();
   }, []);

   const [gender, setGender] = React.useState();
   const [birthday, setBirthday] = React.useState()
   const [open, setOpen] = React.useState(false)
   const [weight, setWeight] = React.useState( );
   const [illness, setIllness] = React.useState('');
   const [height, setHeight] = React.useState( );
   const [username, setUsername] = React.useState('');
   const [medicine, setMedicine] = React.useState('');

    const getInfoUser= () => { 
          axios
          .get('http://10.0.2.2:5000/api/users/getUser/'+item,)
          .then(function (response) {
            setUsername(response.data.username);
            setWeight(JSON.stringify(response.data.weight));
            setHeight(JSON.stringify(response.data.height));
            setMedicine(response.data.medicine);
            setGender(response.data.gender);
            setBirthday(response.data.birthday);
            setIllness(response.data.illness);
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
        return (
          <View View style={styles.cantainer} >
            <StatusBar barStyle="light-content" backgroundColor="thistle" />
            <ScrollView>
            <LinearGradient
              colors={[ 'thistle', 'mediumpurple' ]}
              style={styles.linearGradient}>
            </LinearGradient>
              <View style={styles.infoView}>
              <View  style={styles.image}>
              <Image 
                style={{
                  marginBottom:20,
                  width:150,
                  height: 150,
                  alignSelf:"center",}}
                source={images(gender)}/>
                <Text style={{textAlign:"center",fontFamily:"sans-serif-condensed", fontSize:23,fontWeight:"700"}}>{username}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.txt}>  Gender</Text>
                <Text style={styles.nameInput}> {gender}</Text>
                <Text style={styles.txt}> Birthday</Text>
                <Text style={styles.nameInput}>{birthday}</Text>
            </View>
              </View>
              <Text style={styles.txtAbouttitle}> About  {username} </Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Icon name="weight" size={24} color="purple"  style={styles.Icons} />
                <Text style={styles.txt}>Weight: </Text>
                <Text style={styles.nameInput}>{weight} kg</Text>
                <MaterialComIcon name="human-male-height-variant" size={28} color="purple"  style={styles.Icons}/>
                <Text style={styles.txt}>Height:</Text>
                <Text style={styles.nameInput}>{height} cm</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"flex-start"}}>
                <Icon name="disease" size={25} color="purple"  style={styles.Icons} />
                <Text style={styles.txt}>Illness:</Text>
                <Text style={styles.nameInput}> {illness}</Text>
                <MaterialComIcon name="pill" size={25} color="purple"  style={styles.Icons}/>
                <Text style={styles.txt}>Medicine:</Text>
                <Text style={styles.nameInput}>{medicine}</Text>
                </View>
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
      backgroundColor:"thistle",
      borderWidth:2,
      elevation:50,
      alignSelf:"center",
      shadowColor:"plum",
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
      marginLeft:40,
      fontSize:19,
    },
    infoView:{
      backgroundColor:"white",
    },
    nameInput: {
      height: 60,
      width: 90,
      right:65,
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
      marginBottom:20,
      fontWeight:'bold',
    },
    about:{
      fontSize:19,
      marginTop:20,
      marginLeft:30,
      marginRight:30,
      color:'cadetblue'
     },
    Icons:{
    left:30,
    top:10,
    },
    });

export default GetUserProfile; 