import React from "react";

import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaProvider>
            <View>
                <Text>hola</Text>
            </View>
        </SafeAreaProvider>
    )
}

export default Home;