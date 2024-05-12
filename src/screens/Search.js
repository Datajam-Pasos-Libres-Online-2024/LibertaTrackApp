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
        verify: 'true',
        employees: '200.000',
        locations: '40.275', 
        countrys: '1213', 
        resume: ' McDonald`s es una cadena global de restaurantes de comida rápida conocida principalmente por sus hamburguesas, papas fritas y bebidas. Fundada en 1940 por los hermanos Richard y Maurice McDonald en San Bernardino, California, la empresa se expandió rápidamente en todo el mundo gracias a su modelo de franquicia. McDonald`s se destaca por ofrecer un menú accesible y rápido, adaptando sus ofertas a los gustos locales en más de 100 países. Además, ha implementado iniciativas de sostenibilidad y nutrición para mejorar su impacto ambiental y la salud de sus clientes.',
    },
    {
        id: "2",
        name: "Pizza Hut",
        ubi: 'United States',
        image: require('../assets/Icons/pizzahut.webp'),
        isCoach: true,
        description: "This is a description",
        verify: 'true',
        employees: '55.800',
        locations: '10.034',
        countrys: '1',
        resume: 'Pizza Hut es una reconocida cadena internacional de restaurantes especializada en pizza, con una amplia variedad de estilos y sabores que se adapta a las preferencias locales en más de 100 países. Fundada en 1958 por Dan y Frank Carney en Wichita, Kansas, Pizza Hut se ha expandido globalmente y es conocida por su innovación en el menú, que incluye una variedad de pizzas, pastas y acompañamientos. Además de ofrecer servicios de comedor, también proporciona opciones de entrega y comida para llevar, enfocándose en la conveniencia del cliente y la experiencia culinaria.'


    },
    {
        id: "3",
        name: "Subway",
        ubi: "Unitated Stetes",
        image: require('../assets/Icons/Subway.webp'),
        isCoach: true,
        description: "This is a description of my profile, i am passion about many sporty like gym, swimming and box",
        verify: 'true',
        employees: '213.000',
        locations: '44.205',
        countrys: '1', 
        resume: 'Subway es una de las mayores cadenas de restaurantes de comida rápida a nivel mundial, especializada en sándwiches submarinos, ensaladas y wraps. Fundada en 1965 por Fred DeLuca y Peter Buck en Bridgeport, Connecticut, Subway es famosa por ofrecer opciones de comida fresca y personalizable, permitiendo a los clientes elegir entre una variedad de panes, carnes, vegetales y condimentos para crear sus propios sándwiches. Con su énfasis en opciones más saludables dentro del sector de comida rápida, Subway opera miles de locales en más de 100 países.'

    },
    {
        id: "4",
        name: "Domino's Pizza",
        ubi: "United States",
        image: require('../assets/Icons/dominos.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'true',
        employees: '260.000',
        locations: '13.200',
        countrys: '1', 
        resume: 'Domino`s Pizza es una prominente cadena internacional de pizzerías conocida por su enfoque en la entrega rápida y la innovación en servicios digitales. Fundada en 1960 por Tom Monaghan en Ypsilanti, Michigan, Domino`s se especializa en una variedad de pizzas, además de ofrecer opciones de pasta, sándwiches, y acompañamientos. La compañía ha sido pionera en el desarrollo de tecnologías de pedido en línea y seguimiento de pedidos en tiempo real, consolidándose como un líder en la industria de la entrega de comida rápida en más de 85 países.',
    },
    {
        id: "5",
        name: "Car Burguer",
        ubi: "Colombia",
        image: require('../assets/Icons/dominos.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
        employees: '5',
        locations: '1',
        countrys: '1', 
        resume:''

    },
    {
        id: "6",
        name: "D'Chatos",
        ubi: "Colombia",
        image: require('../assets/Icons/macdonals.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
        employees: '5',
        locations: '1',
        countrys: '1', 
        resume: ''

    },
    {
        id: "7",
        name: "Magola",
        ubi: "Colombia",
        image: require('../assets/Icons/magola.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'false',
        employees: '15',
        locations: '1',
        countrys: '1', 
        resume: ''

    },
    {
        id: "8",
        name: "KFC",
        ubi: "United States",
        image: require('../assets/Icons/KFC.webp'),
        isCoach: true,
        description: "This is a description fjsdakfljdsa fljdsalkfjdsalk fdsaklfjdsakl jfdlsajfkldsajflkdsjfkldjs fjdksalfj asfljsadlj",
        verify: 'true',
        employees: '1.200.000',
        locations: '22.000',
        countrys: '344', 
        resume: 'KFC, también conocido como Kentucky Fried Chicken, es una famosa cadena global de restaurantes de comida rápida especializada en pollo frito. Fundada por el Coronel Harland Sanders en 1952 en Kentucky, la marca se distingue por su receta secreta de 11 hierbas y especias. KFC opera en más de 150 países, ofreciendo una variedad de menús que incluyen pollo, ensaladas, y postres, adaptándose a los gustos locales y enfocándose en la calidad y sabor auténtico que caracteriza a la marca.'

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

    const { navigation, image, name, ubi, description, verify, employees, locations, countrys, resume } = props;  // Desestructuración correcta de props


    const handlePress = () => {
        navigation.navigate('CompanyProfile',{
            userData: { image, name, ubi, description, verify, employees, locations, countrys, resume }
        })
    };

    return (
        <View style={styles.usersContainer}>
            <TouchableOpacity onPress={handlePress}>
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
                        employees={item.employees}
                        locations={item.locations}
                        countrys={item.countrys}
                        resume={item.resume}
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