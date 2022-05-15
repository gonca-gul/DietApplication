import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView,FlatList,Alert  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Messages({navigation}) {

  const [subject, setSubject] = React.useState();
  const [question, setQuestion] = React.useState();
  const [answer, setAnswer] = React.useState();
  const [to, setTo] = React.useState();
  const [createdAt, setCreatedAd] = React.useState();
  const [data1, setData] = React.useState([]);
    React.useEffect(() => {
        getAnswers();
       });
    const getAnswers = async () => {
      const data = await AsyncStorage.getItem('token');
      await axios
        .get('http://10.0.2.2:5000/api/questions/getAnswers',{
          headers: {Authorization : 'Bearer '  +  data,
           },
          })
        .then(function (response) {
          setData(response.data);
          //console.log(response.data)
        })
          .catch(function (error) {
          alert(error);
        })
          .then(function () {
        })
    };
   
  const sendQuestion = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios
    .post('http://10.0.2.2:5000/api/questions/askQuestion',{
        subject: subject,
        question:question,
    },{
      headers: {Authorization : 'Bearer '  +  data,
      },
      
    })
    .then(function (response) {
    })
  };

  return(
      <View>
      <View style={styles.topView}>
        <TextInput style={styles.input} placeholder="question subject" multiline={true}
          value={subject}
          onChangeText={subject=> setSubject(subject)}  />
        <TextInput style={styles.input} placeholder="question" multiline={true}
          value={question}
          onChangeText={question=> setQuestion(question)}  />
      </View>
        <TouchableOpacity style={styles.askBtn} onPress={sendQuestion}>
              <Text  style={styles.buttonTxt}>Send Question</Text>
        </TouchableOpacity> 
              <FlatList
                style={{marginTop:30}}
                data={data1}
                keyExtractor={( item) => item._id}
                renderItem={({item}) => {
                return (
                <View style={styles.listItem}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('AnswerDetail',{answerdetail:item._id})}}>
                        <Text style={styles.txt}>{item.question}</Text>
                        <Text>{item.subject}</Text>
                        </TouchableOpacity>
                </View>
              );
            }}/>
           </View> 
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
export default Messages; 