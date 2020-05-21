import React from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText/AppText'
function AppTextInput({ icon, ...rest }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} colors={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        width: '100%',
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput
