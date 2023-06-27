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
  buttonStyles,
  loadingState,
  isMobile,
  iconProps,
  onClick
}) => {
  const stylesValue: CSSProperties = useMemo(() => toCSSVariables(buttonStyles), [buttonStyles])

  const renderContent = () => {
    if (loadingState) {
      return (
        <>
          <Loading {...LoadingProps} />
          {!isMobile && <p>{}</p>}
        </>
      )
    }

    return (
      <>
        {iconProps && <IconItem {...iconProps} />}
        {!isMobile && <p>{buttonStyles?.buttonText}</p>}
      </>
    )
  }

  return (
    <button
      className={styles.MainButtonComponent}
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
