import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type ContainerButtonProps = Pick<ButtonProps, 'size' | 'fullWidth'>

const containerModifiers = {
  normal: (theme: DefaultTheme) => css`
    height: 4.8rem;
    font-size: ${theme.font.sizes.small};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5.6rem;
    font-size: ${theme.font.sizes.large};
    padding: 1.5rem 7.7rem;
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Container = styled.button<ContainerButtonProps>`
  ${({ theme, size, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: 0;
    padding: 1.5rem 4.4rem;
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.bold};

    text-decoration: none;
    color: ${theme.colors.primary};
    background: ${theme.colors.secondary};
    transition: all 0.2s ease;

    &:hover {
      background: ${darken(0.3, theme.colors.tertiary)};
    }

    cursor: pointer;

    ${!!size && containerModifiers[size](theme)};
    ${!!fullWidth && containerModifiers.fullWidth()};
  `}
`
