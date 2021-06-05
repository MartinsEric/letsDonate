import React from 'react'

import { BotaoStyle, Label } from './style'

export default function Botao({ label, labelSize = 16, width = 130, height = 55, styles, onPress}) {
  return (
    <BotaoStyle  
      style={{ width: width, height: height, ...styles }}
      onPress={onPress}
    >
      <Label style={{ fontSize: labelSize }}>{ label }</Label>
    </BotaoStyle>
  )
}