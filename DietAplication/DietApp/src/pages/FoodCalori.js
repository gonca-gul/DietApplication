import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView, TouchableHighlight  } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import SearchBar from 'react-native-search-bar';


function FoodCalori({navigation}) {
    return (
      <View View style={styles.cantainer}>
          <SearchBar
          placeholder="Search food"
          width={340}
          left={20}
          height={50}
          />
          <ScrollView>
          </ScrollView>
      </View>
 );
}

const styles = StyleSheet.create({
cantainer: {
  flex:1,
  backgroundColor: 'white',
},

});
export default FoodCalori; 