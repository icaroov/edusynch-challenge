import Rating from 'components/Rating'

import * as Styled from './styles'

export type CardProps = {
  description: string
  numberLessons: number
  image: string
}

const Card = ({ description, image, numberLessons }: CardProps) => (
  <Styled.Container>
    <Styled.ImageBox>
      <img src={image} alt={description} />
    </Styled.ImageBox>

    <Styled.Content>
      <Styled.Info>
        <Styled.Stars>
          <Rating />
        </Styled.Stars>
        <Styled.ButtonCard>{numberLessons} lessons</Styled.ButtonCard>
      </Styled.Info>

      <Styled.Description>
        <p>{description}</p>
      </Styled.Description>
    </Styled.Content>
  </Styled.Container>
)

export default Card
