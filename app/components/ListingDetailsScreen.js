import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import ListItem from './ListItem'

function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/biniam.jpg')}
                    title='Biniam Asnake'
                    subTitle='5 Listings'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 1
    }
})
export default ListingDetailsScreen
