import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient';

function Login() {
  const [password, setPassword] = React.useState('');
    return (
      <View View style={styles.cantainer}>
        <AntIcon style={styles.user} name="login" color="ivory" size={150} />
        <View style={styles.topView}>
          <Text style={styles.topTxt}>Hello Client</Text>
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
          <LinearGradient colors={['mistyrose','darkmagenta']} style={styles.gradient}>
          <Text style={styles.btnTxt}>Login</Text>
          </LinearGradient>
          </TouchableOpacity>
          <View style={styles.endView}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => navigation.navigate('SignUp')}>
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
  backgroundColor: 'limegreen',
  height: 700,
},
user: {
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
  marginTop: 10,
  backgroundColor: 'white',
  height: 460,
  marginLeft:11,
  width:370,
  borderRadius: 20,
  shadowColor: 'purple',
  elevation: 25,
},
 
topTxt: {
  color: 'purple',
  marginTop: 20,
  fontSize: 30,
  fontWeight: 'bold',
  marginLeft: 105,
},
topTxt1: {
  marginTop: 5,
  fontSize: 15,
  fontWeight: 'bold',
  marginLeft: 107,

},
nameInput: {
  height: 40,
  width: 300,
  marginLeft: 40,
  borderBottomWidth: 1,
  borderBottomColor: 'green', /*lightcoral*/
  marginTop: 50,
},
btn: {
  borderColor: 'white',
  borderWidth: 3,
  padding: 10,
  marginTop: 50,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},
gradient:{
  width: 300,
  height: 50,
  borderRadius: 20,
},
btnTxt: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  marginLeft: 120,
  marginTop:10,
},
endView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
btn2: {
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