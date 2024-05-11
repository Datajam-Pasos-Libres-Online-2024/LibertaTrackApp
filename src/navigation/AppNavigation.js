import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation"
import ChatBot from "../screens/ChatBot";
import CompanyProfile from "../screens/CompanyProfile"

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ='Main' component={BottomTabNavigation} />
                <Stack.Screen name='CompanyProfile' component={CompanyProfile}/>
                <Stack.Screen name='ChatBot' component={ChatBot}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;