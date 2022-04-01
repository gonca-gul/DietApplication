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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const includeExtra = true;

function U_Profile({navigation}) {

    const [response, setResponse] = React.useState(null);
    const onButtonPress = React.useCallback((type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse); 
      
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    }, []);
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov", "Dec"],
      datasets: [
        {
          data: [10, 20, 15, 40, 50, 45,60,45,72,75,52,65],
          color: (opacity = 1) => 'coral', // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Monthly Chart"] // optional
    };
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
        <Text style={styles.userNameText}>GONCA GÜL</Text>
        <View style={styles.topView}>
            <Icon name="weight" size={24} color="orange"  style={styles.rightIcons} />
            <TextInput  style={styles.TxtRight}>WEIGHT</TextInput>
            <Text style={styles.topTxt1}>Weight</Text>
            <MaterialComIcon name="human-male-height-variant" size={28} color="orange"  style={styles.rightIcons}/>
            <TextInput style={styles.TxtRight}>LENGTH</TextInput>
            <Text style={styles.topTxt1}>Length</Text>
            <MaterialIcon name="date-range" size={28} color="orange"  style={styles.rightIcons}/>
            <TextInput style={styles.TxtRight}>AGE</TextInput>
            <Text style={styles.topTxt1}>Age</Text>
            <MaterialComIcon name="gender-male" size={25} color="orange"  style={styles.leftIcons}/>
            <MaterialComIcon name="gender-female" size={25} color="orange"  style={styles.leftIcons}/>
            <TextInput style={styles.TxtLeft}>GENDER</TextInput>
            <Text style={styles.topTxt2}>Gender</Text>
            <Icon name="disease" size={25} color="orange"  style={styles.leftIcons} />
            <TextInput style={styles.TxtLeft}>ILLNESS</TextInput>
            <Text style={styles.topTxt2}>Any Illness</Text>
            <MaterialComIcon name="pill" size={25} color="orange"  style={styles.leftIcons}/>
            <TextInput style={styles.TxtLeft}>MEDICINE</TextInput>
            <Text style={styles.topTxt2}>Any Medicine</Text>
        </View>
          <Text style={{
            color:"teal",
            left:35, 
            bottom:80,
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
            yAxisLabel={' '}
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
    left:140,
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
    left:190,
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
    marginLeft: 220,
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