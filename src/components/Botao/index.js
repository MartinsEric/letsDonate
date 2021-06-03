import React from 'react'

import { BotaoStyle, Label } from './style'

export default function Botao({ label, onPress}) {
  return (
    <BotaoStyle onPress={onPress}>
      <Label>{ label }</Label>
    </BotaoStyle>
  )
}