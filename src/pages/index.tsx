import { NextPage } from 'next'

import Main from 'components/Main'
import { useState } from 'react'
import { RadioType } from 'components/RadioButton'

const Home: NextPage = () => {
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

export default Home
