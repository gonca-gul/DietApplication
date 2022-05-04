import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,FlatList, StatusBar, Pressable  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';





function Dietitians({navigation}) {
    const notification = useNotification();
    const [username, setUsername] = React.useState();
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

    React.useEffect(() => {
        dietitians();
       }, [username]);
    const dietitians = () => {
        axios
        .get('http://10.0.2.2:5000/api/dietitians')
        .then(function (response) {
          setUsername(response.data);
        })
          .catch(function (error) {
          alert(error);
        })
          .then(function () {
        })
    };
   
    return (
      <View View style={styles.cantainer}>
        <StatusBar barStyle="light-content" backgroundColor="limegreen" />
          <FlatList
            style={{marginTop:10}}
            data={username}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(list) => {
                
            return (
            <View style={styles.listItem}>
                <ScrollView>
                    <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('GetProfile',{username})}>
                        <Image style={styles.image}  source={require}></Image>
                        <Text style={styles.txt}>{list.item}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.btnReq}
                
                onPress={handleNotificationTestClick}>
              </TouchableOpacity>
                        <FontAwesome5 name="edit" size={28} color="darkgray" style={styles.icon}  />
                        
                    
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
btnReq:{
    width:100,
    color:'blue',
    }
  });

export default Dietitians; 