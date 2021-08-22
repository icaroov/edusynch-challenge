import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { useModal } from 'hooks/useModal'

import Button from 'components/Button'
import LoginForm from 'components/LoginForm'

import Modal from '.'

export default {
  title: 'Modal',
  component: Modal
} as Meta

export const Empty: Story = () => {
  const { open, setOpen } = useModal()
  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        <span>{open ? 'Close Empty Modal' : 'Open Empty Modal'}</span>
      </Button>

      <Modal>
        <h1>Modal Content</h1>
      </Modal>
    </>
  )
}

export const WithLoginForm: Story = () => {
  const { open, setOpen } = useModal()
  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        <span>{open ? 'Close Modal' : 'Open Modal'}</span>
      </Button>

      <Modal>
        <LoginForm />
      </Modal>
    </>
  )
}

export const MobileWithForm: Story = () => {
  const { open, setOpen } = useModal()

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        <span>{open ? 'Close Modal' : 'Open Modal'}</span>
      </Button>

      <Modal>
        <LoginForm />
      </Modal>
    </>
  )
}

MobileWithForm.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
}
