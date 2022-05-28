import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, RefreshControl  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function D_HomePage({navigation}) {
  console.disableYellowBox = true;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    messages();
   });
  const [number, setNumber] = React.useState( );
  const messages = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios
    .get('http://10.0.2.2:5000/api/questions/NumberOfQuestion',{
      headers: {Authorization : 'Bearer '  +  data,
      },
    })
    .then(function (response) {
      setNumber(response.data);
      console.log(response.data);
    })
  };
  return (
    <ScrollView  refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}/>}>
      <View View style={styles.cantainer}>
        <Image style={styles.image} blurRadius={2} source={require('../../src/image/food.jpg')} />
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
            <Image style={ {height:95, width:75,  borderRadius:70/2}} source={require('../../src/image/foodcalori.jpg')} />
            <Text style={styles.btnTxt}>Food Calori</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Clients')}>
            <Image style={ {height:85, width:75,  borderRadius:70/2}} source={require('../../src/image/list.jpg')} />
            <Text style={styles.btnTxt}> My Clients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}  onPress={()=>navigation.navigate('D_Settings')}>
            <Image style={ {height:85, width:75,  borderRadius:70/2}} source={require('../../src/image/settings.jpg')} />
            <Text style={styles.btnTxt}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn4}  onPress={()=>navigation.navigate('D_Messages')}>
            <Image style={ {height:70, width:70,  borderRadius:70/2,marginBottom:5}} source={require('../../src/image/message.png')} />
            <Text style={styles.btnTxt}>Messages <Text style={styles.notifBx}> ({number}) </Text></Text>
          </TouchableOpacity>
        </View>
    </ScrollView>

 );
}

const styles = StyleSheet.create({
cantainer: {
  flex:1,
  backgroundColor: 'white',
  height:670,
},
image: {
  width: '100%',
  height: '42%',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderWidth:1,
  borderColor:'plum',
},
btn: {
  borderColor: 'plum',
  borderWidth: 1,
  borderRadius: 20,
  backgroundColor: 'white',
  width: 135,
  height: 125,
  padding: 10,
  marginTop: 50,
  left:45,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},
btn2: {
  borderColor: 'plum',
  borderWidth: 1,
  borderRadius: 20,
  bottom:125,
  backgroundColor: 'white',
  width: 135,
  height: 125,
    /*backgroundColor: 'indianred',*/
  marginLeft: 145,
  left:70,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},
btn3: {
  marginTop:20,
  marginLeft: 45,
  borderColor: 'plum',
  borderWidth: 1,
  borderRadius: 20,
  bottom:115,
  backgroundColor: 'white',
  width: 135,
  height: 125,
    /*backgroundColor: 'indianred',*/
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},
btn4: {
  marginTop:20,
  marginLeft: 145,
  left:70,
  borderColor: 'plum',
  borderWidth: 1,
  borderRadius: 20,
  bottom:260,
  backgroundColor: 'white',
  width: 135,
  height: 125,
    /*backgroundColor: 'indianred',*/
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},

btnTxt: {
  color: 'plum',
  fontWeight: 'bold',
  fontSize: 17,
},
notifBx:{
alignSelf:"flex-end",
fontFamily: 'sans-serif-condensed',
//bottom:10,
//bottom:5,
fontSize:18,
fontWeight:"bold",
color:"purple",
},
});

export default D_HomePage; 