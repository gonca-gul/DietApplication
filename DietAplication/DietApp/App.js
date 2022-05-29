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
 import D_Notifications from './src/pages/D_Notifications';
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
import GetUserProfile from './src/pages/GetUserProfile';
import Messages from './src/pages/U_Messages';
import { NotificationProvider } from 'react-native-internal-notification';
import MyDiet from './src/pages/MyDiet';
import D_Messages from './src/pages/D_Messages';
import Question from './src/pages/Questions';
import AnswerDetail from './src/pages/AnswerDetail';
import D_Settings from './src/pages/D_Settings';
import D_ChangePass from './src/pages/D_ChangePass';
import U_ChangePass from './src/pages/U_ChangePass';
import D_ForgotPass from './src/pages/D_ForgotPass';
import U_ForgotPass from './src/pages/U_ForgotPass';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const NotifNumber = (notifnumber) => {
  if (notifnumber==0) {
    return null;
  
   }else{
     return notifnumber;
   }}


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  React.useEffect(() => {
    DietitianNotifications();
   });
  const [notf, setNotf] = React.useState( );
  const DietitianNotifications = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios
    .get('http://10.0.2.2:5000/api/notifications/dietitianNotification',{
      headers: {Authorization : 'Bearer '  +  data,
      },
    })
    .then(function (response) {
      setNotf(response.data);
      //console.log(notif);
    })
  };
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
    <Tab.Screen name="NOTIFICATIONS"  options={{  tabBarBadge: NotifNumber(notf),
      headerTitleAlign: "center",
    tabBarIcon: () => (<Ionicons name='notifications-outline' size={24} color='purple' />) }}  component={D_Notifications}/>
  </Tab.Navigator>
  </NotificationProvider>
   );
 }

 
const TabUser = createBottomTabNavigator();
 const TabUserNavigator = () => {
  React.useEffect(() => {
    Notifications();
   });
  const [notif, setNotif] = React.useState( );
  const Notifications = async () => {
    const data = await AsyncStorage.getItem('token');
    await axios
    .get('http://10.0.2.2:5000/api/notifications/userNotification',{
      headers: {Authorization : 'Bearer '  +  data,
      },
    })
    .then(function (response) {
      setNotif(response.data);
      console.log(notif);
    })
  };
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
   <Tab.Screen name="NOTIFICATIONS"  options={{  tabBarBadge: NotifNumber(notif),
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
         headerTitleAlign: "center",
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
        <Stack.Screen name="D_ChangePass" component={D_ChangePass} 
         options={{ title: 'Change Your Password',
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
         <Stack.Screen name="U_ChangePass" component={U_ChangePass} 
         options={{ title: 'Change Password',
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
          <Stack.Screen name="D_ForgotPass" component={D_ForgotPass} 
         options={{ title: 'Forgot Password',
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
         <Stack.Screen name="U_ForgotPass" component={U_ForgotPass} 
         options={{ title: 'Forgot Password',
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
        <Stack.Screen name="D_Settings" component={D_Settings} 
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
         <Stack.Screen name="MyDiet" component={MyDiet} 
         options={{ title: 'My Diet List',
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
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
         <Stack.Screen name="D_Messages" component={D_Messages} 
         options={{ title: 'MESSAGES',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
         <Stack.Screen name="Question" component={Question} 
         options={{ title: 'Answer Your Questıon',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'limegreen',
        },
        }} />
        <Stack.Screen name="AnswerDetail" component={AnswerDetail} 
         options={{ title: 'Answer To the Question',
         headerTitleAlign: "center",
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
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'lightgreen',
        },
        }} />
         <Stack.Screen name="GetUserProfile" component={GetUserProfile} 
         options={{ title: 'PROFILE',
         headerTitleAlign: "center",
         headerTitleStyle: {
          color: 'ivory',
        },
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: 'thistle',
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
