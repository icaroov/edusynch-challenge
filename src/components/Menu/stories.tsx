import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Desktop: Story = () => <Menu />

Desktop.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: Story = () => <Menu />

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  },
  backgrounds: {
    default: 'dark'
  }
}
