import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'

import * as Styled from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Container>
      <Styled.IconContainer onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </Styled.IconContainer>

      <Logo />

      <Styled.MenuNav>
        <Styled.MenuLink href="#">How it works</Styled.MenuLink>
        <Styled.MenuLink href="#">About Us</Styled.MenuLink>
      </Styled.MenuNav>

      <Styled.ContainerButton>
        <Button>Get Started</Button>
      </Styled.ContainerButton>

      <Styled.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <Styled.LogoContainer>
          <Logo />

          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        </Styled.LogoContainer>

        <Styled.MenuNav>
          <Styled.MenuLink href="#">How it works</Styled.MenuLink>
          <Styled.MenuLink href="#">About Us</Styled.MenuLink>

          <Button fullWidth>Get Started</Button>
        </Styled.MenuNav>
      </Styled.FullMenu>
    </Styled.Container>
  )
}

export default Menu
