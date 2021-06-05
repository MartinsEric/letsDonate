import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import EscolherPerfil from '../pages/EscolherPerfil'; 
import Cadastro from "../pages/Cadastro";

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EscolherPerfil" component={EscolherPerfil} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  )

}

export default AuthRoutes;