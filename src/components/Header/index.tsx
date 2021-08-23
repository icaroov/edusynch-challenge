import Logo from 'components/Logo'

import * as Styled from './styles'

const Header = () => (
  <Styled.Header>
    <Styled.LeftSide>
      <Logo aria-label="logo" />
      <Styled.Link href="#">My Classes</Styled.Link>
    </Styled.LeftSide>

    <Styled.RightSide>
      <Styled.ButtonHeader>
        <span>Change to teacher mode</span>
      </Styled.ButtonHeader>
      <Styled.Avatar src="/img/avatar-2.png" alt="user avatar" />
    </Styled.RightSide>
  </Styled.Header>
)

export default Header
