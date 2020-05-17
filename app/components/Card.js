import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden', // because the image overrides the view's border radius
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginVertical: 7,
    }
})
export default Card
