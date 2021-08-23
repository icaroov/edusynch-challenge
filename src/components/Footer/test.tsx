import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer correctly', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText(/Eduick/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
