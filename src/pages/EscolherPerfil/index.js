import React from 'react'
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

export default function EscolherPerfil({navigation}) {
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
          <Botao label="Doador" onPress={() => navigation.push('Login', {perfil: 'doador'})}></Botao>
          <Botao label="Instituição" onPress={() => navigation.push('Login', {perfil: 'instituicao'})}></Botao>
        </BotaoContainer>
      </Main>
    </Container>
  )
} 