import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'normal' | 'large'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  size = 'normal',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) => (
  <Styled.Container size={size} fullWidth={fullWidth} {...props}>
    {!!children && <span>{children}</span>}
  </Styled.Container>
)

export default Button
