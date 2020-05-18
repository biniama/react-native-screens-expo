import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Styling from './examples/5Styling'
import { View, Button } from 'react-native';
import Icons from './examples/6Icons';
import AppButton from './app/components/AppButton';
import colors from './app/config/colors'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
    //<WelcomeScreen />
    //<ViewImageScreen />
    <ListingsScreen />
    //<ListingDetailsScreen />
    //<MessagesScreen />
    //<AccountScreen />


    //<Styling />
    //<Icons />
    // <View style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}>
    // 
    // </View>
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100
    // }}>
    //   <Card
    //     title='Red jacket for sale'
    //     subtitle='$100'
    //     image={require('./app/assets/jacket.jpg')} />
    // </View>
  );
}