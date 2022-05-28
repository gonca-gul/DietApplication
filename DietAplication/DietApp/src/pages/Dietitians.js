import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,FlatList, StatusBar, VirtualizedList  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Dietitians({navigation}) {
  const [search, setSearch] = React.useState( );
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);

    React.useEffect(() => {
        dietitians();
       },[]);
    const dietitians = () => {
        axios
        .get('http://10.0.2.2:5000/api/dietitians')
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

  const reqDiet = async (item) => {
      const data = await AsyncStorage.getItem('token');
      await axios
      .patch('http://10.0.2.2:5000/api/dietLists/requestDietList/'+item.username,{},{
        headers: {Authorization : 'Bearer '  +  data,
        },
      })
      .then(async response => {
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
          const itemData = item.username
          
            ? item.username.toUpperCase()
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
          //height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
    return (
      <View View style={styles.cantainer}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
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
                    <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('GetProfile',{items:item.username})}>
                        <Image style={styles.image}  source={require}></Image>
                        <Text style={styles.txt}>{item.username}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnReq} onPress={() => reqDiet(item)}>
                <FontAwesome5 name="plus" size={28} color="darkgray" style={styles.icon}  />  
              </TouchableOpacity>
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
  top:10,
  borderWidth:2,
  borderColor:'thistle',
  borderRadius:30,
},
listItem: {
  height:90,
  backgroundColor: "white",
  borderColor: "thistle",
  elevation:20,
  shadowColor:"purple" 
},
icon:{
  bottom:70,
  left:340,
},
txt:{
  bottom:40,
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

export default Dietitians; 