import { renderWithTheme } from 'utils/tests/helpers'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the Loader', () => {
    const { container } = renderWithTheme(<Loader />)

    // expect(screen.getByRole()).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
