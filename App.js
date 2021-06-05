import 'react-native-gesture-handler';
import React from 'react';

import { LogBox } from 'react-native'

import './src/services/firebase';
import Routes from './src/routes';
import { PerfilProvider } from './src/contexts/perfil';
import { UsuarioProvider } from './src/contexts/usuario';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer'])
  return (
    <PerfilProvider>
      <UsuarioProvider>
        <Routes />
      </UsuarioProvider>
    </PerfilProvider>
    
  );
}
