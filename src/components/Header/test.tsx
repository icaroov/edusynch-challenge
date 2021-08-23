import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the header correctly', () => {
    const { container } = renderWithTheme(<Header />)

    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /user avatar/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
