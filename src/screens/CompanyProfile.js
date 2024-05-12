import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Profile from "./Profile";
import Location from "../assets/Icons/Locatin";
import Pdf from 'react-native-pdf'

const RenderButton = ({ verify }) => {
    return (
        verify === 'true' ?
            <View className='items-center justify-center '>
                <Image className='w-[19px] h-[19px]' source={require('../assets/Icons/verify.webp')} />
            </View>
            :
            <View className='items-center justify-center'>
                <Image className='w-[19px] h-[19px]' source={require('../assets/Icons/noverify.webp')} />
            </View>
    );
}

const CompanyCard = ({ userData }) => {
    return (
        <View style={[styles.profileInfo, { marginTop: 20 }]}>
            <View style={styles.avatarContainer}>
                <Image source={userData.image}
                    style={styles.profileImage} />
                <View className='justify-center pl-2 pb-2' >
                    <View className='flex-row items-center justify-center'>
                        <Text style={styles.name}>{userData.name}</Text>
                        <View className='items-center justify-center pl-1 pt-[2px]'>
                            <RenderButton verify={userData.verify} />
                        </View>
                    </View>
                    <View className='flex-row justify-center'>
                        <Location />
                        <Text style={styles.location}>{userData.ubi}</Text>
                    </View>
                </View>
                <View className='w-full'>
                    <View className='flex-row justify-around'>
                        <View className='flex-column items-center w-28 '>
                            <Text style={styles.numbers}>{userData.locations}</Text>
                            <Text>Sedes</Text>

                        </View>
                        <View className='flex-column items-center'>
                            <Text style={styles.numbers}>{userData.employees}</Text>
                            <Text>Empleos directos</Text>
                        </View>
                        <View className='flex-column items-center w-28'>
                            <Text style={styles.numbers}>{userData.countrys}</Text>
                            <Text>Paises</Text>
                        </View>
                    </View>
                </View>

            </View>

        </View>
    )
}

const SectionTitles = ({ title }) => {
    return (
        <View className='w-full mx-3 mt-3 mb-1'>
            <Text style={styles.sectionTitles}>
                {title}
            </Text>
        </View>
    )
}


const Description = ({ userData }) => {
    return (
        <View style={styles.profileInfo}>
            <View className='p-2 px-3'>
                <Text style={{ textAlign: 'justify' }}>{userData.resume}</Text>
            </View>
        </View>
    )

}

const PDFExample = () => {
    const source = require('../assets/Pdfs/KFC.pdf');

    return (
        <View style={styles.container}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                
            />
        </View>
    );
};


const CompanyProfile = ({ route }) => {
    const { userData } = route.params;
    return (
        <View className='flex-1'>
            <ScrollView>
                <CompanyCard userData={userData} />
                <SectionTitles title={'Descripción'} />
                <Description userData={userData} />
                <PDFExample/>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    imageContainer: {
        height: 30,
        width: 30,

    },
    profileImage: {
        height: 70,
        width: 70,
        borderRadius: 120,

    },
    profileInfo: {
        alignItems: 'start',
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10
    },
    avatarContainer: {
        borderWidth: 4,
        marginVertical: 20,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'column'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black'
    },
    location: {
        fontSize: 16,
    },
    numbers: {
        color: 'black',
        fontWeight: '700'
    },
    sectionTitles: {
        fontSize: 18,
        fontWeight: '500',
        color: '#031A2C'
    },
})

export default CompanyProfile;