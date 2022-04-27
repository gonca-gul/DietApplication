import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, StyleSheet,TouchableOpacity,Text,TextInput,Alert, ScrollView,AsyncStorage  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 function SignUp({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const notification = useNotification();


    const signUpDietitian = async () => {
        axios.post('http://10.0.2.2:5000/api/dietitians', { email:email, password: password, username: username })
        .then(response => console.log(response.data));
        navigation.navigate("Login");
        notification.showNotification({
          title: 'Your Account Has Been Successfully Created',
          message: 'Please Login Your Account',
          icon: <FontAwesome name="check-circle" size={45} color='purple' />,
      });
   };

    const signUpUser = async () => {
          axios.post('http://10.0.2.2:5000/api/users', { email:email, password: password, username: username })
          .then(response => console.log(response.data));
          navigation.navigate("UserLogin");
          notification.showNotification({
            title: 'Your Account Has Been Successfully Created',
            message: 'Please Login Your Account',
            icon: <FontAwesome name="check-circle" size={45} color='purple' />,
        });
     };

    return (
        <View style={styles.container}>
          <ScrollView> 
            <LinearGradient
                colors={['white', 'mistyrose']}
                style={styles.linearGradient}> 
                    <Text style={styles.topTxt}>Create Account</Text>
                    <TextInput style={styles.nameInput} placeholder="Username" 
                        fontSize={18}
                        onChangeText={username => setUsername(username)} />
                    <AntIcon style={styles.icon0} name="user" color="purple" size={20} />
                    <TextInput style={styles.nameInput} placeholder="Email" 
                        fontSize={18}
                        onChangeText={email => setEmail(email)} />
                    <AntIcon style={styles.icon1} name="mail" color="purple" size={20} />
                    <TextInput style={styles.nameInput} placeholder="Password" 
                        fontSize={18}
                        name='password' secureTextEntry 
                        value={password}
                        enablesReturnKeyAutomatically
                        onChangeText={password => setPassword(password)} />
                    <AntIcon style={styles.icon2} name="key" color="purple" size={20} />
                    <TouchableOpacity style={styles.button} onPress={(signUpDietitian)}  >
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ '#642B73', '#C6426E']} style={styles.gradient}>
                        <Text  style={styles.buttonText}>Register Dietitian</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text  style={{color: 'black', fontSize:20,top:40, fontWeight:'bold'}}>OR</Text>
                    <TouchableOpacity style={styles.button}  onPress={(signUpUser)} >
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[  '#C6426E', '#642B73']} style={styles.gradient}>
                        <Text  style={styles.buttonText}>Register User</Text>
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
    marginTop:50,
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    bottom:100,
},
nameInput: {
    height: 40,
    width: 300,
    bottom:80,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    marginTop: 50,
},
icon0: {
    position: 'absolute',
    left:320,
    top: 160,
},
icon1: {
    position: 'absolute',
    left:320,
    top: 250,
},
icon2: {
    position: 'absolute',
    left:320,
    top: 340,
},

gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    width: 220,
    borderRadius: 18,
    
},
button: {
    width: 220,
    borderColor: 'mistyrose',
    borderWidth: 2,
    height: 80,
    padding: 10,
    top:40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},
});
export default SignUp;