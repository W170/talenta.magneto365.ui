import React from 'react'
import { IconItem } from '../Icon'
import { IMainButton } from './MainButton.interface'
import { withStyles } from './MainButton.styles'

const Component: React.FC<IMainButton> = ({ className, btnSize, childrenProps, buttonText }) => {
  return (
    <button type={'submit'} className={`${className} ${btnSize}`}>
      <IconItem {...childrenProps} />
      <p>{buttonText}</p>
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = withStyles(Component)
