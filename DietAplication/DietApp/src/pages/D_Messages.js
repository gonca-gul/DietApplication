import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView,FlatList  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function D_Messages({navigation}) {

  const [subject, setSubject] = React.useState();
  const [question, setQuestion] = React.useState();
  const [data1, setData] = React.useState([]);
  
    React.useEffect(() => {
        getQuestions();
       });
    const getQuestions = async () => {
      const data = await AsyncStorage.getItem('token');
      await axios
        .get('http://10.0.2.2:5000/api/questions/getQuestions',{
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
      <ScrollView>
          <View>
              <FlatList
                style={{marginTop:40, marginBottom:40}}
                data={data1}
                keyExtractor={( item) => item._id}
                renderItem={({item}) => {
                return (
                <View style={styles.listItem}>
                  <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Question',{questions:item._id})}}>
                    <Text style={styles.sbjt}>Subject: {item.subject}</Text>
                    <Text style={styles.txt}>{item.question}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}/>
          </View> 
      </ScrollView>
    );
  }

const styles = StyleSheet.create({

listItem: {
  width:350,
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
sbjt:{
  marginLeft:5,
  fontSize:17,
  marginTop:10,
  fontWeight:"500"
},
});
export default D_Messages; 