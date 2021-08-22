import { InputHTMLAttributes } from 'react'
import * as Styled from './styles'

export type InputProps = {
  setValue: (text: string) => void
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ name, label, setValue, ...props }: InputProps) => (
  <Styled.Container>
    {!!label && <Styled.Label htmlFor={label}>{label}</Styled.Label>}
    <Styled.Input
      {...(label ? { id: name } : {})}
      type="text"
      onChange={e => setValue(e.target.value)}
      {...props}
    />
  </Styled.Container>
)

export default Input
