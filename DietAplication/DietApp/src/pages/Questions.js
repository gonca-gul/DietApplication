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
        .get('http://10.0.2.2:5000/api/questions/getQuestion/'+questions,{
          headers: {Authorization : 'Bearer '  +  data,
           },
          })
        .then(function (response) {
          setSubject(response.data.subject);
          setQuestion(response.data.question);
          //setAnswer(response.data.answer);
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
    })
  };
  return(
    <ScrollView>
      <View style={styles.topView}>
        <View style={styles.input}>
          <Text style={styles.txt}>Subject: {subject}</Text>
          <Text style={styles.txt}>From: {sender}</Text>
          <Text style={styles.txt}>Question: {question}</Text>
          <Text style={styles.txt}>Date: {createdAt}</Text>
          <TextInput style={styles.answer} placeholder="Your Answer" multiline={true}
            value={answer}
            onChangeText={answer=> setAnswer(answer)}></TextInput>
            <TouchableOpacity style={styles.askBtn} onPress={sendQuestion}>
            <Text  style={styles.buttonTxt}>Send Answer</Text>
          </TouchableOpacity>
      </View>
      </View> 
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  topView:{
    backgroundColor:"white",
    height:650,
    width:350,
    borderRadius:10,
    elevation:30,
    alignSelf:"center",
    marginTop:30,
    marginBottom:30,
  },
  input:{
    height:550,
    width:300,
    fontSize:20,
    backgroundColor: "white",
    elevation:20,
    shadowColor:"purple",
    alignSelf:"center",
    elevation:20,
    top:50,
    borderColor:"mediumvioletred",
    borderLeftWidth:4,
  },
  txt:{
    height:100,
    width:280,
    fontSize:20,
    marginLeft:20,
    alignSelf:"center",
    top:10,
  },
  buttonTxt:{
    fontSize:18,
    color:"white"
  },
  askBtn: {
    width: 180,
    borderColor: 'white',
    borderWidth: 2,
    height: 60,
    borderRadius: 18,
    marginTop:30,
    alignSelf:"center",
    backgroundColor: 'mediumvioletred',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer:{
    height:100,
    width:240,
    fontSize:20,
    marginLeft:20,
    textAlign:"center",
    alignSelf:"center",
    top:10,
    borderBottomColor:"plum",
    borderBottomWidth:1,
},
});
export default Question; 