import * as React from 'react';
import type {Node} from 'react';
import { View, Text,Image, StyleSheet ,TextInput, ScrollView,Button,  TouchableOpacity, Touchable, TouchableHighlight } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect} from "react";
import DatePicker from 'react-native-datepicker';


function D_Profile(){

  const [gender, setGender] = React.useState();
  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState();
  const [age, setAge] = React.useState()
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [bio, setBio] = React.useState('');
  

   
    React.useEffect(() => {
        getInfo();
       }, []);
        const getInfo= async() => {
            const data = await AsyncStorage.getItem('token');
            console.log(data)
             await  axios
            .get('http://10.0.2.2:5000/api/dietitians/me',{
                headers: {Authorization : 'Bearer '  +  data,
                },
            })
            .then(function (response) {
                setUsername(response.data.username);
                setName(response.data.name);
                setSurname(response.data.surname);
                setEmail(response.data.email);
                setGender(response.data.gender);
                setAge(response.data.age);
                setBio(response.data.bio)
                console.log(response.data);
                //console.log(name);
            })
            .catch(function (error) {
                alert(error);
            })
            .then(function () {
            });
        }
  
    const handlePress = async () => {
        const data = await AsyncStorage.getItem('token');
        console.log(data)
          await axios.patch('http://10.0.2.2:5000/api/dietitians/me', {
            surname: surname,
            name: name,
            gender: gender,
            age: age,
            bio: bio,
            },{
            headers: {Authorization : 'Bearer '  +  data,
            },
          })
          .then(async response => {  
            console.log(response.data);         
      });
    }
    let avatar;
    if (gender==='female') {
      avatar=require('../../src/image/female.png');
     } else if(gender==='male') {
       avatar=require('../../src/image/male.png');
       
     }else{
       avatar=null;
     }
    return(  
      <View View style={styles.cantainer} >
        <ScrollView>
        <Image style={styles.backImg} source={require('../../src/image/ProfileBack.jpg')} />
          <View  style={styles.image}>
          <Image 
            style={{
              marginBottom:20,
              width:180,
              height: 180,
              borderRadius: 170/2,
              }}
            source={avatar}/>
        </View>
        <View style={styles.topView}>
            <Text style={styles.txt}> Username </Text>
            <TextInput style={styles.nameInput} 
                value={username}
                onChangeText={username=> setUsername(username)}  />
            <Text style={styles.txt}> Name </Text>
            <TextInput style={styles.nameInput} 
                value={name}
                onChangeText={name=> setName(name)}  />
            <Text style={styles.txt}> Surname </Text>
            <TextInput style={styles.nameInput} 
                value={surname}
                onChangeText={surname=> setSurname(surname)}  />
            <Text style={styles.txt}> E-Mail </Text>
            <TextInput style={styles.nameInput} 
                value={email}
                onChangeText={email => setEmail(email)}  />
            <Text style={styles.txt}> Gender </Text>
            <Picker
                style={{ height: 50, width: 280, left: 38, marginTop:20}}
                selectedValue={gender}
                value={gender}
                onValueChange={gender =>setGender(gender)}>
            <Picker.Item label="Female" value="female"  />
            <Picker.Item label="Male" value="male" />
            </Picker>
            <Text style={styles.txt} > Age </Text>
            <TextInput style={styles.nameInput} 
              value={age}
              onChangeText={age => setAge(age)}></TextInput>
            <Text style={styles.txt}> Biography </Text>
            <TextInput style={styles.nameInput}
                value={bio} 
                onChangeText={bio => setBio(bio)}  />
            <TouchableOpacity style={styles.btnSnd}  onPress={handlePress}>
                <Text style={styles.btnTxt}>SAVE</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
</View>
    )
}
const styles = StyleSheet.create({
container: {
  flex:1,
},
backImg:{
    height:180,
  },
icon1:{
  left: 62,
  marginTop:18,
  bottom:110,
},
icon2:{
  left: 85,
  marginTop:18,
  top:25,
  bottom:115,
},
image: {
  alignSelf:"center",
  bottom:100,
  marginBottom:20,
  width:170,
  height: 170,
  borderRadius: 170/2,
},
buttonContainer:{
  height:55,
  left:105,
  bottom:150,
  alignItems:'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginVertical: 8,
},
txt:{
  marginTop:30,
  flexDirection:'row',
  left:60,
  color:'purple',
  fontSize:17,
},
topView: {
    bottom:100,  
    backgroundColor: 'white',
    height: 1000,
    alignSelf:"center",
    width:340,
    borderRadius: 20,
    shadowColor: 'purple',
    elevation: 15,
  }, 
nameInput: {
  height: 50,
  width: 200,
  marginTop:15,
  marginLeft: 50,
  borderBottomWidth: 1,
  borderBottomColor: 'plum',
  marginBottom: 20,
  fontSize:18,
  fontWeight:'bold',
},

btnSnd: {
    height:60,
    top:30,
    width:150,
    borderRadius:30,
    backgroundColor:'mediumvioletred',
    justifyContent: 'center',
    alignSelf:'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 20,
  },
  datePickerStyle: {
    width:250,
    marginLeft:50,
    marginTop:30,
  },
});


   
export default D_Profile; 