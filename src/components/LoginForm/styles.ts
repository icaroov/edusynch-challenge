import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    background-color: ${theme.colors.primary};

    button {
      align-self: flex-end;
    }

    @media screen and ${theme.breakpoints.tabletMax} {
      button {
        width: 100%;
      }
    }
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  letter-spacing: -0.06em;

  margin-bottom: 4.8rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    font-size: 3.4rem;
    line-height: 118.5%;
    font-family: ${theme.font.secondary};
    font-weight: ${theme.font.light};
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};

    font-size: 3.4rem;
    line-height: 118.5%;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
