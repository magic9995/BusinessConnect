import React, { useState, useEffect, useLayoutEffect,useCallback} from 'react';
import { TouchableOpacity, Text , AsyncStorage} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { collection,addDoc,orderBy, query, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';


export default function Chat() {

  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 10
            }}
            onPress={console.log("Signout")}
          >
            <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
          </TouchableOpacity>
        )
      });
    }, [navigation]);

    useLayoutEffect(() => {
        try {
          const value =  AsyncStorage.getItem('Messages');
          if (value !== null) {
            // We have data!!
            setMessages(value)
          }
        } catch (error) {
          // Error retrieving data
        }
    })

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      })

    return (
      // <>
      //   {messages.map(message => (
      //     <Text key={message._id}>{message.text}</Text>
      //   ))}
      // </>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: '#fff'
        }}
        textInputStyle={{
          backgroundColor: '#fff',
          borderRadius: 20,
        }}
        user={{
          _id: 1
        }}
      />
    );
}