import ReactModal from 'react-modal'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { useModal } from 'hooks/useModal'

import * as Styled from './styles'

const Modal = ({ children }: { children: JSX.Element }) => {
  const { open, handleCloseModal } = useModal()

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <Styled.Container>
        <CloseIcon aria-label="Close Modal" onClick={handleCloseModal} />

        <Styled.Content data-testid="content-modal">{children}</Styled.Content>
      </Styled.Container>
    </ReactModal>
  )
}

export default Modal
