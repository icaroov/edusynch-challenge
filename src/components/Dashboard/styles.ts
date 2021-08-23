import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    padding: 1rem;
  `}
`

export const SectionHeader = styled.section`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    padding: 0 1rem;

    z-index: ${theme.layers.alwaysOnTop};

    background-color: ${theme.colors.primary};
  `}
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1140px;

  margin: 5rem auto 0 auto;
`

export const HeroCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 235px;

    margin: 3rem 0;
    padding: 4rem 0 4rem 10rem;

    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};

    @media screen and ${theme.breakpoints.tabletMax} {
      padding: 2rem;
    }
  `}
`

export const LeftSide = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 520px;
    position: relative;

    img {
      position: absolute;
      left: -170px;

      width: 126px;
      height: 150px;

      @media screen and ${theme.breakpoints.tabletMax} {
        display: none;
      }
    }

    h1 {
      color: ${theme.colors.darkBg};

      font-family: ${theme.font.secondary};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.light};

      margin-bottom: 1rem;

      span {
        font-size: ${theme.font.sizes.xxlarge};
        color: ${theme.colors.secondary};
      }
    }

    p {
      font-size: ${theme.font.sizes.medium};
    }

    @media screen and ${theme.breakpoints.tabletMax} {
      justify-content: center;
    }
  `}
`

export const RightSide = styled.div`
  ${({ theme }) => css`
    display: inherit;

    @media screen and ${theme.breakpoints.tabletMax} {
      img {
        display: none;
      }
    }
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    margin-top: 3rem;
    height: 60px;

    background-color: ${theme.colors.white};
  `}
`

export const SectionCard = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`
