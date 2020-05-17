import React from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  // Get the Dimensions of the device in one orientation ONLY. So, it is preferred to use useDimensions hook
  console.log(`Dimensions.get('screen'): `, Dimensions.get('screen'))

  // Provides updated screen dimensions when orientation changes.
  // NOTE: make sure to set "orientation": "default" in app.json to support both landscape and portrait orientations.
  console.log(`useDimensions(): `, useDimensions())

  console.log(`useDeviceOrientation(): `, useDeviceOrientation())

  const { landscape } = useDeviceOrientation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: landscape ? '100%' : 150,
        height: landscape ? '100%' : '30%'
      }}>
      </View>
    </SafeAreaView>
  );
}

// Provides style validation
// Optimization is implemented by the React Native team - coming soon
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
