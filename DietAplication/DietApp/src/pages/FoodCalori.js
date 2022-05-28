import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,FlatList, StatusBar, VirtualizedList  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNotification } from 'react-native-internal-notification';
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
        <TextInput style={styles.SearchInput} placeholder='Search..'
        value={search}
        onChangeText={text=> searchFilterFunction(text)}/>
          <FlatList
            style={{marginTop:10}}
            data={data1}
            ItemSeparatorComponent={ItemSeparatorView}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
            return (
            <View style={styles.listItem}>
                <Image style={styles.image}  source={require}></Image>
                <Text style={styles.txt}>{item.name}</Text>
            </View>
          );
        }}/>
    </View>
 );
}

const styles = StyleSheet.create({
SearchInput:{
  padding:10,
  backgroundColor:"white",
  fontSize:17,
},
image:{
    height:70,
    width:70,
    left:20,
    top:20,
    borderWidth:2,
    borderColor:'thistle',
    borderRadius:40,
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
    bottom:35,
    left:100,
    fontSize:20,
    color:'darkslategrey',
    },
txtbtn:{
    fontWeight:'bold',
    color:'mediumorchid',
    bottom:60,
    left:290,
    },
btnReq:{
    width:100,
    height:100,
    },
txtReq: {
  color:'red',
}
  });

export default FoodCalori; 