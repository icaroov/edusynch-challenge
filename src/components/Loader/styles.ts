import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      background: ${theme.colors.primary};
      width: 5px;
      height: 25px;
      display: inline-block;
      margin: 0 2px;
      border-radius: ${theme.border.radius};
    }

    span:nth-child(1) {
      animation: grow 0.5s -0.45s ease-in-out alternate infinite;
    }
    span:nth-child(2) {
      animation: grow 0.5s -0.3s ease-in-out alternate infinite;
    }
    span:nth-child(3) {
      animation: grow 0.5s -0.15s ease-in-out alternate infinite;
    }
    span:nth-child(4) {
      animation: grow 0.5s 0s ease-in-out alternate infinite;
    }
    @keyframes grow {
      to {
        transform: scaleY(2);
      }
    }
  `}
`
