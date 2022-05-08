import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat'
import {Button, View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView  } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';


function Messages({navigation}) {
    const [messages, setMessages] = React.useState([]);


   React.useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])
     
      const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
     
      return (
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )
    
}

const styles = StyleSheet.create({



});
export default Messages; 