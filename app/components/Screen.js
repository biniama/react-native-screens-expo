import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        // Better way to avoid safe area for both platforms
        paddingTop: Constants.statusBarHeight, // android = 24 and ios = 44
        flex: 1,
    }
})

export default Screen
