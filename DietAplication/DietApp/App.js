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
 import DietTracker from './src/pages/DietTracker';
 import SignUp from './src/pages/SignUp';
 import Login from './src/pages/Login';
 import UserLogin from './src/pages/UserLogin';

 const Stack = createNativeStackNavigator();

 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="DietTracker" component={DietTracker} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name= "UserLogin" component={UserLogin} />
         <Stack.Screen name="SignUp" component={SignUp} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

export default App;
