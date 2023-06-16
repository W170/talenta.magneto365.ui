import React from 'react'
import { IconItem } from '../Icon'
import { Loading } from '../Loading'
import { IMainButton } from './MainButton.interface'
import { withStyles } from './MainButton.styles'
import { LoadingProps } from '../../../../constants/stories.constants'

const Component: React.FC<IMainButton> = ({
  buttonType,
  iconProps,
  buttonSize,
  buttonText,
  isMobile = false,
  loadingState,
  onClick,
  className
}) => {
  const renderContent = () => {
    if (loadingState) {
      return (
        <>
          <Loading {...LoadingProps} />
          {!isMobile && <p>{buttonText}</p>}
        </>
      )
    }

    return (
      <>
        {iconProps && <IconItem {...iconProps} />}
        {!isMobile && <p>{buttonText}</p>}
      </>
    )
  }

  return (
    <button type={buttonType} className={`${className} ${buttonSize}`} onClick={onClick} disabled={loadingState}>
      {renderContent()}
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = withStyles(Component)
