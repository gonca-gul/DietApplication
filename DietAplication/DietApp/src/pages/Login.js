import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

function Login() {
  const [password, setPassword] = React.useState('');
    return (
      
      <View View style={styles.cantainer}>
        <Image style={styles.image} source={require('../../src/image/dietitian.jpg')} />
        <View style={styles.topView}>
          <Text style={styles.topTxt}>Hello Dietitian</Text>
          <Text style={styles.topTxt1}>Login First to Continue</Text>
          <TextInput style={styles.nameInput} placeholder="Email"  />
          <AntIcon style={styles.icon1} name="mail" color="green" size={20} />
          <TextInput style={styles.nameInput} placeholder="Password"   
          name='password' secureTextEntry 
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}/>
          <AntIcon style={styles.icon2} name="key" color="green" size={20} />
          <TouchableOpacity style={styles.btn}  onPress={Login}>
          <LinearGradient colors={['mistyrose', 'lightcoral', 'indianred']} style={styles.gradient}>
            <Text style={styles.btnTxt}>Login</Text>
          </LinearGradient>
          </TouchableOpacity>
          <View style={styles.endView}>
            <TouchableOpacity
              style={styles.Btn2}
              onPress={() => navigation.navigate('password')}>
              <Text style={styles.endTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
 );
}
const styles = StyleSheet.create({
  cantainer: {
    flex:1,
    flex: 0.35,
    backgroundColor: 'indianred',
    height: 700,
  },
  image: {
    marginTop:10,
    width:150,
    height: 150,
    marginLeft:120,
},

icon1: {
  position: 'absolute',
  left:320,
  bottom:285,
},
icon2: {
  position: 'absolute',
  left:320,
  bottom:195,
},
topView: {
  marginTop: 15,
  backgroundColor: 'white',
  height: 460,
  marginLeft:11,
  width:370,
  borderRadius: 30,
shadowOffset: {
	width: 0,
	height: 3,
},
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  shadowColor: 'green',
  elevation: 25,
},
 
topTxt: {
  color: 'indianred',
  marginTop: 20,
  fontSize: 30,
  fontWeight: 'bold',
  marginLeft: 40,
},
topTxt1: {
  marginTop: 5,
  fontSize: 15,
  fontWeight: 'bold',
  marginLeft: 40,

},
nameInput: {
  height: 40,
  width: 300,
  marginLeft: 40,
  borderBottomWidth: 1,
  borderBottomColor: 'green',
  marginTop: 50,
},
btn: {
  borderColor: 'white',
  borderWidth: 3,
  padding: 10,
  marginTop: 50,
    /*backgroundColor: 'indianred',*/
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  shadowOffset: {
  width: 0,
  height: 4,
},
  shadowRadius: 5,
  shadowOpacity: 0.8,
},
gradient:{
  width: 300,
  height: 55,
  borderRadius: 20,

},
btnTxt: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  marginLeft: 120,
  marginTop:13,
},
endView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
Btn2: {
  marginRight: 80,
},
endTxt: {
  fontSize: 15,
  marginTop: 25,
  fontWeight: 'bold',
  marginLeft: 140,
},
});
export default Login; 