import React from 'react';
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icons() {
    // www. expo.github.io/vector-icons
    return (
        <View
            style={{
                flex: 1,  // fill the screen
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <MaterialCommunityIcons
                name='email'
                size='60'
                color='dodgerblue' />
        </View>
    )
}