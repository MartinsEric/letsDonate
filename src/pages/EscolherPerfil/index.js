import React from 'react'
import { Image } from 'react-native'

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

export default function EscolherPerfil() {
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
          <Botao label="Doador"></Botao>
          <Botao label="Instituição"></Botao>
        </BotaoContainer>
      </Main>
    </Container>
  )
} 