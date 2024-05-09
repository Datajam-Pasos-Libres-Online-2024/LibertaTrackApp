import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FooterHome from "../assets/Icons/FooterHome";
import FooterSearch from "../assets/Icons/FooterSearch";
import Search from "../screens/Search";
import ChatBot from "../screens/ChatBot";
import Home from "../screens/Home";

const BottomTabNavigation = ({ navigation }) => {
    const Tab = createBottomTabNavigator()
    const Selected = '#F15A24';
    const noSelected = '#bababa';

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 3,
                    backgroundColor: 'black',
                    height: Platform.OS === "ios" ? 70 : 55,
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: null,
                    tabBarBadgeStyle: 'black',
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <FooterHome color={focused ? Selected : noSelected} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarLabel: null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FooterSearch color={focused ? Selected : noSelected} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="ChatBot"
                component={ChatBot}
                options={{
                    headerShown: true,
                    tabBarLabel: null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FooterMessageIcon color={focused ? Selected : noSelected} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation