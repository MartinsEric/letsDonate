import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Cadastro({navigation}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Text>Cadastro!</Text>
      <Button title='Instituições' onPress={() => navigation.push('Instituicoes')}>
        <Text>Instituições</Text>
      </Button>
      <Button title='Dashboard' onPress={() => navigation.push('Dashboard')}>
        <Text>Dashboard</Text>
      </Button>
    </View>
  )
}