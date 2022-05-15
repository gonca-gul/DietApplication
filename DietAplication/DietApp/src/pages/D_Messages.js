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
                style={{marginTop:30}}
                data={data1}
                keyExtractor={( item) => item._id}
                renderItem={({item}) => {
                return (
                <View style={styles.listItem}>
                  <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Question',{questions:item._id})}}>
                    <Text style={styles.txt}>{item.question}</Text>
                    <Text>{item.subject}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}/>
           </View> 
          </ScrollView>
    );
  }

const styles = StyleSheet.create({
topView:{
  backgroundColor:"white",
  height:250,
  borderRadius:20,
},
input:{
  height:80,
  width:350,
  fontSize:19,
  borderBottomColor:"plum",
  borderBottomWidth:1,
  alignSelf:"center",
  marginTop:20,
  textAlign:"center",
  backgroundColor: 'mistyrose',
  borderRadius:10,
},
buttonTxt:{
  fontSize:18,
},
listItem: {
 
  height:80,
  backgroundColor: "white",
  borderColor: "thistle",
  elevation:20,
  shadowColor:"purple" 
},
askBtn: {
  width: 200,
  borderColor: 'mistyrose',
  borderWidth: 2,
  height: 60,
  borderRadius: 18,
  bottom:30,
  alignSelf:"center",
  backgroundColor: 'plum',
  justifyContent: 'center',
  alignItems: 'center',
},
txt:{
  left: 25,
  marginTop:30,
  fontSize:20,
  fontWeight:'500',
  color:'black',
},
});
export default D_Messages; 