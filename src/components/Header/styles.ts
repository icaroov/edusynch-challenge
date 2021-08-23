import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1140px;
    height: 64px;

    margin: 0 auto;
    padding: 2rem 0;

    background-color: ${theme.colors.primary};
  `}
`

export const LeftSide = styled.div`
  display: inherit;
`

export const RightSide = styled.div`
  display: inherit;
`

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;

  margin-left: 2.8rem;
`
export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    margin-left: 4.8rem;

    font-size: ${theme.font.sizes.small};
    letter-spacing: -0.02em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media screen and ${theme.breakpoints.tabletMax} {
      display: none;
    }
  `}
`

export const ButtonHeader = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    padding: 1rem 2rem;

    border: none;
    border-radius: ${theme.border.radius};
    background-color: ${darken(0.15, '#8B75DC')};
    transition: all 0.2s;

    &:hover {
      background-color: ${darken(0.2, '#8B75DC')};
    }

    span {
      font-weight: ${theme.font.bold};
      text-transform: uppercase;

      line-height: 15px;
      letter-spacing: -0.02em;
    }

    @media screen and ${theme.breakpoints.tabletMax} {
      display: none;
    }
  `}
`
