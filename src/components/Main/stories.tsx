import { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { RadioType } from 'components/RadioButton'

import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Desktop: Story<MainProps> = () => {
  const [inputValue, setInputValue] = useState('')
  const [typeRadio, setTypeRadio] = useState<RadioType>('teacher')

  function handleChangeType(handleType: RadioType) {
    setTypeRadio(handleType)
  }

  return (
    <Main
      inputValue={inputValue}
      setInputValue={setInputValue}
      typeRadio={typeRadio}
      handleChangeType={handleChangeType}
    />
  )
}

export const Mobile: Story<MainProps> = () => {
  const [inputValue, setInputValue] = useState('')
  const [typeRadio, setTypeRadio] = useState<RadioType>('teacher')

  function handleChangeType(handleType: RadioType) {
    setTypeRadio(handleType)
  }

  return (
    <Main
      inputValue={inputValue}
      setInputValue={setInputValue}
      typeRadio={typeRadio}
      handleChangeType={handleChangeType}
    />
  )
}

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
}
