import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  margin-top: 3rem;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${darken(0.1, theme.colors.lightBg)};
    }

    button {
      padding: 1.5rem;
    }

    @media ${theme.breakpoints.tabletMax} {
      flex-direction: column;

      p {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const CurrentPage = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const ItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
`
