import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Main from './src/screens/Main';
import NewsDetails from './src/screens/NewsDetails';
import CategoryNews from './src/screens/CategoryNews';
import MainCategory from './src/screens/MainCategory';



const Stack = createNativeStackNavigator();

const AppNavbar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name='MainCategory'
        component={MainCategory}
        options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CategoryNews"
          component={CategoryNews}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavbar

