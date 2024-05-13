import React, { useState, useLayoutEffect, useEffect } from "react";
import { StatusBar, View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, Keyboard } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LeftArrowBlackIcon from "../assets/Icons/LeftArrowBlackIcon";
import SendIcon from "../assets/Icons/SendIcon";
import { useChatbotMutation } from "../services/chatbot/chatbotApi";

//
const Header = ({ name, isOnline, imageUrl, navigation }) => {
  return (
    <View className="flex flex-row justify-between items-center bg-white ">
      <View className="flex flex-row items-center my-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrowBlackIcon className='mb-1 mx-3' />
        </TouchableOpacity>
        <Image className="w-[37px] h-[37px] rounded-full  mr-2" source={imageUrl} alt="user" />
        <View className="flex flex-column ">
          <View className="flex flex-row items-center ">
            <Text className="text-[16px] font-bold text-black"> {name} </Text>
          </View>
          <Text className="text-[11px] text-gray-400"> Online </Text>
        </View>
      </View>
    </View>

  );
}

const ProfilePicture = ({ imageUrl }) => (
  <Image
    source={{ uri: imageUrl }}
    style={{ width: 30, height: 30, borderRadius: 25 }}
  />
);


const RenderMessageItem = ({ item }) => {
  const sender = item.sender;
  const alignRight = sender === 'me';

  return (
    <View style={styles.messageContainer}>
      <View style={{ flexDirection: alignRight ? 'row-reverse' : 'row' }}>
        {alignRight ? null : <ProfilePicture imageUrl={item.profileImage} />
        }
        <View className='mx-1' style={{ backgroundColor: alignRight ? '#031A2C' : '#EAECF2', borderRadius: 10, padding: 10, maxWidth: '80%' }}>
          <Text style={{ color: alignRight ? '#FFFFFF' : '#63697B' }}>{item.message}</Text>
        </View>
      </View>
    </View>
  );
};



const initialChat = [

];



const ChatBot = ({ navigation }) => {
  const name = "Chatbot";
  const [chat, setChat] = useState(initialChat);
  const imageUrl = "https://media.discordapp.net/attachments/1232163662488277017/1238137708291817595/image.png?ex=663e3119&is=663cdf99&hm=28a1c3aa41907b2e0d05536e50f881a040931f2f793ca3a7f5fa1309c841a987&=&format=webp&quality=lossless&width=556&height=531";
  const isOnline = "Online"

  const [request, setResquest] = useState('');

  const [chatbot] = useChatbotMutation()

  const handleSetRequest = (value) => {
    setResquest(value)
  }

  const handleAnswer = () => {
    const newQuestion = {
      id: String(chat.length + 1), // Genera un nuevo ID basado en la longitud del chat
      sender: "me",
      message: request, // Asume que la API devuelve un objeto con la respuesta en 'response'
      profileImage: "https://media.discordapp.net/attachments/1232163662488277017/1239432476305133621/ic_launcher_round.png?ex=6642e6f1&is=66419571&hm=ee3436f0ecc947d510ece3fdcd426538a74691b04e196e32f52c5d3e39627acb&=&format=webp&quality=lossless&width=240&height=240"
    };
    setChat(prevChat => [newQuestion, ...prevChat,]);
    setResquest('');
  }

  const handleChatBot = async () => {
    const formData = {
      question: request
    }
    const res = await chatbot(formData)
    console.log(res)
    
    const message = res.data.answer;

    const newAnswer = {
      id: String(chat.length + 2),
      sender: "bot",
      message: message,
      profileImage: "https://media.discordapp.net/attachments/1232163662488277017/1232164300907352065/BigButton.png?ex=662875ed&is=6627246d&hm=7fa1004820624aa6c7dae7106cf91b85e2eb12054d958cad95014057d0e870b3&=&format=webp&quality=lossless&width=236&height=236"
    };
    setChat(prevChat => [newAnswer,...prevChat]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaProvider>
      <Header className='shadow-md' name={name} isOnline={isOnline} imageUrl={{ uri: imageUrl }} navigation={navigation} />

      <FlatList
        data={chat}
        renderItem={RenderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
        inverted // Muestra los mensajes más recientes en la parte inferior
      />
      <View className='flex w-full flex-row items-center px-3 justify-between bg-[#F6F6F6] border-t border-[#D8D8D8]'>
        <TextInput
          style={styles.input}
          className='h-12 w-[90%]'
          placeholder="Escribe un mensaje"
          value={request}
          onChangeText={handleSetRequest} />
        <TouchableOpacity onPress={() => {
          handleChatBot();
          handleAnswer();
        }}>
          <SendIcon color={'#031A2b'} />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 0,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',


  },
  chatContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  senderMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#F36D3E',
    borderRadius: 10,
    padding: 8,
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    //backgroundColor: '#f5f5f5',
    marginVertical: 2,
    borderRadius: 10,
    maxWidth: '100%',
  },
  receiverMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#EAECF2',
    borderRadius: 10,
    padding: 8,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  messageContent: {
    maxWidth: '80%',
  },
  senderMessageText: {
    fontSize: 16,
    color: '#000000',
  },
  receiverMessageText: {
    fontSize: 16,
    color: '#000000',
  },
  input: {
    height: 40,
    borderRadius: 20,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    marginRight: 10,
  },


});
export default ChatBot;