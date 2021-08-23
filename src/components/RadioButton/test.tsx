import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import RadioButton from '.'

describe('<RadioButton />', () => {
  const onCheck = jest.fn()

  it('should render the Radio Button', () => {
    const { container } = renderWithTheme(
      <RadioButton isActive={false} onCheck={onCheck} text="Teste" />
    )

    expect(screen.getByRole('button', { name: /Teste/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the active button correctly', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<RadioButton text="Teacher" onCheck={onCheck} isActive />)

    expect(screen.getByRole('button', { name: /Teacher/i })).toHaveStyle({
      'background-color': '#7A57FD'
    })
  })
})
