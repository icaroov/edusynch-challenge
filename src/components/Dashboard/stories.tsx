import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Dashboard from '.'

export default {
  title: 'Dashboard',
  component: Dashboard
} as Meta

export const Desktop: Story = () => <Dashboard />
export const Mobile: Story = () => <Dashboard />

Desktop.parameters = {
  layout: 'fullscreen'
}

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
}
