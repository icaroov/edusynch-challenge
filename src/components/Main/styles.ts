import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: 3rem;

    width: 100%;
    height: 100vh;

    color: ${theme.colors.white};

    background-image: url('/img/background.svg');
    background-repeat: no-repeat;

    overflow-y: hidden;

    @media screen and ${theme.breakpoints.tabletMax} {
      background-size: cover;
      height: 100%;
    }
  `}
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;

  menu {
    margin-bottom: 4.5rem;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const Image = styled.img`
  width: 677px;
  height: 750px;

  @media screen and (max-width: 1200px) {
    max-width: 320px;
    height: 550px;
  }
`

export const Info = styled.div`
  button {
    text-transform: uppercase;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    font-size: 3.4rem;
    line-height: 118.5%;
    font-family: ${theme.font.secondary};
    font-weight: ${theme.font.light};

    @media screen and ${theme.breakpoints.tabletMax} {
      font-size: 2.8rem;
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};

    font-size: 3.4rem;
    line-height: 118.5%;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;

    margin-bottom: 6rem;

    @media screen and ${theme.breakpoints.tabletMax} {
      font-size: 2.8rem;
      margin-bottom: 3rem;
    }
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    max-width: 496px;

    margin-bottom: 6rem;

    line-height: 191.68%;
    font-size: ${theme.font.sizes.medium};

    @media screen and ${theme.breakpoints.tabletMax} {
      margin-bottom: 3rem;
    }
  `}
`

export const RadioContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    margin: 3rem 0;

    @media screen and ${theme.breakpoints.tabletMax} {
      display: flex;
      flex-direction: column;
    }
  `}
`
