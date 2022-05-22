import * as React from 'react';
import type {Node} from 'react';
import { View, Text,Image, StyleSheet ,TextInput, ScrollView,Button,  TouchableOpacity, Touchable, TouchableHighlight } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect} from "react";
import DatePicker from 'react-native-datepicker';

const includeExtra = true;

function D_Profile(){

  const [gender, setGender] = React.useState();
  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState();
  const [birthday, setBirthday] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [response, setResponse] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [bio, setBio] = React.useState('');


  const onButtonPress = React.useCallback((type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse); 
      
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    }, []);
   
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
                setBirthday(response.data.birthday);
                setBio(response.data.bio)
                console.log(response.data);
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
            birthday: birthday,
            bio: bio,
            },{
            headers: {Authorization : 'Bearer '  +  data,
            },
          })
          .then(async response => {  
            console.log(response.data);         
      });
    }
    return(
      <View View style={styles.cantainer} >
        <ScrollView>
        <Image style={styles.backImg} source={require('../../src/image/ProfileBack.jpg')} />
          <View  style={styles.image}>
          {response?.assets &&
          response?.assets.map(({uri}) => (
          <Image 
            key={''}
            style={{
              marginBottom:20,
              width:200,
              height: 200,
              borderRadius: 200/2,
              borderWidth:1,
              borderColor: 'plum',}}
            source={{uri: uri}}/>
            ))}
        </View>
        <View style={styles.buttonContainer}>
          <AntIcon name='camera' size={26} color='purple' style={styles.icon1} />
          <AntIcon name='upload' size={25} color='purple' style={styles.icon2} />
          {actions.map(({title, type, options}) => {
            return (
              <Button
                color='transparent'
                title='........'
                key={title}
                onPress={() => onButtonPress(type, options) }>
              </Button>
            );
          })}
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
            <Text style={styles.txt} > Date of Birth </Text>
            <TextInput style={styles.nameInput} 
              dateFormat="YYYY-MM-DD"
              value={birthday.toString()}
              onChangeText={date => setBirthday(birthday)}></TextInput>
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
  left:100,
  bottom:100,
  marginBottom:20,
  width:200,
  height: 200,
  borderRadius: 200/2,
  borderWidth:1,
  borderColor: 'plum',
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

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}
const actions: Action[] = [
  {
  title: 'Take Image',
  type: 'capture',
  options: {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    includeExtra,
    },
  },
  {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
    includeExtra,
  },
},
];
   
export default D_Profile; 