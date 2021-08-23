import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  image:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
  numberLessons: 10,
  description: 'Master English: Improve Your Speaking'
}

describe('<Card />', () => {
  it('should render the card', () => {
    const { container } = renderWithTheme(<Card {...props} />)

    expect(screen.getByRole('article')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
