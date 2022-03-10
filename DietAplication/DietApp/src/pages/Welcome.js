import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import type {Node} from 'react';
 import LinearGradient from 'react-native-linear-gradient';
 import {View, Image, StyleSheet,TouchableOpacity,Text,TextInput,Alert } from 'react-native';
 
 function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
<LinearGradient
          colors={['ivory', 'mistyrose', 'lightcoral' /* lightsalmon */ ]}
          style={styles.linearGradient}
        >        
      <Image style={styles.image} source={require('../../src/image/image.png')} />
            <Text style={styles.space}> </Text>
            
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('Login')}>
              
            <Text  style={styles.buttonText1}>Dietitian Login</Text>
              </TouchableOpacity> 
            <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('UserLogin')}>
            <Text  style={styles.buttonText2}>User Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.endBtn}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.loginTxt}>Already Have an Account?  Sign in</Text>
            </TouchableOpacity></LinearGradient>
            </View> 
        );
    }

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    flex: 1,
   /* marginTop:100,
    backgroundColor:'mistyrose',*/
    },

    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 700,
      width: 500,
    },
    image: {
      marginTop:10,
      width:300,
      height: 200,
      },
    space: {
      marginBottom: 120,
      marginTop: 40,
     
      },
button1: {
    width: 350,
    borderColor: 'mistyrose',
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderRadius: 18,
    marginTop: 10,
    backgroundColor: 'white',
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
button2: {
  width: 350,
  borderColor: 'white',
  borderWidth: 3,
  height: 50,
  padding: 10,
  borderRadius: 18,
  marginTop: 10,
  backgroundColor: 'transparent',
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
buttonText1: {
    color: 'coral',
    fontSize: 20,
    fontWeight: 'bold',
},
buttonText2: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
},

  endBtn: {
    marginTop:5,
    marginLeft:30,
  },
  loginTxt: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 24,
  },
});
export default Welcome;