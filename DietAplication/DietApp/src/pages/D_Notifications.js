import * as React from 'react';
import type {Node} from 'react';
import { View, Text,TouchableOpacity,FlatList,StyleSheet,ScrollView } from 'react-native';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function D_Notification(navigation){
    const [message, setMessage] = React.useState();
    const [data1, setData] = React.useState([]);

    React.useEffect(() => {
        getNotifications();
       });

    const getNotifications = async () => {
      const data = await AsyncStorage.getItem('token');
      await axios
        .get('http://10.0.2.2:5000/api/notifications/getDietitianNotifications',{
          headers: {Authorization : 'Bearer '  +  data,
           },
          })
        .then(function (response) {
          setData(response.data);
        })
          .catch(function (error) {
          alert(error);
        })
          .then(function () {
        })
    };
   
    return(
          <View>
              <FlatList
                style={{marginTop:20, marginBottom:20}}
                data={data1}
                keyExtractor={( item) => {item}}
                renderItem={({item}) => {
                return (
                <View style={styles.listItem}>
                    <Text style={styles.txt}>{item.message}</Text>
                </View>
              );
            }}/>
          </View> 
    );
  }

const styles = StyleSheet.create({
  listItem: {
    width:380,
    backgroundColor:'white',
    alignSelf:"center",
    elevation:30,
    marginBottom:5,
    borderColor:"mediumvioletred",
    borderLeftWidth:4,
    shadowColor:"plum",
  },
  txt:{
    marginLeft:5,
    marginTop:20,
    marginBottom:20,
    fontSize:20,
    fontWeight:'500',
    color:'black',
  },
    
    });

export default D_Notification; 