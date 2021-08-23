import { renderWithTheme } from 'utils/tests/helpers'

import Dashboard from '.'

describe('<Dashboard />', () => {
  it('should render the Dashboard', () => {
    const { container } = renderWithTheme(<Dashboard />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
