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
       });
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
            console.log(response.data)
          })
            .catch(function (error) {
            alert(error);
          })
            .then(function () {
          })
      };
 
 
  return(
    <ScrollView>
      <View style={styles.topView}>
          <Text style={styles.input}>{subject} {to}</Text>
          <Text style={styles.input}>{question}{answer}{createdAt}</Text>
          
      </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
topView:{
  backgroundColor:"white",
  height:500,
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

txt:{
  left: 25,
  marginTop:30,
  fontSize:20,
  fontWeight:'500',
  color:'black',
},
});
export default AnswerDetail; 