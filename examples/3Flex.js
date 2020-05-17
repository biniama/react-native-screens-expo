import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {

  // Divide the screen into 4 rows and the first 2 are filled by the first 'dodgerblue' view
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1, // fills the whole screen. Value can be float
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 2 // takes 2 spaces
      }} />
      <View style={{
        backgroundColor: 'gold',
        flex: 1 // takes 1 space
      }} />
      <View style={{
        backgroundColor: 'tomato',
        flex: 1  // takes 1 space
      }} />
    </View>
  );
}