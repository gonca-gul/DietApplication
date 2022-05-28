import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  isLoggedIn,
  setAuthTokens,
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
} from 'react-native-axios-jwt';


function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignInPress = async () => {
    if (email.length === 0 || password.length === 0) {
      alert ( 'Email or Password Cannot be Empty!' ), () => false;
    } else {
        await axios.post('http://10.0.2.2:5000/api/dietitians/login', {
          email: email,
          password: password,
        })
        .then(async response => {
          await AsyncStorage.setItem('token' , (response.data.token));
          const data = await AsyncStorage.getItem('token');
          console.log(data) 
          navigation.navigate("D_HomePage"); 
          ;})
          .catch ((error) => {
            console.log('Error: ', error.response);
            alert ( 'Email or Password is Invalid!' )
          });
                
    }
  };
    return (
      <ScrollView>
      <View View style={styles.cantainer}>
        <AntIcon style={styles.user} name="login" color="ivory" size={150} />
        <View style={{marginTop:70,backgroundColor:"white"}}>
          <View style={styles.topView}>
            <Text style={styles.topTxt}>Hello Dietitian</Text>
            <Text style={styles.topTxt1}>Login First to Continue</Text>
          <TextInput style={styles.nameInput} placeholder="Email"
            onChangeText={email => setEmail(email)}  />
            <AntIcon style={styles.icon1} 
            name="mail" color="green" size={20} />
          <TextInput style={styles.nameInput} placeholder="Password"   
            name='password' secureTextEntry 
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={password => setPassword(password)}/>
          <AntIcon style={styles.icon2} name="key" color="green" size={20} />
          <TouchableOpacity style={styles.btn}  onPress={handleSignInPress}>
            <LinearGradient colors={['mistyrose', 'darkmagenta']} style={styles.gradient}>
              <Text style={styles.btnTxt}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.endView}>
            <TouchableOpacity
              style={styles.Btn2}
              onPress={() => navigation.navigate('D_ForgotPass')}>
              <Text style={styles.endTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
      </ScrollView>
 );
}
const styles = StyleSheet.create({
cantainer: {
  flex:1,
  backgroundColor: 'limegreen',
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
  bottom:50,
  backgroundColor: 'white',
  height: 460,
  alignSelf:"center",
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
  marginLeft: 90,
},
topTxt1: {
  marginTop: 5,
  fontSize: 15,
  fontWeight: 'bold',
  marginLeft: 110,
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