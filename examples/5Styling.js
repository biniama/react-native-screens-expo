import React from 'react';
import { View, Text } from "react-native";
import AppText from '../app/components/AppText';

export default function Styling() {
    return (
        <View
            style={{
                flex: 1,  // fill the screen
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    width: 100,
                    height: 100,
                    // border styles
                    borderWidth: 10,
                    borderColor: 'royalblue',
                    // borderRadius: 10, // rounded corners
                    // borderTopWidth: 20, // top border will be thicker
                    // borderTopLeftRadius: 50,
                    // borderRadius: 50, // make circle - at least  half of the view's width (100 / 2 = 50)

                    // shadow for ios and android are different
                    // ios
                    shadowColor: 'grey',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 1, // between 0 and 1
                    shadowRadius: 10, // makes the shadow softer

                    // android, add elevation
                    elevation: 20,

                    // padding and margin
                    padding: 20,
                    paddingHorizontal: 10, // overrides padding
                    paddingLeft: 30
                }}
            >
                <View style={{
                    // create a gold box inside the blue box
                    backgroundColor: 'gold',
                    width: 30,
                    height: 30,
                }} />
            </View>

            <View style={{
                // adding another box next to the blue box
                backgroundColor: 'tomato',
                width: 100,
                height: 100,
                margin: 20,
                marginHorizontal: 30,
            }} />

            <Text style={{
                // use platform specific fonts
                // google 'expo custom fonts'
                // fontFamily: 'Courier', // doesn't work on android
                // fontFamily: 'Roboto', // doesn't work on ios
                fontSize: 30,
                fontStyle: 'italic',
                fontWeight: 'bold', // or '600'
                color: 'tomato',
                textTransform: 'capitalize', // lower, upper
                //textDecorationLine: 'line-through',
                textAlign: 'right', // center, left
                lineHeight: 40
            }}
            >I love React Native! This is my first react app. Here is some more text.</Text>
            <View style={{ margin: 30 }}>
                <AppText>Hello Encapsulated Component!</AppText>
            </View>
        </View>

    )
}