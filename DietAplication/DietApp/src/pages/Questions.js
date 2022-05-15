import * as React from 'react';
import { NavigationContainer, useLinkProps, useRoute  } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView,FlatList  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Question({navigation,route}) {
    route = useRoute();
    const questions = route.params.questions; 

  const [subject, setSubject] = React.useState();
  const [answer, setAnswer] = React.useState();
  const [sender, setSender] = React.useState();
  const [createdAt, setCreatedAd] = React.useState();
  const [question, setQuestion] = React.useState();
  const [data1, setData] = React.useState([]);


    React.useEffect(() => {
        getAnswers();
        readQuestion();
       });
    const getAnswers = async () => {
      const data = await AsyncStorage.getItem('token');
      await axios
        .get('http://10.0.2.2:5000/api/questions/getAnswer/'+questions,{
          headers: {Authorization : 'Bearer '  +  data,
           },
          })
        .then(function (response) {
          setSubject(response.data.subject);
          setQuestion(response.data.question);
          setSender(response.data.sender);
          setCreatedAd(response.data.createdAt);
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
    .patch('http://10.0.2.2:5000/api/questions/answerQuestion/'+questions,{answer: answer,},{
      headers: {Authorization : 'Bearer '  +  data,
      },
    })
    .then(function (response) {
    })
  };
  const readQuestion = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios
    .get('http://10.0.2.2:5000/api/questions/readQuestion/'+questions,{
      headers: {Authorization : 'Bearer '  +  data,
      },
    })
    .then(function (response) {
      console.log(response)
    })
  };
  return(
    <ScrollView>
      <View>
      <View style={styles.topView}>
          <Text style={styles.input}>{subject} {sender}</Text>
          <Text style={styles.input}>{question}{createdAt}</Text>
          <TextInput style={styles.input} placeholder="question subject" multiline={true}
            value={answer}
            onChangeText={answer=> setAnswer(answer)}  />
      </View>
          <TouchableOpacity style={styles.askBtn} onPress={sendQuestion}>
            <Text  style={styles.buttonTxt}>Send Question</Text>
          </TouchableOpacity> 
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
  alignSelf:"center",
  marginTop:50,
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
export default Question; 