import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Header from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Desktop: Story = () => <Header />

export const Mobile: Story = () => <Header />

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
}
