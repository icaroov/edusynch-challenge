import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the button in normal size', () => {
    const { container } = renderWithTheme(<Button>Get Started</Button>)

    expect(screen.getByRole('button', { name: /get started/i })).toHaveStyle({
      height: '4.8rem',
      padding: '1.5rem 4.4rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button with large size', () => {
    renderWithTheme(<Button size="large">Get Started</Button>)

    expect(screen.getByRole('button', { name: /get started/i })).toHaveStyle({
      height: '5.6rem',
      padding: '1.5rem 7.7rem',
      'font-size': '1.8rem'
    })
  })

  it('should render the button with full width', () => {
    renderWithTheme(<Button fullWidth>Get Started</Button>)

    expect(screen.getByRole('button', { name: /get started/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Get Started
      </Button>
    )

    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
