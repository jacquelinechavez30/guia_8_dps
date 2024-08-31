import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen'; // Importa el componente de pantalla HomeScreen
import DetailsScreen from './DetailsScreen'; // Importa el componente de pantalla DetailsScreen
// Crea el Drawer Navigator
const Drawer = createDrawerNavigator();
export default function Inicio() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}