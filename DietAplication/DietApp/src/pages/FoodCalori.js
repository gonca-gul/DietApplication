import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import {Button, View, Text,StyleSheet,TextInput, Image, ScrollView,FlatList, StatusBar  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



function FoodCalori({navigation}) {
  
  const [search, setSearch] = React.useState( );
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);

    React.useEffect(() => {
        foods();
       },[]);
    const foods = () => {
        axios
        .get('http://10.0.2.2:5000/api/foods')
        .then(function (response) {
          setData1(response.data);
          setData2(response.data)
        })
          .catch(function (error) {
          alert(error);
        })
          .then(function () {
        })
    };
     
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data1.filter(
        function (item) {
          const itemData = item.name
          
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        
      });
      setData1(newData);
      setSearch(text);
    } else {
      setData1(data2);
      setSearch(text);
    }
  }
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
    return (
      <View View style={styles.cantainer}>
        <StatusBar barStyle="light-content" backgroundColor="limegreen" />
        <View style={{height:70,backgroundColor:"thistle"}}>
        <TextInput style={styles.SearchInput} placeholder='Search..'
        value={search}
        onChangeText={text=> searchFilterFunction(text)}/>
        <FontAwesome name="search" size={30} color="darkgray" style={{bottom:40,marginLeft:340}}  />  
          </View>
          <FlatList
            data={data1}
            ItemSeparatorComponent={ItemSeparatorView}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
            return (
            <View style={styles.listItem}>
                <Image style={styles.image}  source={require('../../src/image/foodicon.jpg')}></Image>
                <Text style={styles.txt}>{item.name}</Text>
                <Text style={styles.quantity}>({item.quantity})</Text>
                <Text style={styles.Cal}>{item.calorie} kcal</Text>
            </View>
          );
        }}/>
    </View>
 );
}

const styles = StyleSheet.create({
  SearchInput:{
    marginTop:10,
    padding:12,
    width:380,
    alignSelf:"center",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius:20,
    borderColor:"white",
    fontSize:17,
  },
image:{
    height:70,
    width:70,
    left:10,
    top:20,
    borderWidth:2,
    borderColor:'thistle',
    borderRadius:20,
    },
listItem: {
    height:100,
    backgroundColor: "white",
    borderColor: "thistle",
    elevation:20,
    shadowColor:"purple" 
    },
icon:{
    bottom:60,
    left:330,
    },
txt:{
    bottom:50,
    left:100,
    fontSize:20,
    color:'darkslategrey',
    },
Cal:{
  bottom:95,
  marginLeft:310,
  fontSize:19,
},
quantity:{
  bottom:45,
  left:105,
  fontSize:17,
}


  });

export default FoodCalori; 