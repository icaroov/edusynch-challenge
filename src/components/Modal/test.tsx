import { fireEvent, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { renderWithTheme } from 'utils/tests/helpers'
import { useModal } from 'hooks/useModal'

import Modal from '.'

describe('<Modal />', () => {
  it('should render modal when button clicked', () => {
    const { result } = renderHook(() => useModal())

    const { container } = renderWithTheme(
      <>
        <Modal>
          <h1>Modal</h1>
        </Modal>
        <button onClick={result.current.handleOpenModal}>Show Modal</button>
      </>
    )

    // modal closed
    expect(screen.queryByLabelText(/modal/i)).not.toBeInTheDocument()

    // modal open
    const showModalButton = screen.getByText(/show modal/i)

    fireEvent.click(showModalButton)
    expect(screen.getByText(/modal/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
