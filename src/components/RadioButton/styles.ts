import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};
    }

    @media ${theme.breakpoints.tabletMax} {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const Label = styled.span`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    &::before {
      content: '';
      height: 1.8rem;
      width: 1.8rem;
      border: 3px solid ${theme.colors.secondary};
      border-radius: 50%;
      margin-right: 20px;
    }

    @media ${theme.breakpoints.tabletMax} {
      padding: 1rem;
    }
  `}
`

type RadioBoxProps = {
  isActive: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;

    border: 2px solid
      ${isActive ? darken(0.2, theme.colors.white) : 'transparent'};
    padding: 1rem 2rem;
    border-radius: 4px;
    background-color: ${isActive
      ? theme.colors.primary
      : 'rgba(121, 85, 232, 0.3)'};

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    transition: 0.3s;

    &:hover {
      background-color: ${darken(0.05, theme.colors.primary)};
    }

    ${Label} {
      &::before {
        background-color: ${isActive
          ? theme.colors.secondary
          : darken(0.1, theme.colors.white)};
        border-color: ${isActive
          ? darken(0.4, theme.colors.tertiary)
          : 'transparent'};
      }
    }

    cursor: pointer;
  `}
`
