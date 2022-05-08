import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, Image, ScrollView,Dimensions   } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;

function MyDiet({navigation}) {
  
   
      
  
      return (
        <View View style={styles.cantainer}>
          <ScrollView>
      
          <View style={styles.centerView}>
         
          </View>
      </ScrollView> 
  </View>
   );
  }
  const styles = StyleSheet.create({
  cantainer: {
      flex:1,
    },
 
  });
  
  export default MyDiet; 