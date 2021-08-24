import { renderWithTheme } from 'utils/tests/helpers'
import mockData from 'components/Card/mock'
import Dashboard from '.'

describe('<Dashboard />', () => {
  it('should render the Dashboard', () => {
    const { container } = renderWithTheme(
      <Dashboard courses={mockData} isLoading={false} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
