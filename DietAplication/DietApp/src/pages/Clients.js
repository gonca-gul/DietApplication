import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,FlatList, StatusBar, TouchableHighlight  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Clients({navigation}) {
    const [data1, setData1] = React.useState([]);
    const [username, setUsername] = React.useState();
    React.useEffect(() => {
        Clients();
       });
    const Clients = async() => {
        const data = await AsyncStorage.getItem('token');
        await axios
        .get('http://10.0.2.2:5000/api/dietitians/myUsers',{
            headers: {Authorization : 'Bearer '  +  data,
            },
        })
        .then(function (response) {
          setData1(response.data);
        })
          .catch(function (error) {
          alert(error);
        })
          .then(function () {
        })
    };
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
      <View View style={styles.cantainer}>
        <StatusBar barStyle="light-content" backgroundColor="limegreen" />
          <FlatList
            style={{marginTop:10}}
            data={data1}
            keyExtractor={item => {item}}
            renderItem={({item}) => {
            return (
            <View style={styles.listItem}>
                <ScrollView>
                    <TouchableOpacity style={styles.btnReq} onPress={()=>navigation.navigate('GetUserProfile',{item:item.username})}>
                        <Image style={styles.image}  source={images(item.gender)}></Image>
                        <Text style={styles.txt}>{item.name} {item.surname}</Text>
                        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('CreateDiet', {item:item.username})}>
                        <FontAwesome5 name="edit" size={28} color="darkgray" style={styles.icon}  />
                        <Text style={styles.txtbtn}>Create a Diet</Text>
                        </TouchableOpacity>
                        </TouchableOpacity>
                </ScrollView>
            </View>
          );
        }}/>
    </View>
 );
}

const styles = StyleSheet.create({

image:{
    height:70,
    width:70,
    left:20,
    top:20,
    borderWidth:2,
    borderColor:'thistle',
    borderRadius:30,
    },
listItem: {
    height:100,
    backgroundColor: "white",
    borderColor: "thistle",
    elevation:20,
    shadowColor:"purple" 
    },
icon:{
    bottom:60,
    left:330,
    },
txt:{
    bottom:35,
    left:110,
    fontSize:20,
    color:'darkslategrey',
    },
txtbtn:{
    fontWeight:'bold',
    color:'mediumorchid',
    bottom:50,
    left:300,
    },
    btnReq:{
      width:250,
      },

  });

export default Clients; 