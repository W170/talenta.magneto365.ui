import React, { CSSProperties, useMemo } from 'react'
import { IconItem } from '../Icon'
import { Loading } from '../Loading'
import { IMainButton } from './MainButton.interface'
import styles from './MainButton.modules.scss'
import { LoadingProps } from '../../../../constants/stories.constants'
import { toCSSVariables } from '../../../../shared/utils/Function'

const Component: React.FC<IMainButton> = ({
  buttonType,
  buttonSize,
  buttonText,
  buttonStyles,
  loadingState,
  iconProps,
  isMobile,
  className,
  onClick
}) => {
  const stylesValue: CSSProperties = useMemo(() => toCSSVariables(buttonStyles), [buttonStyles])

  const buttonClass = `${styles.MainButtonComponent} ${className}`.trim()

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
    <button
      className={buttonClass}
      type={buttonType}
      style={stylesValue}
      onClick={onClick}
      data-button-size={buttonSize}
      data-is-mobile={isMobile}
    >
      {renderContent()}
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = Component
