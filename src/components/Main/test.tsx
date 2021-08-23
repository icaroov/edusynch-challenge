import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

describe('<Main />', () => {
  it('should render the background img', () => {
    renderWithTheme(<Main />)

    expect(screen.getByTestId('background')).toHaveStyle(
      `background-image: url('/img/background.svg')`
    )
  })

  it('should render the main page correctly', () => {
    renderWithTheme(<Main />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /edusynch logo/i })
    ).toBeInTheDocument()
  })
})
