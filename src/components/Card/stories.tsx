import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    numberLessons: 10,
    description: 'Master English: Improve Your Speaking'
  }
} as Meta

export const Default: Story<CardProps> = args => <Card {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
