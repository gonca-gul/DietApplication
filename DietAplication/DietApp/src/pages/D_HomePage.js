import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-search-bar';

function D_HomePage({navigation}) {
  return (
    <ScrollView>
      <View View style={styles.cantainer}>
        <Image style={styles.image} blurRadius={2} source={require('../../src/image/food.jpg')} />
          <SearchBar
          placeholder="Search Client Profile"
          width={340}
          marginTop={35}
          left={20}
          height={50}/>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
            <Image style={ {height:95, width:75,  borderRadius:70/2}} source={require('../../src/image/foodcalori.jpg')} />
            <Text style={styles.btnTxt}>Food Calori</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('Clients')}>
            <Image style={ {height:85, width:75,  borderRadius:70/2}} source={require('../../src/image/list.jpg')} />
            <Text style={styles.btnTxt}> My Clients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}  onPress={()=>navigation.navigate('Settings')}>
            <Image style={ {height:85, width:75,  borderRadius:70/2}} source={require('../../src/image/settings.jpg')} />
            <Text style={styles.btnTxt}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn4}  onPress={()=>navigation.navigate('Messages')}>
            <Image style={ {height:70, width:70,  borderRadius:70/2, marginTop:10, marginBottom:10}} source={require('../../src/image/message.png')} />
            <Text style={styles.btnTxt}>Messages</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>

 );
}

const styles = StyleSheet.create({
cantainer: {
  flex:1,
  backgroundColor: 'white',
  height:750,
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
});

export default D_HomePage; 