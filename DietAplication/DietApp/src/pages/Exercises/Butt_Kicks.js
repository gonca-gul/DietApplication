import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';




function Butt_Kicks({navigation}){
    let [time, setTime] = React.useState(10);
    const replayTimer = () => {
        if (time === 0) {
        setTimeout(() => {
            setTime(time = 10)
            
        })
        } else {
        clearTimeout(time = 11)
        }
        }
        if (time === 0) {
            clearTimeout()
        } else {
            setTimeout(() => {
                setTime(time-1)
            }, 1000)
        }
  
    return(
        <ScrollView>
        <View style={styles.container}>
            <Image style={styles.image}  source={require('../../image/exercises/butt-kicks.png')}></Image>
            <View style={styles.txtView}>
            <Text style={styles.txt}>Stand tall with your feet shoulder-width apart and face forward.Start kicking your feet up, until the heels touch the glutes, and pump your arms at the same time.</Text>
            </View>
            <Text style={styles.timer} onChange={setTime}>{time}s</Text>
            <TouchableOpacity onPress={replayTimer} style={styles.touchPlay}>
            <MaterialIcon name="replay-30" size={28} color="orange" style={styles.replay}  />
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    cantainer: {
      flex:1,
    },
    image: {
    alignSelf: 'center',
    height: 220,
    width: 400,
    resizeMode:"stretch",
    
    },
    txtView:{
    backgroundColor: 'white',
    height: 200,
    width:400,
    justifyContent:'center',
    borderRadius: 20,
    shadowColor: 'limegreen',
    elevation: 10,
    },
    txt:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        fontSize:18,
        color:'purple',
    },
    timer: {
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#B0D0FF',
        fontSize: 144
    },
    
    touchPlay: {
        flex: 1,
        backgroundColor:'purple',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40
    }
});

export default Butt_Kicks;