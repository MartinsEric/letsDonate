import React, { useState } from 'react'
import { Text } from 'react-native'
import { set } from 'react-native-reanimated'
import Botao from '../../components/Botao'
import { 
  Container,
  Title,
  LoginCard,
  Input,
  BotoesContainer
} from './style'

export default function Login({route, navigation}) {
  const { perfil } = route.params
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')

  function handleCadastro() {
    navigation.push("Cadastro", { perfil })
  }

  function handleLogin() {
    if(perfil === "doador") {
      navigation.push("Instituicoes")
    }

    if(perfil === "instituicao") {
      navigation.push("Dashboard")
    }
  }

  return (
    <Container >
      <LoginCard>
        <Title>Login</Title>

        <Input value={ email } onChangeText={setEmail} placeholder="Email"></Input>
        <Input value={ senha } onChangeText={setSenha} placeholder="Senha" secureTextEntry={true}></Input>
        
        <BotoesContainer>
          <Botao label='Logar' labelSize={13} width={65} height={35} onPress={handleLogin}></Botao>
          <Botao label='Voltar' labelSize={13} width={65} height={35} onPress={() => navigation.push("EscolherPerfil")}></Botao>
          <Botao label='Cadastrar' labelSize={13} width={65} height={35} onPress={handleCadastro}></Botao>
        </BotoesContainer>
      </LoginCard>
    </Container>
  )
}