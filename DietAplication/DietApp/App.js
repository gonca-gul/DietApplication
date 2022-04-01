/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import type {Node} from 'react';
 import {Button, View, Text } from 'react-native';
 import Welcome from './src/pages/Welcome';
 import SignUp from './src/pages/SignUp';
 import UserLogin from './src/pages/UserLogin';
 import Login from './src/pages/Login';
 import D_HomePage from './src/pages/D_HomePage';
 import D_Profile from './src/pages/D_Profile';
 import Notification from './src/pages/Notifications';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import AntIcon from "react-native-vector-icons/AntDesign";
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import FoodCalori from './src/pages/FoodCalori';
 import Settings from './src/pages/Settings';
 import U_HomePage from './src/pages/U_HomePage';
 import U_Profile from './src/pages/U_Profile';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
   return(
  <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "purple",
      tabBarInactiveTintColor: "purple",
      tabBarLabelStyle: {
      fontSize: 13,
      },
      headerTitleStyle: {
        color: 'ivory',
      },
      headerStyle: {
        backgroundColor: 'limegreen',
      },
    })}
    >
    <Tab.Screen name="HOME"  options={{ 
    tabBarIcon: () => (<AntIcon name='home' size={24} color='purple'/>) }} component={D_HomePage}/>
    <Tab.Screen name="PROFİLE"  options={{ 
    headerRight: () => (
      <Button 
        onPress={() => alert('Your Information Has Been Saved!')}
        title="SAVE"
        color='limegreen'/>
    ),
    tabBarIcon: () => (<AntIcon name='user' size={24} color='purple' />) }} component={D_Profile}/>
    <Tab.Screen name="NOTIFICATIONS"  options={{  
    tabBarIcon: () => (<Ionicons name='notifications-outline' size={24} color='purple' />) }}  component={Notification}/>
  </Tab.Navigator>
   );
 }

 const TabUser = createBottomTabNavigator();
 const TabUserNavigator = () => {
  return(
 <Tab.Navigator screenOptions={({ route }) => ({
     tabBarActiveTintColor: "black",
     tabBarInactiveTintColor: "purple",
     tabBarLabelStyle: {
     fontSize: 13,
     },
     headerTitleStyle: {
       color: 'ivory',
     },
     headerStyle: {
       backgroundColor: 'limegreen',
     },
   })}
   >
   <Tab.Screen name="HOME"  options={{ 
   tabBarIcon: () => (<AntIcon name='home' size={24} color='purple' />) }} component={U_HomePage}/>
   <Tab.Screen name="PROFİLE"  options={{ 
   headerRight: () => (
     <Button 
       onPress={() => alert('Your Information Has Been Saved!')}
       title="SAVE"
       color='limegreen'/>
   ),
   tabBarIcon: () => (<AntIcon name='user' size={24} color='purple' />) }} component={U_Profile}/>
   <Tab.Screen name="NOTIFICATIONS"  options={{  
   tabBarIcon: () => (<Ionicons name='notifications-outline' size={24} color='purple' />) }}  component={Notification}/>
   </Tab.Navigator>
  );
}

 const Stack = createNativeStackNavigator();
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="DietTracker" component={Welcome} 
         options={{
          title: 'DİET TRACKER',
          headerTitleStyle: {
            color: 'purple',
          },
          headerStyle: {
            backgroundColor: 'ivory',
          },
        }}/>
        <Stack.Screen name="Login" component={Login}
         options={{
          title: 'Dietitian Login',
          headerTitleStyle: {
            color: 'ivory',
          },
          headerStyle: {
            backgroundColor: 'limegreen',
          },
        }} />
        <Stack.Screen name= "UserLogin" component={UserLogin}
         options={{
          title: 'User Login',
          headerTitleStyle: {
            color: 'ivory',
          },
          headerStyle: {
            backgroundColor: 'limegreen',
          },
        }} />
        <Stack.Screen name="SignUp" component={SignUp} 
         options={{
          title: 'Sign Up',
         }}/>
        <Stack.Screen name="D_HomePage" component={TabNavigator}
         options={{ headerShown: false,
        }} />
        <Stack.Screen name="U_HomePage" component={TabUserNavigator}
         options={{ headerShown: false,
        }} />
        <Stack.Screen name="FoodCalori" component={FoodCalori} 
         options={{ title: 'Find Food Calori',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Settings" component={Settings} 
         options={{ title: 'Settings',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        </Stack.Navigator>
     </NavigationContainer>

   );
 }

export default App;
