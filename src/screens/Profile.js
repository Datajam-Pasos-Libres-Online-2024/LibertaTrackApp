import React,{useLayoutEffect} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';


const LogoutCard = ({signOut}) => {

    return (
        <View style={styles.card}>
            <View className='flex-row w-full m-4 '>
                <View style={[styles.avatarContainer]}>
                    <Image source={require('../assets/Icons/profile.jpg')}
                        style={{ borderRadius: 20, height: 50, width: 50 }}
                    />
                </View>
                <View className='mx-3 items-center justify-center'>
                    <Text style={styles.text}>
                        Hola, te esperamos pronto
                    </Text>
                </View>
            </View>
            <View className='w-full items-center my-3'>
                <View style={styles.button}>
                    <TouchableOpacity onPress={signOut} >
                        <Text style={styles.buttonText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


const Profile = ({navigation}) => {

    const { signOut } = useAuthenticator();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: true,
            headerStyle: styles.headerContainer,
            headerTitle: () => <View><Text style={styles.titleHeader}>Perfil</Text></View>,
            headerTitleAlign: 'center',
        })
    }, [])

    return (
        <View className='flex-1'>
            <LogoutCard signOut={signOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        marginHorizontal: 15,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    avatarContainer: {
        borderRadius: 120,
        borderWidth: 5,
        borderColor: '#031A2C',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 20,
        color: '#031A2C',
        fontWeight: '500'
    },
    button: {
        height: 40,
        width: '90%',
        backgroundColor: '#031A2C',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500'
    },
    headerContainer: {
        backgroundColor: '#fff', // Color de fondo del header
        borderBottomWidth: 1, // Grosor de la línea inferior
        //borderBottomColor: '#ccc', // Color de la línea inferior
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3, // Opacidad de la sombra
        shadowRadius: 2, // Radio de la sombra
        elevation: 3, // Elevación en dispositivos Android
    },
    titleHeader: {
        fontSize: 22,
        color: '#031A2C'
    },
})



export default Profile