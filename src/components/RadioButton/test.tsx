import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import RadioButton from '.'

describe('<RadioButton />', () => {
  it('should render the Radio Button', () => {
    renderWithTheme(<RadioButton text="Teste" />)

    expect(screen.getByRole('button', { name: /Teste/i })).toBeInTheDocument()
  })
})
