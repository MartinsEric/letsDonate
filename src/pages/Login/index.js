import React, { useState, useContext } from 'react'
import Botao from '../../components/Botao'
import { UsuarioContext } from '../../contexts/usuario'
import { 
  Container,
  Title,
  LoginCard,
  Input,
  BotoesContainer
} from './style'

export default function Login({navigation}) {
  const { signIn } = useContext(UsuarioContext);

  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')

  function handleCadastro() {
    navigation.push("Cadastro")
  }

  async function handleLogin() {

    try{
      await signIn(email.toLowerCase(), senha);
    }catch(err) {
      console.warn("Não foi possível logar!", err)
    }
  }

  return (
    <Container >
      <LoginCard>
        <Title>Login</Title>

        <Input value={ email } onChangeText={setEmail} placeholder="Email"></Input>
        <Input value={ senha } onChangeText={setSenha} placeholder="Senha" secureTextEntry={true}></Input>
        
        <BotoesContainer>
          <Botao label='Logar' labelSize={13} width={65} height={35} styles={{ marginRight: 5 }} onPress={async () => await handleLogin()}></Botao>
          <Botao label='Voltar' labelSize={13} width={65} height={35} styles={{ marginRight: 5 }} onPress={() => navigation.push("EscolherPerfil")}></Botao>
          <Botao label='Cadastrar' labelSize={13} width={65} height={35} onPress={handleCadastro}></Botao>
        </BotoesContainer>
      </LoginCard>
    </Container>
  )
}