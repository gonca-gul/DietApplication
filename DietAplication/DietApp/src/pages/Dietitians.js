import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,FlatList, StatusBar  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ANIMALS = ["Gonca Gül", "Cansu Çil", "Chicken", "Dragon", "Camel", "Camel", "Camel"];

function Dietitians({navigation}) {
    const notification = useNotification();

    const handleNotificationTestClick = React.useCallback(() => {
        notification.showNotification({
            title: 'Your Request Has Been Sent',
            message: 'Dont Forget to Check Your Diet List',
            icon: <FontAwesome name="check-circle" color='purple' size={45} />,
            onPress: () => {
                alert('Pressed');
            },
        });
    }, [notification]);
    return (
      <View View style={styles.cantainer}>
        <StatusBar barStyle="light-content" backgroundColor="limegreen" />
          <FlatList
            style={{marginTop:10}}
            data={ANIMALS}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(animal) => {
            return (
            <View style={styles.listItem}>
                <ScrollView>
                    <TouchableOpacity style={styles.btn} onPress={handleNotificationTestClick}>
                        <Image style={styles.image}  source={require}></Image>
                        <Text style={styles.txt}>{animal.item}</Text>
                        <FontAwesome5 name="edit" size={28} color="darkgray" style={styles.icon}  />
                        <Text style={styles.txtbtn}>Request a Diet</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
          );
        }}/>
    </View>
 );
}

const styles = StyleSheet.create({

image:{
    height:70,
    width:70,
    left:20,
    top:20,
    borderWidth:2,
    borderColor:'thistle',
    borderRadius:40,
    },
listItem: {
    height:100,
    backgroundColor: "white",
    borderColor: "thistle",
    elevation:20,
    shadowColor:"purple" 
    },
icon:{
    bottom:60,
    left:330,
    },
txt:{
    bottom:35,
    left:100,
    fontSize:20,
    color:'darkslategrey',
    },
txtbtn:{
    fontWeight:'bold',
    color:'mediumorchid',
    bottom:60,
    left:290,
    },
  });

export default Dietitians; 