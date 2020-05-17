import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

function AppText({ children, style }) {
    // all 'children' coming from the props will be passed to the Text react native component
    // style coming from props is set on top of the existing styles
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

export default AppText
