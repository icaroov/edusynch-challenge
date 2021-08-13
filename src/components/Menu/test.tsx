import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /edusynch logo/i })
    ).toBeInTheDocument()
  })

  it('should open/close menu', () => {
    renderWithTheme(<Menu />)
    const fullMenu = screen.getByRole('navigation', { hidden: true })

    // menu closed
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    // open menu
    const menuIcon = screen.getByLabelText(/open menu/i)

    fireEvent.click(menuIcon)
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle({ opacity: 1 })

    // close menu
    const closeIcon = screen.getByLabelText(/close menu/i)

    fireEvent.click(closeIcon)
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })
  })
})
