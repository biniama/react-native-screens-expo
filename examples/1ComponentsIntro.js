import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {

  const handleOnPress = () => console.log('Text pressed')
  return (
    // style can take multiple values. E.g.
    // <SafeAreaView style=[styles.container, styles.container2]>
    <SafeAreaView style={styles.container}>
      {/* SafeAreaView works for iOS and moves the content below the edge */}
      <Text numberOfLines={2} onPress={handleOnPress}>Hello, React Native!</Text>
      <Image source={require("./assets/icon.png")} />
      {/* For network images, width and height must be specified. */}
      <TouchableOpacity onPress={() => console.log('Image tapped')}>
        <Image
          //resizeMode='cover'
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableOpacity>
      <Button
        color='orange'
        title='Click Me - Alert.alert'
        onPress={() => Alert.alert('My Alert.alert title', 'My content', [
          { text: 'Yes', onPress: () => console.log('Yes pressed') },
          { text: 'No', onPress: () => console.log('No pressed') }
        ])} />
      {/* THE FOLLOWING WORKS ONLY ON IOS */}
      <Button
        color='white'
        title='Click Me - Alert.prompt'
        onPress={() => Alert.prompt('My  Alert.prompt title', 'My content',
          text => console.log('User entered ', text))} />
    </SafeAreaView>
  );
}

// Provides style validation
// Optimization is implemented by the React Native team - coming soon
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
