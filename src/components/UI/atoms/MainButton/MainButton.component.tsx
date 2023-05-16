import React from 'react'
import { IconItem } from '../Icon'
import { IMainButton } from './MainButton.interface'
import { withStyles } from './MainButton.styles'
import { useMediaQuery } from '../../../hooks'
import { withContextAppProvider } from '../../../context/context.component'

const Component: React.FC<IMainButton> = ({
  buttonType = 'submit',
  buttonSize = 'medium',
  onClick,
  iconProps,
  buttonText,
  className
}) => {
  const responsiveButtonText = useMediaQuery(buttonText, {
    xs: null,
    sm: null,
    md: null
  })
  return (
    <button type={buttonType} className={`${className} ${buttonSize}`} onClick={onClick}>
      <IconItem {...iconProps} />
      {responsiveButtonText && <p>{responsiveButtonText}</p>}
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = withContextAppProvider(withStyles(Component))
