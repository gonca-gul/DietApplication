import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-search-bar';


function D_HomePage({navigation}) {
    return (
      <View View style={styles.cantainer}>
        <Image style={styles.image} source={require('../../src/image/food.jpg')} />
          <SearchBar
          placeholder="Search Other Dietitian"
          width={340}
          marginTop={35}
          left={20}
          height={50}
          />
          <ScrollView>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('FoodCalori')}>
          <AntIcon  name="search1" color="limegreen"  size={55} />
            <Text style={styles.btnTxt}>Food Calori</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}  onPress={()=>navigation.navigate('ClientList')}>
          <AntIcon  name="team" color="limegreen"  size={55} />
            <Text style={styles.btnTxt}> My Clients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}  onPress={()=>navigation.navigate('Settings')}>
          <AntIcon  name="setting" color="limegreen"  size={55} />
            <Text style={styles.btnTxt}>Settings</Text>
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
image: {
  width: '100%',
  height: '50%',
  borderBottomLeftRadius: 140,
  borderBottomRightRadius: 140,
  borderWidth:2,
  borderColor:'plum',
},
btn: {
  borderColor: 'plum',
  borderWidth: 1,
  backgroundColor: 'white',
  width: 115,
  height: 115,
  padding: 10,
  marginTop: 50,
    /*backgroundColor: 'indianred',*/
  left:50,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},
btn2: {
  marginLeft: 150,
  borderColor: 'plum',
  borderWidth: 1,
  bottom:115,
  backgroundColor: 'white',
  width: 115,
  height: 115,
    /*backgroundColor: 'indianred',*/
  left:80,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},
btn3: {
  marginTop:20,
  marginLeft: 140,
  borderColor: 'plum',
  borderWidth: 1,
  bottom:115,
  backgroundColor: 'white',
  width: 115,
  height: 115,
    /*backgroundColor: 'indianred',*/
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'purple',
  elevation: 25,
},

btnTxt: {
  color: 'lightgray',
  fontWeight: 'bold',
  fontSize: 17,
},
});
export default D_HomePage; 