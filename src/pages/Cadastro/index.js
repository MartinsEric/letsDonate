import React, { useState, useContext } from 'react'

import Botao from '../../components/Botao'

import firebase from "firebase";
import "firebase/firestore";

import { 
  Container,
  Title,
  CadastroCard,
  EnderecoContainer,
  Input,
  BotoesContainer
} from './style'
import { UsuarioContext } from '../../contexts/usuario';
import { PerfilContext } from '../../contexts/perfil';

export default function Cadastro({navigation}) {
  const { signUp } = useContext(UsuarioContext);
  const { perfil } = useContext(PerfilContext);

  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ confirmacaoSenha, setConfirmacaoSenha ] = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ numero, setNumero ] = useState('')
  const [ bairro, setBairro ] = useState('')
  const [ cidade, setCidade ] = useState('')
  const [ uf, setUf ] = useState('')

  async function handleCadastro() {
    if (nome === '' 
      || email === '' 
      || senha === '' 
      || endereco === '' 
      || numero === '' 
      || bairro === '' 
      || cidade === '' 
      || uf === ''
      ) {
        console.warn("Preencha todos os campos!");
        return;
    }

    if(senha !== confirmacaoSenha) {
      console.warn("A senha e a confirmações estão diferentes!");
      return;
    }

    try{
      await firebase.firestore().collection('usuarios').add({
        nome,
        email: email.toLowerCase(),
        senha,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        perfil: perfil
      });
      await signUp(email.toLowerCase(), senha)
    }catch(err) {
      console.warn("Erro ao salvar no banco!")
    }
  }

  return (
    <Container >
      <CadastroCard>
        <Title>Cadastro de { perfil === "instituicao" ? "Instituição" : "Doador"}</Title>

        <Input value={ nome } onChangeText={setNome} placeholder="Nome"></Input>
        <Input value={ email } onChangeText={setEmail} placeholder="Email"></Input>
        <Input value={ senha } onChangeText={setSenha} placeholder="Senha" secureTextEntry={true}></Input>
        <Input value={ confirmacaoSenha } onChangeText={setConfirmacaoSenha} placeholder="Confirmação da senha" secureTextEntry={true}></Input>
        <EnderecoContainer>
          <Input value={ endereco } style={{ marginRight: 5, flex: 0.75 }} onChangeText={setEndereco} placeholder="Endereço"></Input>
          <Input value={ numero } style={{ flex: 0.25 }} onChangeText={setNumero} placeholder="Número"></Input>
        </EnderecoContainer>
        <Input value={ bairro } onChangeText={setBairro} placeholder="Bairro"></Input>
        <EnderecoContainer>
          <Input value={ cidade } style={{ marginRight: 5, flex: 0.75 }} onChangeText={setCidade} placeholder="Cidade"></Input>
          <Input value={ uf } style={{ flex: 0.25 }} onChangeText={setUf} placeholder="UF"></Input>
        </EnderecoContainer>

        <BotoesContainer>
          <Botao label='Voltar' labelSize={13} width={65} height={35} styles={{ marginRight: 5 }} onPress={() => navigation.push("Login", { perfil })}></Botao>
          <Botao label='Cadastrar' labelSize={13} width={65} height={35} onPress={handleCadastro}></Botao>
        </BotoesContainer>
      </CadastroCard>
    </Container>
  )
}