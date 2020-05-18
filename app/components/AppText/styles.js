import { StyleSheet, Platform } from 'react-native'
const styles = StyleSheet.create({
    text: {
        color: 'black', // common style for ios and android
        // fontSize: Platform.OS === 'android' ? 18: 20,
        // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
        // better solution for Platform-specific code
        // should be spread with ...
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto',
            }

        })
    }
})
export default styles