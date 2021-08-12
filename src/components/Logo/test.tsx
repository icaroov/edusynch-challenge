import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with default color', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/edusynch logo/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render the logo in black version', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/edusynch logo/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render the logo in normal version', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/edusynch logo/i).parentElement).toHaveStyle({
      width: '10rem'
    })
  })

  it('should render the logo in large version', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/edusynch logo/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
