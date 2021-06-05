import React, { useContext } from "react";
import { PerfilContext } from "../contexts/perfil";
import Instituicoes from '../pages/Instituicoes';
import Dashboard from '../pages/Dashboard';


const AppRoutes = () => {
  const { perfil } = useContext(PerfilContext);

  return (
    <>
      {
        perfil === 'doador'
        ? <Instituicoes></Instituicoes>
        : <Dashboard></Dashboard>
      }
    </>
    
  )
}

export default AppRoutes;