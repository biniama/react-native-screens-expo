import React from 'react'
import { Text } from 'react-native'

function AppText({ children }) {
    // all 'children' coming from the props will be passed to the Text react native component
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default AppText
