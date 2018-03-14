import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class QuizView extends Component {
    state = {
        question:"",
        answer:"",
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>QuizView</Text>
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

export default QuizView
