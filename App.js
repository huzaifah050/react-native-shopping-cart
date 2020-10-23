import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';


const Stack = createStackNavigator()

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='OnlineShopping'>
    <Stack.Screen 
    options={{
      title: 'Online Shopping'
    }}
    name = 'OnlineShopping' component={OnlineShoppingScreen} />
    <Stack.Screen
     options={{
      title: 'Add to Cart'
    }}
     name='AddToCart' component={AddToCartScreen} />
    <Stack.Screen 
     options={{
      title: 'Payment Successful'
    }}
    name='PaymentSuccessful' component={PaymentSuccessfulScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
