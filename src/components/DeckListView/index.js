import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckListView extends Component {
    state = {
        title:"",
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Deck List View</Text>
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

export default DeckListView
