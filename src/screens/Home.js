import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView, FlatList, View, Dimensions, TouchableOpacity, StatusBar } from "react-native";
import { MainHeader } from "../components/functional/MainHeader";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PostOptionsIcon from "../assets/Icons/PostOptionsIcon";
import Logo from "../assets/Icons/Logo";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const commentsInfo = [
    {
        id: 1,
        user: "John Doe",
        comment: "This is a comment",
    }
]

const posts = [
    {
        id: "1",
        likes: 4588,
        user: "Maoo.lopez",
        image: "https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        isCoach: true,
        postImage: "https://media.istockphoto.com/id/183767977/es/foto/ni%C3%B1o-abusado.jpg?s=612x612&w=0&k=20&c=j5V0idr5tUQ68hVjvyugBoXJXfQf5KT4iuln7mcc5C4=",
        description: "La esclavitud moderna se refiere a prácticas coercitivas que privan a individuos de su libertad para explotarlos laboral o sexualmente. Incluye la trata de personas, el trabajo forzoso y el matrimonio forzado, afectando a millones en todo el mundo, a menudo en condiciones de invisibilidad y violencia. Esta forma de esclavitud es una grave violación de los derechos humanos, persistiendo a pesar de los esfuerzos globales para erradicarla.",
        numberOfComments: 100,
    },
    {
        id: "2",
        likes: 3,
        user: "Juliana",
        image: "https://www.shutterstock.com/shutterstock/photos/284735126/display_1500/stock-photo-happy-blonde-girl-smiling-portrait-in-the-beach-wearing-hat-and-sunglasses-summer-holidays-284735126.jpg",
        isCoach: true,
        postImage: "https://media.istockphoto.com/id/517055568/es/foto/el-trabajo-infantil-camboya.jpg?s=612x612&w=0&k=20&c=1mPqmXx033QHpOE3GIB93OpHo02YiHD7LTGvMgfKgn8=",
        description: "La esclavitud moderna se refiere a formas contemporáneas de explotación laboral y coerción que privan a las personas de su libertad, obligándolas a vivir en condiciones de extrema desigualdad y dependencia. A continuación, detallo algunos de los principales tipos de esclavitud moderna \n 1) Trabajo forzoso. \n 2) Trata de personas. \n 3) Explotación sexual. \n 4) Servidumbre por deudas. \n 5) Esclavitud infantil. \n 6) Matrimonio forzado.",
        numberOfComments: 2,
    }
];


const BotButtom = ({navigation}) =>{
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ChatBot')}
            className='items-center justify-center h-full w-12'> 
                <Image className='h-[30px] w-[30px]' source={require('../assets/Icons/bot.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const UserHeader = (props) => {
    return (
        <View className="flex flex-row justify-between items-center w-100 mb-2">
            <View className="flex flex-row items-center">
                <Image className="w-[40px] h-[40px] rounded-full mr-4" source={{ uri: props.image }} alt="user" />
                <View className="flex flex-column">
                    <View className="flex flex-row items-center">
                        <Text className="text-[16px] font-bold"> {props.name} </Text>
                    </View>
                    <Text className="text-[11px] text-gray-400"> 20 mins ago </Text>
                </View>
            </View>
            <PostOptionsIcon />
        </View>
    );
}

const MainImage = (props) => {
    return (
        <View className="">
            <Image className="rounded-2xl h-[220]" source={{ uri: props.image }} alt="user" />
        </View>
    );
}

const LikeSection = (props) => {
    return (
        <View className="">
            <Text className="m-2 text-xs text-gray-400 text-[11px]" >  <Text className="font-bold text-gray-700  text-[10px]">
                William
                <Text className="m-2 text-xs text-gray-400 text-[11px]" >
                    {" and "}
                </Text>
                {props.num}
            </Text>  others like it</Text>
        </View>
    );//TODO manejar mejor los likes y quien aparece que le dio like
    //TODO mejorar detalles de diseño
}

const DescriptionSection = (props) => {
    return (
        <View className="">
            <Text className="text-xs text-gray-600 text-[10px] pt-2">
                {" "}{props.description}
            </Text>
        </View>
    );
}

const CommentSection = (props) => {
    return (
        <View className>
            <Text className="text-xs text-gray-300 mb-2 text-[11px]">See the {props.num} comments</Text>
            {commentsInfo.map((comment) => (
                <Text key={comment.id} className="text-xs text-gray-600 text-[10px]">
                    <Text className="font-bold text-gray-700 mr-2 text-[10px]">
                        {comment.user}
                    </Text>
                    {" "}{comment.comment}
                </Text>
            ))}
        </View>
    ); //TODO definir a partir de cuantos se puede ver el see the comments
    //TODO manejar casos donde no haya comentarios
    //TODO creo que acá es mejor manejar en vez de un id la posición de la sección
}

const Post = (props) => {
    return (
        <View className="flex flex-column bg-white my-5 mx-5 rounded-2xl  p-3">
            <UserHeader name={props.user} image={props.image} isCoach={props.isCoach} />
            <MainImage image={props.postImage} />
            <DescriptionSection description={props.description} user={props.user} />
        </View>
    );
}

const Home = ({ navigation }) => {


 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: true,
            headerStyle: styles.headerContainer,
            headerTitle: () => <Logo/>,
            headerRight: () => <BotButtom navigation={navigation}/>,
            headerTitleAlign: 'center',
        })
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView className='shadow-md' style={styles.AndroidSafeArea}  >
            </SafeAreaView>
            {/* <MainHeader {...navigation}/> */}
            <FlatList className="bg-[#0000000f]" showsVerticalScrollIndicator={false}//TODO: solucionar problema del margin para que se vea bien
                data={posts}
                renderItem={({ item }) => <Post
                    name={item.name}
                    likes={item.likes}
                    description={item.description}
                    user={item.user}
                    image={item.image}
                    isCoach={item.isCoach}
                    postImage={item.postImage}
                    numberOfComments={item.numberOfComments} />}
                keyExtractor={item => item.id} 
                ListFooterComponent={<View className='h-28'></View>}/>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 0,
        backgroundColor: "black",
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0
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
})

export default Home;