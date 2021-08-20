import { Story, Meta } from '@storybook/react/types-6-0'

import { useModal } from 'hooks/useModal'
import Modal from '.'

export default {
  title: 'Modal',
  component: Modal
} as Meta

export const Default: Story = () => {
  const { open, setOpen } = useModal()
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <span>{open ? 'Close Modal' : 'Open Modal'}</span>
      </button>

      <Modal>
        <h1>Modal Content</h1>
      </Modal>
    </>
  )
}
