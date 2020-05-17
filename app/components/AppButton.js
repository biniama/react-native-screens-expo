import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

function AppButton({ title, onPress, color = 'primary' }) {
    return (
        // color -> dynamically reference it from colors and override the styles.button
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15,
        width: '100%',
        // create space between Login and Register buttons
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default AppButton
