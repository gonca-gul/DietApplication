import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import SearchBar from 'react-native-search-bar';
import AntIcon from 'react-native-vector-icons/AntDesign';



function FoodCalori({navigation}) {
  const [name, setName] = React.useState("");
  const [calorie, setCalorie] = React.useState("");
  const [quantity, setQuantity] = React.useState("");


  const callApi = () => {
    axios
    .get('http://10.0.2.2:5000/api/foods/yumurta')
    .then(function (response) {
      setName(JSON.stringify(response.data.name));
      setCalorie(JSON.stringify(response.data.calorie));
      setQuantity(JSON.stringify(response.data.quantity));
      console.log(response);
    })
      .catch(function (error) {
      alert(error);
    })
      .then(function () {
    });
}
    return (
      <View View style={styles.cantainer}>
          <SearchBar
            placeholder="Search food"
            marginTop={40}
            width={340}
            left={20}
            height={50}
            onChange={callApi}/>
          <TouchableOpacity style={styles.btn}>
            <AntIcon name="check" size={35} color='purple' />
          </TouchableOpacity>
          <ScrollView>
            <View style={styles.foodView}>
              <Text style={{textAlign:'left',top:25,fontSize:22,color:'black',fontWeight:'500'}} >{name}</Text>
              <Text style={{textAlign:'left',top:25,fontSize:16,color:'purple'}}>({quantity})</Text>
              <Text style={{textAlign:'right',bottom:25,fontSize:22}}>{calorie} kcal</Text>
            </View>
          </ScrollView>
      </View>
     
 );
}

const styles = StyleSheet.create({
cantainer: {
  flex:1,
  backgroundColor: 'white',
},
btn:{
  height:40,
  width:40,
  left:320,
  bottom:35,
},
foodView:{
  marginTop:20,
  height:90,
  alignSelf:'center',
  width:320,
  borderRadius:50,
  shadowColor:'orchid',
  elevation:40,
},

});
export default FoodCalori; 