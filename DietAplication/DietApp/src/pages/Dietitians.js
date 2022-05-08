import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,FlatList, StatusBar, VirtualizedList  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




function Dietitians({navigation}) {
    const [username, setUsername] = React.useState();
    React.useEffect(() => {
        dietitians();
       });
    const dietitians = () => {
        axios
        .get('http://10.0.2.2:5000/api/dietitians')
        .then(function (response) {
          setUsername(response.data);
        })
          .catch(function (error) {
          alert(error);
        })
          .then(function () {
        })
    };

    const reqDiet = async (item) => {
      const data = await AsyncStorage.getItem('token');
      await axios
      .patch('http://10.0.2.2:5000/api/dietLists/requestDietList/'+item.item,{},{
        headers: {Authorization : 'Bearer '  +  data,
        },
      })
      .then(async response => {
        console.log(data);
        console.log(response.data);
        console.log(item.item);
      })
        .catch(function (error) { 
        alert(error);
      })
        .then(function () {
      })
  };
    return (
      <View View style={styles.cantainer}>
        <StatusBar barStyle="light-content" backgroundColor="limegreen" />
          <FlatList
            style={{marginTop:10}}
            data={username}
            keyExtractor={item =>{ item}}
            renderItem={(item) => {
            return (
            <View style={styles.listItem}>
                <ScrollView>
                    <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('GetProfile')}>
                        <Image style={styles.image}  source={require}></Image>
                        <Text style={styles.txt}>{item.item}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.btnReq}
                        onPress={() => reqDiet(item)}>
                <FontAwesome5 name="edit" size={28} color="darkgray" style={styles.icon}  />  
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
    borderRadius:40,
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
    left:100,
    fontSize:20,
    color:'darkslategrey',
    },
txtbtn:{
    fontWeight:'bold',
    color:'mediumorchid',
    bottom:60,
    left:290,
    },
btnReq:{
    width:100,
    height:100,
    },
txtReq: {
  color:'red',
}
  });

export default Dietitians; 