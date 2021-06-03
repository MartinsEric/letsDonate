import 'react-native-gesture-handler';
import React from 'react';
import Cadastro from './src/pages/Cadastro';
import Dashboard from './src/pages/Dashboard';
import Instituicoes from './src/pages/Instituicoes';
import Login from './src/pages/Login';
import EscolherPerfil from './src/pages/EscolherPerfil'; 
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EscolherPerfil" component={EscolherPerfil} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Instituicoes" component={Instituicoes} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
