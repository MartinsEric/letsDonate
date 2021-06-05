import React, { useState, useContext, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import Botao from '../../components/Botao'
import { UsuarioContext } from '../../contexts/usuario'

import { 
  Container,
  Title,
  InstituicaoCard,
  InfoContainer,
  Label,
  TextInfo,
  BotaoContainer
} from './style'

import firebase from 'firebase';
import 'firebase/firestore';

export default function instituicoes() {
  const { signOut } = useContext(UsuarioContext);
  
  const [instituicoes, setInstituicoes] = useState([]);

  

  useEffect(() => {
    const getInstituicoes = () => {
      const query = firebase.firestore().collection('usuarios').where("perfil", "==", "instituicao")
      
      const instituicoes = []

      query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const {nome, email, endereco, numero, bairro, cidade, uf} = doc.data()
          instituicoes.push({ nome, email, endereco, numero, bairro, cidade, uf });
        });
    
        setInstituicoes(instituicoes);
      }).catch((err) => {
        console.warn("Erro ao buscar instituições cadastradas!",err);
      });
    }

    getInstituicoes();
  }, []);

  return (
    <Container >
      <ScrollView contentContainerStyle={{alignItems: 'center', padding: 15}}>
        {
          instituicoes.length ?
          instituicoes.map((instituicao, index) => {
            return (
              <InstituicaoCard key={index}>
                <Title>{ instituicao.nome }</Title>

                <InfoContainer>
                  <Label>Email: </Label>
                  <TextInfo>{ instituicao.email }</TextInfo>
                </InfoContainer>
                
                <InfoContainer>
                  <Label>Endereço: </Label>
                  <TextInfo>{instituicao.endereco}, {instituicao.numero}, {instituicao.bairro}, {instituicao.cidade}, {instituicao.uf}</TextInfo>
                </InfoContainer>              
              </InstituicaoCard>
            )
          })
          :
          <Text>Ainda não há instituições cadastradas!</Text>
        }
          
      </ScrollView>

      <BotaoContainer>
        <Botao label="Deslogar" width="100%" onPress={signOut}></Botao>
      </BotaoContainer>
    </Container>
  )
}