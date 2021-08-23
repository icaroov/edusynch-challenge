import { useState } from 'react'
import { FaStar as StarIcon } from 'react-icons/fa'

import * as Styled from './styles'

export type RatingProps = {
  count: number
  rating: number
  onRating: (index: number) => void
  color: {
    filled: string
    unfilled: string
  }
}

const colors = {
  orange: '#FFC908',
  grey: '#C4C4C4'
}

const Rating = () => {
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined)

  const stars = Array(5).fill(0)

  const handleClick = (value: number) => {
    setCurrentValue(value)
  }

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <Styled.Container>
      {stars.map((_, index) => (
        <StarIcon
          key={index}
          size={24}
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
          color={
            (hoverValue || currentValue) > index ? colors.orange : colors.grey
          }
          style={{
            marginRight: 5,
            cursor: 'pointer'
          }}
        />
      ))}
    </Styled.Container>
  )
}

export default Rating
