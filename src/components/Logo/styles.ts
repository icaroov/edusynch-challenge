import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const containerModifiers = {
  normal: () => css`
    width: 10rem;
    height: 3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 6rem;
  `
}

export const Container = styled.div<LogoProps>`
  ${({ theme, color = 'white', size = 'normal' }) => css`
    color: ${theme.colors[color]};

    ${!!size && containerModifiers[size]}
  `}
`
