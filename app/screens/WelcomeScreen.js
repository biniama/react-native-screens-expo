import React from 'react'
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native'

import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
            // adding blur effect to the background image
            blurRadius={10}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Login' />
                <AppButton title='Register' color='secondary' />
            </View>
        </ImageBackground >
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%' // important because the button also has 100% width but limited to the parent view's width which is now set to 100%
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})
