import React from 'react'
import { IconItem } from '../Icon'
import { IMainButton } from './MainButton.interface'
import { withStyles } from './MainButton.styles'

const Component: React.FC<IMainButton> = ({
  buttonType = 'submit',
  buttonSize = 'medium',
  onClick,
  iconProps,
  buttonText,
  className
}) => {
  return (
    <button type={buttonType} className={`${className} ${buttonSize}`} onClick={onClick}>
      <IconItem {...iconProps} />
      {buttonText && <p>{buttonText}</p>}
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = withStyles(Component)
