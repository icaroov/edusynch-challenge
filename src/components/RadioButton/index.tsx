import * as Styled from './styles'

export type RadioType = 'teacher' | 'student'

export type RadioButtonProps = {
  text: string
  typeRadio?: 'teacher' | 'student'
  isActive: boolean
  onCheck: () => void
}

const RadioButton = ({ text, isActive, onCheck }: RadioButtonProps) => {
  return (
    <Styled.Container>
      <Styled.RadioBox type="button" isActive={isActive} onClick={onCheck}>
        <Styled.Label>{text}</Styled.Label>
      </Styled.RadioBox>
    </Styled.Container>
  )
}

export default RadioButton
