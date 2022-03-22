import * as React from 'react';
import type {Node} from 'react';
import { View, Text,Image, StyleSheet ,TextInput, ScrollView,Button,  TouchableOpacity, Touchable, TouchableHighlight } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import * as ImagePicker from 'react-native-image-picker';

const includeExtra = true;

function D_Profile(){

  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [response, setResponse] = React.useState(null);
  const onButtonPress = React.useCallback((type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse); 
      
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    }, []);
  
    return(
      <View View style={styles.cantainer} >
        <ScrollView>
          <View  style={styles.image}>
          {response?.assets &&
          response?.assets.map(({uri}) => (
          <Image 
            key={''}
            style={{
              marginBottom:20,
              width:250,
              height: 250,
              borderRadius: 250/2,
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
        <Text style={styles.txt}> First Name</Text>
        <TextInput style={styles.nameInput}  />
        <Text style={styles.txt}> Last Name</Text>
        <TextInput style={styles.nameInput}  />
        <Text style={styles.txt}> E-Mail </Text>
        <TextInput style={styles.nameInput}  />
        <Text style={styles.txt}> Gender </Text>
        <Picker
        style={{ height: 50, width: 300, left: 38, marginTop:20, marginBottom:20}}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Female" value="female"  />
        <Picker.Item label="Male" value="male" />
        </Picker>
        <Text style={styles.txt} > Date of Birth </Text>
        <View style={styles.btnPicker}>
        <Button  title='Select' color='plum'  onPress={() => setOpen(true)} />
        <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        onDateChange={(date) => { setDate({ date: date }) }}/>
        </View>
        <Text style={styles.txt}> Experience </Text>
        <TextInput style={styles.nameInput}  />
        <Text style={styles.txt}> Phone </Text>
        <TextInput style={styles.nameInput}  />
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
container: {
  flex:1,
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
  left:75,
  marginTop:40,
  marginBottom:20,
  width:250,
  height: 250,
  borderRadius: 250/2,
  borderWidth:1,
  borderColor: 'plum',
},
buttonContainer:{
  height:55,
  left:105,
  bottom:50,
  alignItems:'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginVertical: 8,
},
txt:{
  top:10,
  flexDirection:'row',
  left:45,
  fontSize:15,
},
nameInput: {
  height: 50,
  width: 280,
  marginTop:15,
  marginLeft: 50,
  borderBottomWidth: 1,
  borderBottomColor: 'plum',
  marginBottom: 20,
  bottom:10,
  fontSize:17,
  fontWeight:'bold',
},
btnPicker:{
  marginTop: 20,
  width:280,
  height:55,
  left: 50,
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