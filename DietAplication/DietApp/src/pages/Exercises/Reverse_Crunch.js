import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';

function Reverse_Crunch({navigation}){
    let [time, setTime] = React.useState(0);
    const replayTimer = () => {
        if (time === 0) {
        setTimeout(() => {
            setTime(time = 30)
        })
        }else {
        clearTimeout(time = 31)
        }
        }
        if (time === 0) {
            clearTimeout()
        
        }else {
            setTimeout(() => {
                setTime(time-1)
            }, 2500)
        }
    return(
    <ScrollView>
        <View style={{backgroundColor:'white', flex:1}}>
            <Image style={styles.image}  source={require('../../image/exercises/reverse-crunch.jpg')}></Image>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['white', 'lavenderblush', 'thistle']} style={styles.linearView}>
                <Text style={styles.timer} onChange={setTime}>{time}</Text>
                <Text style={{left:50, marginTop:15,fontSize:19, fontWeight:'bold'}}>REPEAT</Text>
            </LinearGradient>
            <View style={styles.txtView}>
                <Text style={styles.txt}>Raise your legs so your thighs are perpendicular to the floor and your knees are bent at a 90° angle. Breathe out and contract your abs to bring your knees up towards your chest and raise your hips off the floor. Hold for a beat in this position, then slowly lower your legs back to the starting position.</Text>
                <TouchableOpacity onPress={replayTimer} style={styles.touchReplay}>
                    <MaterialIcon name="replay-30" size={45} color="white" style={styles.replay}  />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({

image:{
    alignSelf: 'center',
    marginTop:25,
    height:280,
    width:400,
    resizeMode:"stretch",
    },
linearView:{
    backgroundColor: 'white',
    top:30,
    height:170,
    width:170,
    left:110,
    borderWidth:2,
    borderColor: 'gainsboro',
    borderRadius:110,
    shadowColor: 'purple',
    elevation:40,
    },
txtView:{
    backgroundColor: 'white',
    bottom:20,
    height:240,
    width:400,
    marginTop:70,
    marginBottom:30,
    justifyContent:'center',
    borderRadius:50,
    shadowColor: 'purple',
    elevation:40,
    },
txt:{
    top:75,
    marginLeft:40,
    marginRight:30,
    fontSize:20,
    color:'dimgray',
    fontFamily: 'sans-serif-condensed',
    },
timer:{
    top:20,
    textAlign:'center',
    color: 'mediumvioletred',
    fontSize:70,
    },
touchReplay: {
    height:60,
    width:75,
    left:170,
    top:85,
    /*bottom:80,*/
    borderRadius:40,
    backgroundColor:'mediumvioletred',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:100,
    },
});

export default Reverse_Crunch;