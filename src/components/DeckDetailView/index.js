import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckDatailView extends Component {
    state = {
        question:"",
        answer:"",
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>DeckDatailView</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DeckDatailView
