import Button from 'components/Button'
import Input from 'components/Input'
import Menu from 'components/Menu'
import RadioButton, { RadioType } from 'components/RadioButton'

import * as Styled from './styles'

type MainProps = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  typeRadio: RadioType
  handleChangeType(handleType: RadioType): void
}

const Main = ({
  inputValue,
  typeRadio,
  handleChangeType,
  setInputValue
}: MainProps) => {
  return (
    <Styled.Container data-testid="background">
      <Styled.Wrapper>
        <Menu />

        <Styled.Content>
          <Styled.Image src="/img/detail-2.svg" />

          <Styled.Info>
            <Styled.Title>Find your</Styled.Title>
            <Styled.Subtitle>best teacher</Styled.Subtitle>

            <Styled.Paragraph>
              Whether you are a student trying to find your ideal private
              language teachers/tutors or a teacher trying to find great
              students for your customised private lessons!
            </Styled.Paragraph>

            <Input
              value={inputValue}
              setValue={setInputValue}
              placeholder="Type here what are you looking for"
            />

            <Styled.RadioContainer>
              <RadioButton
                text="I'M A TEACHER"
                isActive={typeRadio === 'teacher'}
                onCheck={() => handleChangeType('teacher')}
              />
              <RadioButton
                text="I'M A STUDENT"
                isActive={typeRadio === 'student'}
                onCheck={() => handleChangeType('student')}
              />
            </Styled.RadioContainer>

            <Button fullWidth>Search</Button>
          </Styled.Info>
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Main
