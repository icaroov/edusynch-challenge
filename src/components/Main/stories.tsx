import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Desktop: Story = args => <Main {...args} />

export const Mobile: Story = args => <Main {...args} />

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
}
