import React from 'react'
import { IconItem } from '../Icon'
import { Share } from '@constants/icons.constants'
import { IShareButton } from './ShareButton.interface'
import styles from './ShareButton.module.scss'

const Component: React.FC<IShareButton> = ({ buttonTitle, buttonText, addHover }) => {
  return (
    <button className={styles['magneto-ui-share-button']} title={buttonTitle} type="button">
      <IconItem hover={addHover} size={20} icon={Share} />
      {buttonText && <p className={styles['magneto-ui-share-button__mobile-text']}>{buttonText}</p>}
    </button>
  )
}

/**
 * UI Atom Component of Save Button
 */
export const ShareButton = Component
