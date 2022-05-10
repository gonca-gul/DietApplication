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
import moment from 'moment';


const screenWidth = Dimensions.get("window").width;
const includeExtra = true;

function U_Profile({navigation}) {
  const [gender, setGender] = React.useState();
  const [months, setMonths] = React.useState(new Array());
  const [birthday, setBirthday] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [weight, setWeight] = React.useState( );
  const [weights, setWeights] = React.useState(new Array(1,2));
  const [illness, setIllness] = React.useState('');
  const [height, setHeight] = React.useState( );
  const [username, setUsername] = React.useState('');
  const [medicine, setMedicine] = React.useState('');
  const [response, setResponse] = React.useState(null);

    const onButtonPress = React.useCallback((type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse); 
      
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    }, []);
    
  

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
          setWeight(JSON.stringify(response.data.weight));
          setHeight(JSON.stringify(response.data.height));
          setMedicine(response.data.medicine);
          setGender(response.data.gender);
          setBirthday(response.data.birthday);
          setIllness(response.data.illness);
          console.log(response);
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
          date:"2022-01-10",
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
    })
  }
    return (
      <View View style={styles.cantainer}>
        <ScrollView>
          <Image style={styles.backImg} source={require('../../src/image/ProfileBack.jpg')} />
            <View  style={styles.image}>
            {response?.assets &&
            response?.assets.map(({uri}) => (
            <Image 
              key={''}
              style={{
                marginBottom:20,
                width:150,
                height: 150,
                borderRadius: 150/2,
                borderWidth:1,
                borderColor: 'plum',}}
              source={{uri: uri}}/>))}
            </View>
          <View style={styles.buttonContainer}>
            <AntIcon name='camera' size={25} color='purple' style={styles.icon1} />
            <AntIcon name='upload' size={24} color='purple' style={styles.icon2} />
              {actions.map(({title, type, options}) => {
            return (
              <Button
                color='transparent'
                title='.......'
                key={title}
                onPress={() => onButtonPress(type, options) }>
              </Button>
            );
          })}
        </View>
        <Text style={styles.userNameText}>{username}</Text>
        <View style={styles.topView}>
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
              
            <Text style={styles.topTxt1}>Age</Text>
            <MaterialComIcon name="gender-male" size={25} color="orange"  style={styles.leftIcons}/>
            <MaterialComIcon name="gender-female" size={25} color="orange"  style={styles.leftIcons}/>
            <TextInput style={styles.TxtLeft}
              value={gender}
              onChangeText={gender => setGender(gender)} />
            <Text style={styles.topTxt2}>Gender</Text>
            <Icon name="disease" size={25} color="orange"  style={styles.leftIcons} />
            <TextInput style={styles.TxtLeft} 
              value={illness}
              onChangeText={illness => setIllness(illness)} />
            <Text style={styles.topTxt2}>Any Illness</Text>
            <MaterialComIcon name="pill" size={25} color="orange"  style={styles.leftIcons}/>
            <TextInput style={styles.TxtLeft} 
              value={medicine}
              onChangeText={medicine => setMedicine(medicine)} />
            <Text style={styles.topTxt2}>Any Medicine</Text>
        </View>
            <TouchableOpacity style={styles.btnSnd}  onPress={handlePress}>
                <Text style={styles.btnTxt}>SAVE</Text>
            </TouchableOpacity>
          <Text style={{
            color:"teal",
            left:35, 
            bottom:80,
            marginTop:30,
            marginBottom:15,
            fontSize:21,
            fontWeight:'bold'}}>Your Monthly Weight Chart!</Text>
        <View style={styles.centerView}>
          <LineChart
            data={data}
            width={screenWidth-45}
            height={220}
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
    left:120,
    bottom:100,
    marginBottom:20,
    width:150,
    height: 150,
    borderRadius: 150/2,
    borderWidth:1,
    borderColor: 'plum',
  },
buttonContainer:{
    height:55,
    left:105,
    bottom:145,
    alignItems:'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
userNameText:{
    bottom:140,
    textAlign:'center',
    fontSize:22,
    fontWeight:'bold',
    color:'black',
  },
topView: {
    bottom:110,  
    backgroundColor: 'white',
    height: 360,
    marginLeft:25,
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
    left:200,
    bottom:300,
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
    bottom:360,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 230,
  },
topTxt2: {
    marginTop: 5,
    bottom:360,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 220,
  },
centerView:{
    bottom:90,
    backgroundColor: 'white',
    height: 250,
    marginLeft:25,
    width:340,
    borderRadius: 20,
    shadowColor: 'purple',
    elevation: 15,
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
interface Action {
    title: string;
    type: 'capture' | 'library';
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
  }
  const actions: Action[] = [
    {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
      },
    },
    {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  ];

export default U_Profile; 