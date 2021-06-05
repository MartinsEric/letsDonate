import React, { createContext, useState, useContext } from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { PerfilContext } from "./perfil";

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) => {
  const { perfil } = useContext(PerfilContext);

  const [ user, setUser ] = useState(null);

  const getUser = async (email) => {
    const query = firebase.firestore().collection('usuarios').where("email", "==", email)
    try{
      const querySnapshot = await query.get();
      let user = null

      querySnapshot.forEach((doc) => {
        const {nome, email, perfil, endereco, numero, bairro, cidade, uf} = doc.data();
        user = {
          nome,
          email,
          endereco,
          numero,
          bairro,
          cidade,
          uf,
          perfil
        }
      })

      return user;

    }catch(err) {
      console.warn("Erro ao buscar usuário!", err)
    }
  }

  const logar = async (email) => {
    const userData = await getUser(email)

    if(!userData) {
      console.warn("Erro ao Logar!");
      return;
    }

    if(perfil !== userData.perfil) {
      console.warn("Usuário não existente!")
      return;
    }

    setUser(userData);
  }

  const signUp = async (email, password) => {
    try{
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await logar(email);
    }catch(err) {
      console.warn("Erro ao cadastrar!", err);
    }
  }

  const signIn = async (email, password) => {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      await logar(email);
    }catch(err) {
      console.warn("Erro ao logar!", err);
    }
  }

  const signOut = async () => {
    try{
      await firebase.auth().signOut()
      setUser(null);
    }catch(err) {
      console.warn("Erro ao deslogar! ", err);
    }
  }

  return (
    <UsuarioContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider };