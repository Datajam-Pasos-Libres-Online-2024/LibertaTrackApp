import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import RNPickerSelect from 'react-native-picker-select'

const SectionTitles = ({ title }) => {
    return (
        <View className='w-full mx-3 mt-3 mb-1'>
            <Text style={styles.sectionTitles}>
                {title}
            </Text>
        </View>
    )
}


const Container = ({ userData, component }) => {
    return (
        <View style={styles.profileInfo}>
            <View className='p-2 px-3'>
                {component}
            </View>
        </View>
    )

}

const Tipo = ({ setTipo }) => {


    return (
        <View style={{ height: 25, backgroundColor: 'white', justifyContent: 'center' }}>
            <RNPickerSelect
                onValueChange={(value) => [console.log(value), setTipo(value)]}
                items={[
                    { label: 'Denuncia', value: 'Dununcia' },
                    { label: 'Recomendación', value: 'Recomendación' },
                ]}
                placeholder={{ label: "Selecciona una opción", value: null }}
            />
        </View>
    )
}

const Anonimo = ({ setIsAnonimo }) => {
    return (
        <View style={{ height: 25, backgroundColor: 'white', justifyContent: 'center' }}>
            <RNPickerSelect

                onValueChange={(value) => setIsAnonimo(value)}
                items={[
                    { label: 'Sí', value: 'si' },
                    { label: 'No', value: 'no' },
                ]}
                placeholder={{ label: "¿Quieres que tu denuncia sea anonima?", value: null }}
            />
        </View>
    )
}

const Company = ({ setCompany }) => {
    return (
        <View style={{ height: 25, backgroundColor: 'white', justifyContent: 'center' }}>
            <RNPickerSelect
                onValueChange={(value) => setCompany(value)}
                items={[
                    { label: 'Macdonald`s', value: 'macdonals' },
                    { label: 'KFC', value: 'kfc' },
                    { label: 'Subway', value: 'subway' },
                    { label: 'Pizza Hut', value: 'Pizza Hut' },
                    { label: 'Domino`s', value: 'Dominos' },
                    { label: 'Car Burguer', value: 'Carburguer' },
                    { label: 'Chato`s', value: 'Chatos' },





                ]}
                placeholder={{ label: "¿Elige la Empresa a denunciar?", value: null }}
            />

        </View>
    )
}

const Location = ({ location, setLocation }) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={setLocation} // Actualiza el estado del texto cuando cambia
            value={location} // El valor del texto en el input
            placeholder="Ej: pais, region, ciudad, direccion."
        />
    )
}

const Description = ({ description, setDescription }) => {
    return (
        <View style={{ height: 80, backgroundColor: 'white', justifyContent: 'center' }}>
            <TextInput
                style={styles.inputDescription}
                onChangeText={setDescription} // Actualiza el estado del texto cuando cambia
                value={description} // El valor del texto en el input
                multiline={true}
                textAlignVertical="top"
                placeholder="Escribe aqui tu denuncia con el mayor detalle posible"
            />
        </View>
    )
}

const Name = ({ name, setName }) => {
    return (
        <View style={{ height: 25, backgroundColor: 'white', justifyContent: 'center', items:'center'}}>
            <TextInput
                style={styles.inputName}
                onChangeText={setName} // Actualiza el estado del texto cuando cambia
                value={name} // El valor del texto en el input
                placeholder="Escribe tu nombre"

            />
        </View>
    )
}

const IDNumber = ({ idNumber, setIdNumber }) => {
    return (
        <View style={{ height: 25, backgroundColor: 'white', justifyContent: 'center' }}>
            <TextInput
                style={styles.inputName}
                onChangeText={setIdNumber} // Actualiza el estado del texto cuando cambia
                value={idNumber} // El valor del texto en el input
                placeholder="Escribe tu No. de identificacion"
            />
        </View>
    )
}

const SendButton = ({ onPress }) => {
    return (
        <View className='w-full my-5'>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.sendButton}>
                    <Text style={styles.textSendButton} >Enviar Denuncia</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const ComplaintsAndSuggestions = ({ navigation }) => {

    const [tipo, setTipo] = useState('')
    const [isAnonimo, setIsAnonimo] = useState('si')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState(''); // Estado inicial para el texto
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [idNumber, setIdNumber] = useState('')

    const handleSend = () => {

        console.log(tipo)
        console.log(isAnonimo)
        console.log(isAnonimo)

        console.log(company)

        console.log(description)

        console.log(name)
        console.log(idNumber)




    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: true,
            headerStyle: styles.headerContainer,
            headerTitle: () => <View><Text style={styles.titleHeader}>Buzon de Denuncias</Text></View>,
            headerTitleAlign: 'center',
        })
    }, [])
    return (
        <View className='flex-1'>
            <ScrollView>
                <SectionTitles title={'Empresa'} />
                <Container component={<Company setCompany={setCompany} />} />
                <SectionTitles title={'Tipo'} />
                <Container component={<Tipo setTipo={setTipo} />} />
                <SectionTitles title={'¿Anonimo?'} />
                <Container component={<Anonimo setIsAnonimo={setIsAnonimo} />} />
                {isAnonimo === 'si' || isAnonimo === '' ? (
                    <View></View>
                ) :
                    <>
                        <SectionTitles title={'Nombre'} />
                        <Container component={<Name name={name} setName={setName} />} />
                        <SectionTitles title={'No. identifiacion'} />
                        <Container component={<IDNumber idNumber={idNumber} setIdNumber={setIdNumber} />} />
                    </>}
                <SectionTitles title={'Ubicación'} />
                <Container component={<Location location={location} setLocation={setLocation} />} />
                <SectionTitles title={'Descripcion'} />
                <Container component={<Description description={description} setDescription={setDescription} />} />
                <SendButton onPress={handleSend} />
                <View className='h-28'>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
    sectionTitles: {
        fontSize: 18,
        fontWeight: '500',
        color: '#031A2C'
    },
    profileInfo: {
        alignItems: 'start',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10
    },
    sendButton: {
        height: 40,
        marginHorizontal: 40,
        borderRadius: 10,
        backgroundColor: '#031A2C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSendButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500'
    },
    inputDescription: {
        flex: 1
    }, 
    inputName:{
       marginTop:-10,
       height:35,
       alignItems:'center',
       justifyContent: 'center'
    }

})

export default ComplaintsAndSuggestions;