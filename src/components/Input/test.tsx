import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render with a label', () => {
    const setValue = jest.fn()

    renderWithTheme(
      <Input
        label="E-mail"
        name="E-mail"
        value="icarovinici@gmail.com"
        setValue={setValue}
      />
    )

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
  })

  it('should render without a label', () => {
    const setValue = jest.fn()

    renderWithTheme(
      <Input name="E-mail" value="icarovinici@gmail.com" setValue={setValue} />
    )

    expect(screen.queryByLabelText('E-mail')).not.toBeInTheDocument()
  })

  it('should render with a placeholder', () => {
    const setValue = jest.fn()

    renderWithTheme(
      <Input
        name="E-mail"
        value="icarovinici@gmail.com"
        placeholder="Seu melhor e-mail..."
        setValue={setValue}
      />
    )

    expect(
      screen.getByPlaceholderText('Seu melhor e-mail...')
    ).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const setValue = jest.fn()

    renderWithTheme(<Input name="E-mail" label="E-mail" setValue={setValue} />)

    const input = screen.getByRole('textbox')
    const text = 'my text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(setValue).toHaveBeenCalledTimes(text.length)
    })

    expect(setValue).toHaveBeenCalledWith(text)
  })
})
