import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import LoginForm from '.'

describe('<LoginForm />', () => {
  it('should render the header form', () => {
    renderWithTheme(<LoginForm />)

    expect(
      screen.getByRole('heading', { name: /get started/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /just login/i })
    ).toBeInTheDocument()
  })

  it('should render the form correctly', () => {
    const { container } = renderWithTheme(<LoginForm />)

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
})
