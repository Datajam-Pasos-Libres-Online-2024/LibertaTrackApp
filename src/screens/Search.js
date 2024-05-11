import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../assets/Icons/Search"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const companies = [
    {
        id: "1",
        name: "MacDonald's Restaurants",
        ubi: "United States",
        image: require('../assets/Icons/macdonals.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
    },
    {
        id: "2",
        name: "Pizza Hut",
        ubi: 'United States',
        image: require('../assets/Icons/pizzahut.webp'),
        isCoach: true,
        description: "This is a description",
        verify: 'true',
    },
    {
        id: "3",
        name: "Subway",
        ubi: "Unitated Stetes",
        image: require('../assets/Icons/Subway.webp'),
        isCoach: true,
        description: "This is a description of my profile, i am passion about many sporty like gym, swimming and box",
        verify: 'false',
    },
    {
        id: "4",
        name: "Dominos Pizza",
        ubi: "United States",
        image: require('../assets/Icons/dominos.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
    },
    {
        id: "5",
        name: "Car Burguer",
        ubi: "Colombia",
        image: require('../assets/Icons/dominos.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
    },
    {
        id: "6",
        name: "D'Chatos",
        ubi: "Colombia",
        image: require('../assets/Icons/macdonals.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'true',
    },
    {
        id: "7",
        name: "Magola",
        ubi: "Colombia",
        image: require('../assets/Icons/magola.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
    },
    {
        id: "8",
        name: "KFC",
        ubi: "United States",
        image: require('../assets/Icons/KFC.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
    },
];

const SearchHeader = () => {
    const [searchValue, setSearchValue] = useState('');



    const handleSearchValueChange = (text) => {
        setSearchValue(text);
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchComponent}>
                <View className='p-2'>
                    <SearchIcon />
                </View>
                <TextInput
                    value={searchValue}
                    onChangeText={handleSearchValueChange}
                    style={styles.searchTextInput}
                    placeholder="Buscar"
                    placeholderTextColor="#A9A9A9"
                >
                </TextInput>
            </View>
        </View>
    )
};


const FollowButton = () => {
    return (
        <TouchableOpacity className='shadow-md' style={styles.buttonCircle}>
            <View style={styles.followContainer}>
                <FontAwesomeIcon icon="fa-solid fa-user-plus" color="#F15A24" />
            </View>
        </TouchableOpacity>
    );
}


const SeparatorLine = () => {
    return (
        <View style={styles.horizontalLine}>

        </View>
    )
}

const FooterList = () => {
    return (
        <View className='flex-column h-28'>
            <SeparatorLine />

        </View>
    )
}

const RenderButton = (props) => {
    return (
        props.verify === 'true' ?
            <View className='items-center justify-center'>
                <Image className='w-[30px] h-[30px]' source={require('../assets/Icons/verify.webp')} />
            </View>
            :
            <View className='items-center justify-center'>
                <Image className='w-[25px] h-[25px]' source={require('../assets/Icons/noverify.webp')} />
            </View>
    );
}


const Users = (props) => {
    return (
        <View style={styles.usersContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('CompanyProfile')}>
                <View style={styles.userCard}>
                    <View className='flex flex-row w-10/12 '>
                        <Image className="w-[40px] h-[40px] rounded-full mr-4" source={props.image} alt="user" />
                        <View className='flex flex-column justify-start w-10/12 h-20'>
                            <Text style={styles.bigText}>
                                {props.name}
                            </Text>
                            <Text style={styles.userNameText}>
                                {props.ubi}
                            </Text>
                            <Text style={styles.smallText} numberOfLines={2} ellipsizeMode="tail">
                                {props.description}
                            </Text>
                        </View>
                    </View>
                    <View className=' w-12 h-full'>
                        <RenderButton verify={props.verify} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}




const Search = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    return (
        <SafeAreaProvider>
            <SafeAreaView className='shadow-md' style={styles.AndroidSafeArea}>
            </SafeAreaView>
            <View style={styles.container}>
                <SearchHeader />
                <FlatList className="bg-[#00000000 ]" showsVerticalScrollIndicator={false}
                    data={companies}
                    renderItem={({ item }) => <Users
                        image={item.image}
                        name={item.name}
                        ubi={item.ubi}
                        description={item.description}
                        verify={item.verify} 
                        navigation={navigation}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={SeparatorLine}
                    ListFooterComponent={FooterList} />
                {/* <EmptySearch
                    icon='magnifying-glass'
                    message='Search for friends'
                    centered={true}
                /> */}
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 0,
        backgroundColor: "black",
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    searchContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchComponent: {
        width: '95%',
        height: 35,
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    searchLabel: {
        color: '#707070'
    },
    searchTextInput: {
        height: 40,
        width: '80%',
        fontSize: 16,
        color: 'black'
    },
    footer: {
        alignSelf: 'flex-end'
    },
    usersContainer: {
        marginTop: 20,
        marginHorizontal: 18,
        flexDirection: 'column',
    },
    userCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonCircle: {
        height: 35,
        width: 35,
        marginLeft: 12,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#F15A24',
    },
    followContainer: {
        paddingLeft: 4
    },
    bigText: {
        fontSize: 16,
        color: '#232730',
    },
    userNameText: {
        fontSize: 12,
        color: '#989898',
    },
    smallText: {
        fontSize: 12,
        color: '#767676'
    },
    horizontalLine: {
        marginLeft: 18,
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
    }
})


export default Search;