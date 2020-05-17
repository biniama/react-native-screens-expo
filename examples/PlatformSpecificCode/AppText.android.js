import React from 'react'
import { Text, StyleSheet } from 'react-native'

function AppText({ children }) {
    // all 'children' coming from the props will be passed to the Text react native component
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        fontSize: 18,
        fontFamily: 'Roboto',
    }
})

export default AppText
