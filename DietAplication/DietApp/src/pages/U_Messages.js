import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity,FlatList,ScrollView  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function U_Messages({navigation}) {

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
    <ScrollView>
      <View>
      <View style={styles.topView}>
      <Text  style={{fontSize:28, textAlign:"center", marginTop:10}}>Ask a Question</Text>
        <TextInput style={styles.input} placeholder="question subject" multiline={true}
          value={subject}
          onChangeText={subject=> setSubject(subject)}  />
        <TextInput style={styles.input} placeholder="question" multiline={true}
          value={question}
          onChangeText={question=> setQuestion(question)}  />
          <TouchableOpacity style={styles.askBtn} onPress={sendQuestion}>
              <Text  style={styles.buttonTxt}>Send Question</Text>
          </TouchableOpacity> 
          </View>
              <FlatList
                style={{marginTop:80,marginBottom:30,}}
                data={data1}
                keyExtractor={( item) => item._id}
                renderItem={({item}) => {
                return (
                <View style={styles.listItem}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('AnswerDetail',{answerdetail:item._id})}}>
                    <Text style={item.readAnswer===true ? styles.sbjt:styles.sbjt2}>Subject: {item.subject}</Text>
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
topView:{
  backgroundColor:"white",
  width:350,
  alignSelf:"center",
  height:300,
  borderRadius:10,
  marginTop:20,
  elevation:30,
},
input:{
  height:70,
  width:300,
  fontSize:19,
  borderBottomColor:"plum",
  borderBottomWidth:1,
  alignSelf:"center",
  marginTop:20,
  textAlign:"center",
  backgroundColor:'rgba(52, 52, 52, 0.1)',
  borderRadius:10,
  opacity: .6,
},
buttonTxt:{
  fontSize:18,
  color:"white"
},
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
txt:{
  marginLeft:10,
  fontSize:22,
  marginTop:10,
  marginBottom:10,
  color:'black',
},
sbjt:{
  marginLeft:5,
  fontSize:17,
  marginTop:10,
  fontWeight:"500"
},
sbjt2:{
  marginLeft:5,
  fontSize:17,
  marginTop:10,
  fontWeight:"500",
  color:'purple'
},
});
export default U_Messages; 