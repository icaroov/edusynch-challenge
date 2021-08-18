import { Story, Meta } from '@storybook/react/types-6-0'
import RadioButton, { RadioButtonProps } from '.'

export default {
  title: 'RadioButton',
  args: {
    text: "I'M A TEACHER"
  },
  component: RadioButton
} as Meta

export const Default: Story<RadioButtonProps> = args => (
  <RadioButton {...args} />
)
