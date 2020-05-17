import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

export default function App() {

  // Divide the screen into 4 rows and the first 2 are filled by the first 'dodgerblue' view
  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
      flex: 1, // fills the whole screen. Value can be float
      flexDirection: 'row',
      justifyContent: 'center',
      //alignItems: 'stretch' // default value and height should be commented-out to see the effect
      // Determines alignment of items within each line
      alignItems: 'center',
      // Determines alignment of the entire content.
      // Works only if we have wrapping enabled.
      alignContent: 'center',
      flexWrap: 'wrap'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
        // align individual view
        alignSelf: 'flex-start'
        // Advanced Flex
        // flexBasis: 100 // same as primary axis either width or height
        // flexGrow: 1  // same as flex: 1
        // flexShrink: 1  // same as flex: -1 shrinks this element if others doesn't fit in the row/column
        // position: 'relative' // is the default. Alternative is 'absolute'
        // change the following with position
        // top: 20
        // left: 20
        // right: 20
        // bottom: 20 
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 200
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
    </SafeAreaView>
  );
}