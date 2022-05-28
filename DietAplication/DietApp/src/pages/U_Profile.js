import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,Dimensions   } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import {useEffect} from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;

function U_Profile({navigation}) {
  const [gender, setGender] = React.useState();
  const [months, setMonths] = React.useState(new Array());
  const [birthday, setBirthday] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [weight, setWeight] = React.useState( );
  const [weights, setWeights] = React.useState(new Array(0,0));
  const [illness, setIllness] = React.useState('');
  const [height, setHeight] = React.useState( );
  const [username, setUsername] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [medicine, setMedicine] = React.useState('');

 
    React.useEffect(() => {
      getInfo();
     }, []);
     React.useEffect(() => {
      getWeight();
     }, []);

      const getInfo= async() => {
        const data = await AsyncStorage.getItem('token');
        console.log(data)
      await  axios
        .get('http://10.0.2.2:5000/api/users/me',{
          headers: {Authorization : 'Bearer '  +  data,
           },
          })
        .then(function (response) {
          setUsername(response.data.username);
          setName(response.data.name);
          setSurname(response.data.name);
          setWeight(JSON.stringify(response.data.weight));
          setHeight(JSON.stringify(response.data.height));
          setMedicine(response.data.medicine);
          setGender(response.data.gender);
          setBirthday(response.data.birthday);
          setIllness(response.data.illness);
          //console.log(response);
        })
        
        .catch(function (error) {
          alert(error);
        })
        .then(function () {
        });
  }
 

  const getWeight= async() => {
    const data = await AsyncStorage.getItem('token');
  await  axios
    .get('http://10.0.2.2:5000/api/weights',{
      headers: {Authorization : 'Bearer '  +  data,
       },
      })
      
    .then(function (response) {
      setWeights(response.data.weights);
      console.log(weights);
      setMonths(response.data.months); 
      console.log(months);  
    })
    
    .catch(function (error) {
      alert(error);
    })
    .then(function () {
    });
}
 var month2=months;
 var weight2=weights;
  

const data = {
  labels: month2,
  datasets: [
    {
      data: weight2,
      color: (opacity = 1) => 'coral', // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Monthly Chart"] // optional
};

  const handlePress = async () => {
      const data = await AsyncStorage.getItem('token');
      console.log(data)
        await axios.patch('http://10.0.2.2:5000/api/users/me', {
          gender: gender,
          name: name,
          surname: surname,
          birthday: birthday ,
          weight: weight,
          height: height,
          medicine: medicine,
          illness: illness,
          },{
          headers: {Authorization : 'Bearer '  +  data,
          },
        })
        await axios.post('http://10.0.2.2:5000/api/weights', {
         // weight: [0],
          weight: weight,
          },{
          headers: {Authorization : 'Bearer '  +  data,
          },
        })
        await axios
      .get('http://10.0.2.2:5000/api/weights',{
        headers: {Authorization : 'Bearer '  +  data,
        },
        })
      .then(function (response) {
      setWeights(response.data.weights);
      setMonths(response.data.months);
      console.log(months);
    })
  }
  let avatar;
  if (gender==='female') {
    avatar=require('../../src/image/female.png');
   } else if(gender==='male') {
     avatar=require('../../src/image/male.png');
     
   }else{
     avatar=null;
   }
    return (
      <View View style={styles.cantainer}>
        <ScrollView>
          <Image style={styles.backImg} source={require('../../src/image/ProfileBack.jpg')} />
            <View  style={styles.image}>
            <Image 
              style={{
                width:150,
                height: 170,
                borderRadius: 150/2,
                borderColor: 'plum',}}
                source={avatar}/>
            </View>
        <View style={styles.topView}>
        <TextInput  style={{top:10, marginLeft:120, fontSize:20, fontWeight:"bold",color: 'black',marginTop:10}} placeholder="Full Name "
              value={name}
              onChangeText={name => setName(name)} />
            <Icon name="weight" size={24} color="orange"  style={styles.rightIcons} />
            <TextInput  style={styles.TxtRight}
              value={weight}
              onChangeText={weight => setWeight(weight)} />
            <Text style={styles.topTxt1}>Weight</Text>
            <MaterialComIcon name="human-male-height-variant" size={28} color="orange"  style={styles.rightIcons}/>
            <TextInput style={styles.TxtRight}
              value={height}
              onChangeText={height => setHeight(height)} />
            <Text style={styles.topTxt1}>Length</Text>
            <MaterialIcon name="date-range" size={28} color="orange"  style={styles.rightIcons}/>
            <TextInput style={styles.TxtRight} 
              dateFormat="YYYY-MM-DD"
              value={birthday}
              onChangeText={birthday => setBirthday(birthday)}></TextInput>
            <Text style={styles.topTxt1}>Birthday</Text>
            <TextInput  style={{bottom:375, marginLeft:170, fontSize:20, fontWeight:"bold",color: 'black',marginTop:10}} 
              value={surname}
              onChangeText={surname => setSurname(surname)} />
            <MaterialComIcon name="gender-male-female" size={30} color="orange"  style={styles.leftIcons}/>
            <TextInput style={styles.TxtLeft}
              value={gender}
              onChangeText={gender => setGender(gender)} />
            <Text style={styles.topTxt2}>Gender</Text>
            <Icon name="disease" size={25} color="orange"  style={styles.leftIcons} />
            <TextInput style={styles.TxtLeft} 
              value={illness}
              onChangeText={illness => setIllness(illness)} />
            <Text style={styles.topTxt2}>Illness</Text>
            <MaterialComIcon name="pill" size={25} color="orange"  style={styles.leftIcons}/>
            <TextInput style={styles.TxtLeft} 
              value={medicine}
              onChangeText={medicine => setMedicine(medicine)} />
            <Text style={styles.topTxt2}>Medicine</Text>
        </View>
            <TouchableOpacity style={styles.btnSnd}  onPress={handlePress}>
                <Text style={styles.btnTxt}>SAVE</Text>
            </TouchableOpacity>
          <Text style={{
            color:"teal",
            textAlign:"center", 
            bottom:70,
            marginTop:30,
            fontSize:23,
            fontWeight:'bold'}}>Your Monthly Weight Chart!</Text>
        <View style={styles.centerView}>
          <LineChart
            data={data}
            width={screenWidth-45}
            height={240}
            verticalLabelRotation={20}
            chartConfig={{
            backgroundGradientFrom: "white",
            backgroundGradientTo: "lightsteelblue",
            /*fillShadowGradientOpacity:"purple",*/
            decimalPlaces: 1, 
            color: (opacity = 255) => "purple",
            }}
            withInnerLines={false}
            yAxisLabel={''}
            style={{ right:5, borderRadius: 20}}
            bezier/>
        </View>
    </ScrollView> 
</View>
 );
}
const styles = StyleSheet.create({
cantainer: {
    flex:1,
  },
backImg:{
    height:180,
  },
nameinput:{
  borderBottomWidth:1,
  borderBottomColor:"thistle",
  width:250,
  alignSelf:"center",
},
icon1:{
    left: 58,
    marginTop:18,
    bottom:110,
  },
icon2:{
    left: 78,
    marginTop:18,
    top:25,
    bottom:115,
  },
image: {
    alignSelf:"center",
    bottom:100,
    marginBottom:30,
    width:150,
    height: 150,
    borderRadius: 150/2,
  },
buttonContainer:{
    height:55,
    left:110,
    bottom:145,
    alignItems:'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
userNameText:{
    bottom:120,
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    marginBottom:20,
  },
topView: {
    bottom:110,  
    backgroundColor: 'white',
    height: 440,
    alignSelf:"center",
    width:340,
    borderRadius: 20,
    shadowColor: 'purple',
    elevation: 15,
  }, 
rightIcons:{
    top:60,
    left:20,
  },
leftIcons:{
    left:210,
    bottom:330,
  },
TxtRight: {
    color: 'purple',
    bottom:5,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 55,
  },
topTxt1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 60,
  },
TxtLeft: {
    color: 'purple',
    marginTop: 10,
    bottom:400,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 240,
  },
topTxt2: {
    marginTop: 5,
    bottom:400,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 240,
  },
centerView:{
    bottom:50,
    marginLeft:30,
  },
  btnSnd: {
    height:40,
    width:120,
    bottom:100,
    borderRadius:30,
    backgroundColor:'mediumvioletred',
    justifyContent: 'center',
    alignSelf:'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 18,
  },
});

export default U_Profile; 