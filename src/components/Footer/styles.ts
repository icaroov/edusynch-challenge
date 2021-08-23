import styled, { css } from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};

    text-align: center;
  `}
`
