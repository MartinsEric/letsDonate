import React, { useContext } from 'react'
import { Image, Button } from 'react-native'

import Botao from '../../components/Botao'

import { 
  Container,
  Header,
  Main,
  BotaoContainer,
  Logo,
  TextoBoasVindas,
  TextoPerfil,
  TextoDestacado
} from './style'

import logoImg from '../../../assets/LetsDonateLogo.png'
import { PerfilContext } from '../../contexts/perfil'

export default function EscolherPerfil({navigation}) {
  const { handlePerfil } = useContext(PerfilContext);

  function handleEscolha(perfil) {
    handlePerfil(perfil);
    navigation.push("Login");
  }

  return (
    <Container>
      <Header>
        <Logo>
          <Image source={logoImg}></Image>
        </Logo>
      </Header>

      <Main>
        <TextoBoasVindas>Olá, Seja bem vindo ao <TextoDestacado>LetsDonate!</TextoDestacado></TextoBoasVindas>
        <TextoPerfil>Para começarmos, escolha o seu perfil:</TextoPerfil>

        <BotaoContainer>
          <Botao label="Doador" onPress={() => { handleEscolha("doador") }}></Botao>
          <Botao label="Instituição" onPress={() => { handleEscolha("instituicao") }}></Botao>
        </BotaoContainer>
      </Main>
    </Container>
  )
} 