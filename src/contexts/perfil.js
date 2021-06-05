import React, { createContext, useState, useEffect } from "react";

const PerfilContext = createContext({});

const PerfilProvider = ({children}) => {
  const [ perfil, setPerfil ] = useState('');

  function handlePerfil(perfil) {
    setPerfil(perfil);
  }

  return (
    <PerfilContext.Provider value={{ perfil, handlePerfil }}>
      {children}
    </PerfilContext.Provider>
  )
}

export { PerfilContext, PerfilProvider };