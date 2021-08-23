import styled, { css } from 'styled-components'

export const Container = styled.menu`
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 2rem;

    color: ${theme.colors.white};
    cursor: pointer;

    @media screen and ${theme.breakpoints.tabletMin} {
      display: none;
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    display: none;

    @media screen and ${theme.breakpoints.tabletMin} {
      display: block;
      margin-left: ${theme.spacings.xxlarge};
    }
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    margin: 0.3rem ${theme.spacings.small} 0;
    text-align: center;
    text-decoration: none;

    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    &:hover {
      &::after {
        content: '';
        display: block;
        position: absolute;

        height: 0.2rem;
        background-color: ${theme.colors.secondary};

        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      top: 0;
      right: 0;

      width: 2.4rem;
      height: 2.4rem;

      color: ${theme.colors.white};

      cursor: pointer;
    }
  `}
`

type FullMenuProps = {
  isOpen: boolean
}

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    z-index: ${theme.layers.menu};

    padding: ${theme.spacings.xsmall};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100vh;
    overflow: hidden;

    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    background: ${theme.colors.darkBg};

    ${MenuNav} {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      flex: 1;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.small};

      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${ContainerButton} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const ContainerButton = styled.div`
  ${({ theme }) => css`
    display: none;

    @media screen and ${theme.breakpoints.tabletMin} {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  `}
`
