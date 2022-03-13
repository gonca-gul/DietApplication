import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, StyleSheet,TouchableOpacity,Text,TextInput,Alert, ScrollView  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import CheckBox from '@react-native-community/checkbox';

 function SignUp() {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = React.useState(false)
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
          <ScrollView> 
            <LinearGradient
                colors={['white', 'mistyrose']}
                style={styles.linearGradient}> 
                    <Text style={styles.topTxt}>Create Account</Text>
                    <TextInput style={styles.nameInput} placeholder="First Name"  />
                    <TextInput style={styles.nameInput} placeholder="Last Name"  />
                    <TextInput style={styles.nameInput} placeholder="Email"  />
                    <AntIcon style={styles.icon1} name="mail" color="green" size={20} />
                    <TextInput style={styles.nameInput} placeholder="Password" 
                    name='password' secureTextEntry 
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}/> 
                    <AntIcon style={styles.icon2} name="key" color="green" size={20} />
                    <CheckBox
                    tintColors={{ true: 'green', false: 'green' }}
                    style={styles.CheckBox}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                    <Text style={styles.checkTxt}>Are You a Dietitian?</Text>
                    <CheckBox
                    style={styles.CheckBox}
                    tintColors={{ true: 'green', false: 'green' }}
                    disabled={false}
                    value={toggleCheckBox2}
                    onValueChange={(newValue) => setToggleCheckBox2(newValue)}/>
                    <Text style={styles.checkTxt}>Are You a Client</Text>
                    <TouchableOpacity style={styles.button1} >
                    <LinearGradient colors={['aquamarine', 'green']} style={styles.gradient}>
                    <Text  style={styles.buttonText1}>Get Started</Text>
                    </LinearGradient>
                    </TouchableOpacity> 
            </LinearGradient>
          </ScrollView> 
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
    height: 720,
    width: 400,
},
topTxt: {
    color: 'indianred',
    fontSize: 30,
    fontWeight: 'bold',
    bottom: 50,
    top:15,
},
nameInput: {
    top:20,
    height: 40,
    width: 300,
    bottom:40,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    marginTop: 50,
},
icon1: {
    position: 'absolute',
    left:320,
    top: 360,
},
icon2: {
    position: 'absolute',
    left:320,
    top: 450,
},
CheckBox: {
    left: 135,
    top:65,
},
checkTxt:{
    right:45,
    top:35,
    fontSize: 20,
    color: 'indianred',
    fontWeight: 'bold',
},
gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    width: 260,
    borderRadius: 18,
},
button1: {
    width: 260,
    borderColor: 'mistyrose',
    borderWidth: 2,
    height: 75,
    padding: 10,
    marginTop: 20,
    top:40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},
});
export default SignUp;