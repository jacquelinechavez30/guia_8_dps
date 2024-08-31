/*import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'; // Importa el componente de pantalla HomeScreen
import DetailsScreen from './src/screens/DetailsScreen'; // Importa el componente de pantalla DetailsScreen
// Crea el Drawer Navigator
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StepsScreen from './src/screens/StepsScreen';

const App = () => {
  const steps = [
    { step: 1, description: 'Separa los materiales reciclables del resto de la basura.' },
    { step: 2, description: 'Lava los envases antes de reciclarlos.'},
    { step: 3, description: 'Identifica los contenedores de reciclaje de tu área.' },
    { step: 4, description: 'Coloca los materiales reciclables en los contenedores correspondientes.' },
  ];

  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Pasos de Reciclaje">
        {(props) => <StepsScreen {...props} steps={steps} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;


