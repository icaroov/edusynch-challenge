import { useState } from 'react'

import * as Styled from './styles'

export type RadioButtonProps = {
  text: string
}

const RadioButton = ({ text }: RadioButtonProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <Styled.Container>
      <Styled.RadioBox
        type="button"
        isActive={checked}
        onClick={() => setChecked(!checked)}
      >
        <Styled.Label>{text}</Styled.Label>
      </Styled.RadioBox>
    </Styled.Container>
  )
}

export default RadioButton
