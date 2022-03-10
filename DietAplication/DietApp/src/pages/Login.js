import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
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
          <AntIcon style={styles.icon2} name="user" color="green" size={25} />
          <TextInput style={styles.nameInput} placeholder="Password"   
          name='password' secureTextEntry 
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}/>
          <AntIcon style={styles.icon} name="key" color="green" size={25} />
          <TouchableOpacity style={styles.btn}  onPress={Login}>
            <Text style={styles.btnTxt}>Login </Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.loginTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
 );
}
const styles = StyleSheet.create({
  cantainer: {
    flex:1,
    flex: 0.4,
    backgroundColor: 'indianred',
    height: 700,
  },
  image: {
    marginTop:10,
    width:150,
    height: 150,
    marginLeft:120,
},
icon: {
  position: 'absolute',
  left:320,
  bottom:188,
},
icon2: {
  position: 'absolute',
  left:320,
  bottom:290,
},
  topView: {
    marginTop: 15,
    backgroundColor: 'white',
    height: 450,
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
    width: 300,
    borderColor: 'white',
    borderWidth: 3,
    height: 55,
    padding: 10,
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 42,
    backgroundColor: 'indianred',
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
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  endBtn: {
    marginRight: 80,
  },
  loginTxt: {
    fontSize: 15,
    marginTop: 25,
    fontWeight: 'bold',
    marginLeft: 140,
  },
});
export default Login; 