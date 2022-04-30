import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";


function Settings({navigation}) {
    return (
      <View View style={styles.cantainer}>
          <ScrollView>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('ChangePassword' )}>
          <AntIcon  name="lock" color="limegreen"  size={33} />
            <Text style={styles.btnTxt}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('ChangePassword')}>
          <AntIcon  name="bells" color="limegreen"  size={30} />
            <Text style={styles.btnTxt}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('About')}>
          <AntIcon  name="questioncircleo" color="limegreen"  size={30} />
            <Text style={styles.btnTxt}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('LogOut')}>
          <AntIcon  name="logout" color="purple"  size={30} />
            <Text style={styles.btnTxt}>LogOut</Text>
          </TouchableOpacity>
          </ScrollView>
      </View>
 );
}

const styles = StyleSheet.create({
cantainer: {
  flex:1,
   backgroundColor: 'white',
},
btn: {
    marginBottom: 3,
    borderColor: 'plum',
    backgroundColor: 'white',
    width: 400,
    height: 60,
    padding: 10,
    /*backgroundColor: 'indianred',*/
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'purple',
    elevation: 25,
  },
  btnTxt:{
    marginLeft: 25,
    fontSize:20,
  },
});
export default Settings; 