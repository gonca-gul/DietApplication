import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


function D_ChangePass({navigation}) {

    const [password, setPassword] = React.useState('');
    const handlePress = async () => {
        const data = await AsyncStorage.getItem('token');
        console.log(data)
          await axios.patch('http://10.0.2.2:5000/api/dietitians/me', {
            password: password,
            },{
            headers: {Authorization : 'Bearer '  +  data,
            },
          })
          .then(async response => {  
            console.log(response.data);         
      });
    }

    return (
      <View >
            <FontAwesome style={styles.icon}  name="lock" color="green"  size={33} />
            <TextInput style={styles.textInput} placeholder="Password"   
                name='password' secureTextEntry 
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={password => setPassword(password)}/>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.text}>Change Password</Text>
            </TouchableOpacity>
      </View>
     
 );
}

const styles = StyleSheet.create({
icon:{
    top:290,
    marginLeft:40,
},
button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:250,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 30,
    alignSelf:"center",
    shadowColor:"purple",
    backgroundColor: 'skyblue',
    marginTop:100,
    },
text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},
textInput: {
    height: 40,
    width: 300,
    marginLeft: 40,
    fontSize:18,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    textAlign:"center",
    marginTop: 250,
},
});
export default D_ChangePass; 