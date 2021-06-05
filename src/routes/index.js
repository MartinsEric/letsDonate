import React, { useContext } from "react";

import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { UsuarioContext } from "../contexts/usuario";

const Routes = () => {
  const { user } = useContext(UsuarioContext)

  return (
    <NavigationContainer>
      {
        user 
        ? <AppRoutes />
        : <AuthRoutes />
      }
    </NavigationContainer>
  )

}

export default Routes;