import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, StyleSheet,TouchableOpacity,Text,TextInput,Alert,StatusBar } from 'react-native';
 
 function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
        <LinearGradient
          start={{x: 0.0, y: 0.25}} 
          end={{x: 0.5, y: 1.0}}
          locations={[0,0.5,0.4]}
          colors={['ivory', 'mistyrose', 'limegreen' /* lightsalmon */ ]}
          style={styles.linearGradient}>        
            <Image style={styles.image} source={require('../../src/image/image.png')} />
            <Text style={styles.space}> </Text>
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('Login')}>
              <Text  style={styles.buttonText1}>Dietitian Login</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('UserLogin')}>
              <Text  style={styles.buttonText2}>User Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Btn3}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.SignTxt}>Already Have an Account? Create Account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> 
      );
    }

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    flex: 1,
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
    width: 310,
    borderColor: 'mistyrose',
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderRadius: 18,
    marginTop: 10,
    backgroundColor: 'mistyrose',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
button2: {
    width: 310,
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
},
buttonText1: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
},
buttonText2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},
Btn3: {
    marginTop:5,
    marginLeft:30,
},
SignTxt: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 24,
    marginRight: 30,
},
});
export default Welcome;