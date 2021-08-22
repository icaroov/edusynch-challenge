import { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Input from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: Story = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Input
      label="E-mail"
      name="E-mail"
      type="email"
      placeholder="Seu melhor e-mail..."
      value={inputValue}
      setValue={setInputValue}
    />
  )
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
