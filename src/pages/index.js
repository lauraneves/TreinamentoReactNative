import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import logo from '../assets/logo.png';

export default class Inicio extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Image style={styles.logo} source={logo} />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Categoria"
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.botao} onPress={ ()=> this.props.navigation.navigate('Listagem') }>
                        <Text style={styles.textoBotao}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 190,
        height: 120,
        marginTop: 100,
    },
    form: {
        marginTop: 80,
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        textAlign: 'center',
        width: 300,
        borderWidth: 1,
        borderColor: "#ddd",
        color: "#444",
        height: 50,
        borderRadius: 40,
    },
    botao: {
        marginTop: 30,
        marginBottom: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3bf2e',
        width: 250,
        height: 40,
        borderRadius: 30,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    }

});
