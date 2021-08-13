import * as Styled from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
}

const Logo = ({ color = 'white', size = 'normal' }: LogoProps) => (
  <Styled.Container color={color} size={size}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 23"
      role="img"
      aria-label="Edusynch Logo"
    >
      <path
        d="M17.534.442H0v4.834h17.534V.442zm0 8.562H0v4.676h17.534V9.004zM0 17.724v4.834h17.534v-4.834H0zM44.683 5.655c-1.042-1.643-2.496-2.938-4.36-3.854C38.428.916 36.28.442 33.878.442H23.421v4.992h10.205c1.895 0 3.412.537 4.549 1.611 1.137 1.106 1.738 2.591 1.738 4.455 0 1.896-.6 3.38-1.738 4.455-1.137 1.074-2.654 1.611-4.55 1.611h-3.949V11.69h-6.255v10.868h10.457c2.401 0 4.55-.442 6.445-1.359 1.864-.884 3.318-2.18 4.36-3.854 1.011-1.643 1.548-3.602 1.548-5.845 0-2.211-.537-4.17-1.548-5.845zM54.244 20.315C56.076 22.115 58.635 23 61.92 23c3.286 0 5.813-.884 7.646-2.685 1.832-1.77 2.748-4.329 2.748-7.614V.442h-6.16v12.07c0 3.537-1.39 5.307-4.17 5.307-2.813 0-4.203-1.77-4.203-5.308V.442h-6.255v12.259c0 3.285.884 5.844 2.717 7.614zM78.716.442v22.116h6.256V.442h-6.256zM96.418 21.547c1.832.98 3.917 1.453 6.255 1.453 2.022 0 3.823-.348 5.466-1.074a10.293 10.293 0 004.044-3.096l-3.981-3.602c-1.453 1.738-3.191 2.59-5.213 2.59-1.201 0-2.275-.252-3.223-.79-.947-.505-1.674-1.263-2.18-2.21-.505-.948-.758-2.054-.758-3.318 0-1.232.253-2.338.759-3.286a5.518 5.518 0 012.18-2.243 6.754 6.754 0 013.222-.79c2.022 0 3.76.885 5.213 2.591l3.981-3.602a10.917 10.917 0 00-4.044-3.096C106.496.38 104.695 0 102.673 0c-2.338 0-4.423.505-6.255 1.485-1.833.98-3.286 2.338-4.329 4.075-1.074 1.77-1.58 3.728-1.58 5.94 0 2.211.506 4.202 1.58 5.94 1.043 1.769 2.496 3.127 4.329 4.107zM123.358.442h-6.192v9.415l6.192-6.73V.443zm6.413 9.794l9.036-9.794h-6.887l-8.562 9.194-6.192 6.666v6.256h6.192v-5.53l2.338-2.495 6.319 8.025h7.266l-9.51-12.322z"
        fill="currentColor"
      />
      <path fill="currentColor" d="M0 .525h5.255v22.071H0z" />
    </svg>
  </Styled.Container>
)

export default Logo
