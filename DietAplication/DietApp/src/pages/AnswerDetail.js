import * as React from 'react';
import { NavigationContainer, useLinkProps, useRoute  } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView,FlatList  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function AnswerDetail({navigation,route}) {
    route = useRoute();
    const answerdetail = route.params.answerdetail; 

  const [subject, setSubject] = React.useState();
  const [answer, setAnswer] = React.useState();
  const [to, setTo] = React.useState();
  const [createdAt, setCreatedAt] = React.useState();
  const [question, setQuestion] = React.useState();
  const [data1, setData] = React.useState([]);


    React.useEffect(() => {
        getDetail();
        readAnswer();
       });
       const readAnswer = async () => {
        const data = await AsyncStorage.getItem('token');
        await axios
        .get('http://10.0.2.2:5000/api/questions/readAnswer/'+answerdetail,{
          headers: {Authorization : 'Bearer '  +  data,
          },
        })
        .then(function (response) {
        })
      };
       const getDetail = async (item) => {
        const data = await AsyncStorage.getItem('token');
        await axios
          .get('http://10.0.2.2:5000/api/questions/getAnswer/'+answerdetail,{
            headers: {Authorization : 'Bearer '  +  data,
             },
            })
          .then(function (response) {
            setTo(response.data.to);
            setSubject(response.data.subject);
            setQuestion(response.data.question);
            setCreatedAt(response.data.createdAt);
            setAnswer(response.data.answer);
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
      <View style={styles.topView}>
      <View style={styles.input}>
      <Text style={styles.txt}>Subject: {subject}</Text>
          <Text style={styles.txt}>From: {to}</Text>
          <Text style={styles.txt}>Your Question: {question}</Text>
          <Text style={styles.txt}>Dietitian's Answer: {answer}</Text>
          <Text style={styles.txt}>Date: {createdAt}</Text>
          </View>
          </View>  
      </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
topView:{
  backgroundColor:"white",
  height:600,
  width:350,
  borderRadius:10,
  elevation:30,
  alignSelf:"center",
  marginTop:30,
  marginBottom:30,
},
input:{
  height:500,
  width:300,
  fontSize:20,
  backgroundColor: "white",
  elevation:20,
  shadowColor:"purple",
  alignSelf:"center",
  elevation:30,
  top:50,
  borderColor:"mediumvioletred",
  borderLeftWidth:4,
},
txt:{
  height:100,
  width:300,
  fontSize:20,
  marginLeft:20,
  alignSelf:"center",
  top:10,
},

});
export default AnswerDetail; 