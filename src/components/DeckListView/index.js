import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as api from '../../utils/api'


class DeckListView extends Component {

    // state = {
    //     decks : null
    // }

    getDecks(){
        api.fetchDeckResults()
            .then((decks) => {
            console.log(decks)
            })
    }

    getDeck(){
        api.getDeck('React')
            .then((deck) => {
                console.log(deck)
            })
    }

    render() {

        return (

            <View style={styles.container}>
                <Text>Deck List View</Text>
                <TouchableOpacity onPress={this.getDecks}>
                    <Text>getDecks</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getDeck}>
                    <Text>getDeck</Text>
                </TouchableOpacity>

            </View>
        )
    }
    // setData(){
    //     let user = {
    //         React: {
    //             title: 'React',
    //             questions: [
    //                 {
    //                     question: 'What is React?',
    //                     answer: 'A library for managing user interfaces'
    //                 },
    //                 {
    //                     question: 'Where do you make Ajax requests in React?',
    //                     answer: 'The componentDidMount lifecycle event'
    //                 }
    //             ]
    //         },
    //         JavaScript: {
    //             title: 'JavaScript',
    //             questions: [
    //                 {
    //                     question: 'What is a closure?',
    //                     answer: 'The combination of a function and the lexical environment within which that function was declared.'
    //                 }
    //             ]
    //         }
    //     }
    //     AsyncStorage.setItem('user',JSON.stringify(user))
    // }
    //
    // getData(){
    //     AsyncStorage.getItem('user')
    //         .then((result) => {
    //          console.log(JSON.parse(result).React)
    //          console.log(Object.keys(JSON.parse(result)))
    //         })
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    formInput: {
        paddingLeft: 5,
        height: 50,
        borderWidth: 1,
        borderColor: "#555555",
    },
    formButton: {
        borderWidth: 1,
        borderColor: "#555555",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
    },
})

export default DeckListView
