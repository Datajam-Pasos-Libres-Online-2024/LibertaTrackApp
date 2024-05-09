import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation"

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ='Main' component={BottomTabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;