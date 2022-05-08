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
 import Exercises from './src/pages/Exercises';
 import Butt_Kicks from './src/pages/Exercises/Butt_Kicks';
 import Double_Leg_Raise from './src/pages/Exercises/Double_Leg_Raise';
 import Straight_Leg_Raise from './src/pages/Exercises/Straight_Leg_Raise';
 import Plank from './src/pages/Exercises/Plank';
 import Climber from './src/pages/Exercises/Climber';
 import Reverse_Crunch from './src/pages/Exercises/Reverse_Crunch';
import Squat from './src/pages/Exercises/Squat';
import Cobra from './src/pages/Exercises/Cobra';
import Clients from './src/pages/Clients';
import CreateDiet from './src/pages/CreateDiet';
import Dietitians from './src/pages/Dietitians';
import About from './src/pages/About';
import GetProfile from './src/pages/GetProfile';
import Messages from './src/pages/Messages';
import { NotificationProvider } from 'react-native-internal-notification';



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
   return(
    <NotificationProvider>
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
      headerTitleAlign: "center",
      headerTitleStyle: {
          color: 'ivory',
          fontSize:22,
        },
    tabBarIcon: () => (<AntIcon name='home' size={24} color='purple'/>) }} component={D_HomePage}/>
    <Tab.Screen name="PROFİLE"  options={{          
      headerTitleAlign: "center",
    tabBarIcon: () => (<AntIcon name='user' size={24} color='purple' />) }} component={D_Profile}/>
    <Tab.Screen name="NOTIFICATIONS"  options={{ 
      headerTitleAlign: "center",
    tabBarIcon: () => (<Ionicons name='notifications-outline' size={24} color='purple' />) }}  component={Notification}/>
  </Tab.Navigator>
  </NotificationProvider>
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
   <Tab.Screen name="HOME"  options={{ headerTitleAlign: "center",
   tabBarIcon: () => (<AntIcon name='home' size={24} color='purple' />) }} component={U_HomePage}/>
   <Tab.Screen name="PROFİLE"  options={{ headerTitleAlign: "center",
   tabBarIcon: () => (<AntIcon name='user' size={24} color='purple' />) }} component={U_Profile}/>
   <Tab.Screen name="NOTIFICATIONS"  options={{  
   tabBarIcon: () => (<Ionicons name='notifications-outline' size={24} color='purple' />) }}  component={Notification}/>
   </Tab.Navigator>
  );
}

 const Stack = createNativeStackNavigator();
 function App() {
   return (
    <NotificationProvider>
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="DietTracker" component={Welcome} 
         options={{
          title: 'DİET TRACKER',
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: 'purple',
          },
          headerTintColor: "#fff",
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
          headerTintColor: "#fff",
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
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: 'limegreen',
          },
        }} />
        <Stack.Screen name="SignUp" component={SignUp} 
         options={{
          title: 'Sign Up',
          headerTitleAlign: "center",
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
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Clients" component={Clients} 
         options={{ title: 'My Client List',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'white',
          fontSize:22,
        },
        headerTintColor: "linen",
        headerStyle: {
          backgroundColor: 'limegreen',
          
        },
        }} />
        <Stack.Screen name="CreateDiet" component={CreateDiet} 
         options={{ title: 'Create a Diet',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
          fontSize:24,
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Settings" component={Settings} 
         options={{ title: 'Settings',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="About" component={About} 
         options={{ title: 'ABOUT US',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Exercises" component={Exercises} 
         options={{ title: 'EXERCISES',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Dietitians" component={Dietitians} 
         options={{ title: 'DIETITIANS',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Messages" component={Messages} 
         options={{ title: 'MESSAGES',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="GetProfile" component={GetProfile} 
         options={{ title: 'PROFILE',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Butt_Kicks" component={Butt_Kicks} 
         options={{ title: 'Butt Kicks',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Double_Leg_Raise" component={Double_Leg_Raise} 
         options={{ title: 'Double Leg Raise',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Straight_Leg_Raise" component={Straight_Leg_Raise} 
         options={{ title: 'Straight Leg Raise',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Plank" component={Plank} 
         options={{ title: 'Plank',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
         <Stack.Screen name="Climber" component={Climber} 
         options={{ title: 'Mountier Climber',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Reverse_Crunch" component={Reverse_Crunch} 
         options={{ title: 'Reverse Crunch',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Squat" component={Squat} 
         options={{ title: 'Squat',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="Cobra" component={Cobra} 
         options={{ title: 'Cobra Stretch',
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        </Stack.Navigator>
     </NavigationContainer>
     </NotificationProvider>

   );
 }

export default App;
