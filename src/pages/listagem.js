import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default class Listagem extends Component {
    dados= [
        {
            id:1,
            nome: '1'
        },
        {
            id:2,
            nome:'2'
        },
        {
            id:3,
            nome:'3'
        }
    ];
    
    renderItem = (item) =>
        <TouchableOpacity style={ styles.item }>
            <Text style={styles.itemText}>
                {item.nome}
            </Text>
        </TouchableOpacity>

    render() {
        return (
            <View style={styles.content}>
                <FlatList
                    style={ styles.lista }
                    data= { this.dados }
                    renderItem={item => this.renderItem(item.item)}
                    keyExtractor={item=>item.id}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    content: {
        flex: 1
    },
    lista: {
        marginTop:20
    },
    item: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
        width: 300,
        height: 50,
        backgroundColor: '#ededed',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#343a40',
    }
});