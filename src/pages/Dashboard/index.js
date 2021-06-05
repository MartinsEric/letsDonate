import React, { useState, useContext, useEffect } from 'react'
import Botao from '../../components/Botao'
import { UsuarioContext } from '../../contexts/usuario';

import { 
  Container,
  Title,
  DashboardCard,
  InfoContainer,
  Label,
  TextInfo,
  BotaoContainer
} from './style'

import firebase from "firebase";
import "firebase/firestore";

export default function Dashboard() {
  const { user, signOut } = useContext(UsuarioContext);

  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ numero, setNumero ] = useState(null)
  const [ bairro, setBairro ] = useState('')
  const [ cidade, setCidade ] = useState('')
  const [ uf, setUf ] = useState('')

  useEffect(() => {
    setNome(user.nome);
    setEmail(user.email);
    setEndereco(user.endereco);
    setNumero(user.numero);
    setBairro(user.bairro);
    setCidade(user.cidade);
    setUf(user.uf);
  }, []);

  return (
    <Container >
      <DashboardCard>
        <Title>{ nome }</Title>

        <InfoContainer>
          <Label>Email: </Label>
          <TextInfo>{ email }</TextInfo>
        </InfoContainer>
        
        <InfoContainer>
          <Label>Endereço: </Label>
          <TextInfo>{ endereco }</TextInfo>
        </InfoContainer>
        
        <InfoContainer>
          <Label>Número: </Label>
          <TextInfo>{ numero }</TextInfo>
        </InfoContainer>
        
        <InfoContainer>
          <Label>Bairro: </Label>
          <TextInfo>{ bairro }</TextInfo>
        </InfoContainer>
        
        <InfoContainer>
          <Label>cidade: </Label>
          <TextInfo>{ cidade }</TextInfo>
        </InfoContainer>
        
        <InfoContainer>
          <Label>UF: </Label>
          <TextInfo>{ uf }</TextInfo>
        </InfoContainer>

        <BotaoContainer>
          <Botao label="Deslogar" width="100%" onPress={signOut}></Botao>
        </BotaoContainer>
        
      </DashboardCard>
    </Container>
  )
}