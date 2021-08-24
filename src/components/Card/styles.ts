import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 1rem;

    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    img {
      width: 100%;
      min-height: 165px;

      border-radius: ${theme.border.radius};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  margin-top: 1.4rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Stars = styled.div`
  text-decoration: none;
`

export const ButtonCard = styled.button`
  ${({ theme }) => css`
    padding: 1rem;
    color: ${theme.colors.black};

    font-size: ${theme.font.sizes.xsmall};
    background: ${theme.colors.lighPink};

    border: none;
    border-radius: ${theme.border.radius};

    cursor: help;
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    margin: 1.6rem 0;

    font-family: ${theme.font.secondary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    color: ${theme.colors.darkBg};
    text-transform: capitalize;
  `}
`
