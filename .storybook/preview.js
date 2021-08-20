import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { ModalProvider } from 'hooks/useModal'

addDecorator(withNextRouter())

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles />
        <Story />
      </ModalProvider>
    </ThemeProvider>
  )
]
