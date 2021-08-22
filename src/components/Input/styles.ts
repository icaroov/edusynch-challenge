import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-bottom: 0.5rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    max-height: 5.6rem;

    padding: 2rem 1.5rem;

    border-radius: ${theme.border.radius};
    border: 1px solid ${darken(0.2, theme.colors.white)};

    color: ${theme.colors.white};
    background-color: ${theme.colors.inputBg};

    font-size: ${theme.font.sizes.large};

    &:focus {
      outline-width: 1px;
      outline-style: dashed;
      outline-color: ${theme.colors.mainBg};
    }

    &::placeholder {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }
  `}
`
