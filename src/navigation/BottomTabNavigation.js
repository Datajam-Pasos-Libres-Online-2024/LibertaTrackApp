import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FooterHome from "../assets/Icons/FooterHome";
import FooterSearch from "../assets/Icons/FooterSearch";
import FooterMessageIcon from "../assets/Icons/FooterMessageIcon";
import Search from "../screens/Search";
import ChatBot from "../screens/ChatBot";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ComplaintsAndSuggestions from "../screens/ComplaintsAndSuggestions";
import Camera from "../screens/Camera";

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity style={styles.tabBarButton} onPress={onPress}>
        <View style={{ width: 70, height: 70, borderRadius: 35, overflow: 'visible' }}>
            {children}
        </View>
    </TouchableOpacity>
);

const BottomTabNavigation = ({ navigation }) => {
    const Tab = createBottomTabNavigator()
    const Selected = '';
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
                    backgroundColor: 'white',
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
                name="ToggleMenu"
                component={Camera}
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.camera}>
                            <Image
                                source={require("../assets/Icons/cameraIcon.png")}
                                resizeMode='contain'
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }
                }
            />
            <Tab.Screen
                name="C&S"
                component={ComplaintsAndSuggestions}
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
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: null,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.avatarContainer, focused && styles.avatarSelected]}>
                                <Image source={require('../assets/Icons/profile.jpg')}
                                    height={1}
                                    width={1}
                                    style={{borderRadius:20, height: 25, width: 25}}
                                />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        borderRadius: 120,
        borderWidth: 2,
        borderColor: 'white',
        height:32, 
        width:32, 
        alignItems: 'center', 
        justifyContent: 'center'

    },
    avatarSelected:
    {
        borderColor: 'blue',
    },
    tabBarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    modalContainer: {
        flex: 1,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    tabBarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    modalContainer: {
        flex: 1,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    camera: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: '#02182D',
        bottom: 20, 
        alignItems: 'center', 
        justifyContent: 'center'
    }


})


export default BottomTabNavigation