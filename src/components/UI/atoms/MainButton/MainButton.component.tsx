import React from 'react'
import { IconItem } from '../Icon'
import { IMainButton } from './MainButton.interface'
import { withStyles } from './MainButton.styles'

const Component: React.FC<IMainButton> = ({
  buttonType = 'submit',
  iconProps,
  buttonSize = 'medium',
  buttonText,
  isMobile = false,
  onClick,
  className
}) => {
  return (
    <button type={buttonType} className={`${className} ${buttonSize}`} onClick={onClick}>
      <IconItem {...iconProps} />
      {!isMobile && <p>{buttonText}</p>}
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = withStyles(Component)
