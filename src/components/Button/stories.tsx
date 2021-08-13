import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = args => <Button {...args} />

Default.args = {
  children: 'Get Started'
}

export const asLink: Story = args => <Button {...args} />

asLink.args = {
  children: 'SEARCH',
  as: 'a',
  href: '/link'
}
