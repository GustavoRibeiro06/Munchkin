import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';


export default function App({}) {
return (
    <>
        <StatusBar barStyle="light-content" backgroundColor='#8b0000' ></StatusBar>
        <View style={style.container}>
        <Image style={style.Image} source={require('../imagens/munti.png')}></Image>
        <TouchableOpacity 
            activeOpacity={0.6} 
            style={style.button}
            onPress={() => navigation.navegate ('sobre')}>
                <Text style={style.buttonText}>Começar</Text>
            </TouchableOpacity>
        </View>
        <Text style={style.texto}>Munchkin</Text>
    </>
 );
}




const style = StyleSheet.create({
    container: {
        flex: 1,   
    },
    Image: {
        height: 500,
        maxWidth: 400,
        marginTop: 100
    },
    texto: {
        color: '#b8860b',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 650,
        marginLeft: 80
    },
    button: {
        backgroundColor: '#8b0000',
        margin: 60,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center'
    },

})