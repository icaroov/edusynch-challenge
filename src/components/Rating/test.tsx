import { render } from '@testing-library/react'

import Rating from '.'

describe('<Rating />', () => {
  it('should render the rating component', () => {
    const { container } = render(<Rating />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
