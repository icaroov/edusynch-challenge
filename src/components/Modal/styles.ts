import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    position: relative;

    color: ${theme.colors.white};

    > svg {
      position: absolute;
      top: 0;
      right: 0;

      width: 3rem;
      border: none;
      font-size: 0;
      transition: 0.3s;

      color: ${theme.colors.white};
      background-color: transparent;

      cursor: pointer;

      &:focus {
        outline-width: 1px;
        outline-style: dashed;
        outline-color: ${theme.colors.white};
      }

      &:hover {
        opacity: 0.7;
      }
    }

    @media screen and ${theme.breakpoints.tabletMax} {
      > svg {
        top: -20px;
      }
    }
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    white-space: normal;

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    line-height: 1.8em;
  `}
`
