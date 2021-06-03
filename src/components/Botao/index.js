import React from 'react'

import { BotaoStyle, Label } from './style'

export default function Botao({ label }) {
  return (
    <BotaoStyle>
      <Label>{ label }</Label>
    </BotaoStyle>
  )
}