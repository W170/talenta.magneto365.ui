import React from 'react'
import { StyledTabButton } from './TapButton.styles'
import { ITabButton } from './TabButton.interface'
import { Link } from '../../atoms/Link'

const Component: React.FC<ITabButton> = ({ buttonText, textSize, buttonLink }) => {
  return (
    <StyledTabButton fontSize={textSize}>
      <Link href={buttonLink} label={buttonText} type="link" color="#14141C" />
    </StyledTabButton>
  )
}

export const TabButton = Component
