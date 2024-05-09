import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ChatBot = () => {
    return( 
        <SafeAreaProvider>
            <View>
                <Text>hola</Text>
            </View>
        </SafeAreaProvider>
    )
}

export default ChatBot;