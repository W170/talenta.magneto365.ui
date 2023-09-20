import React from 'react'
import { IconItem } from '../Icon'
import { Share } from '@constants/icons.constants'
import { IShareButton } from './ShareButton.interface'
import styles from './ShareButton.module.scss'

const Component: React.FC<IShareButton> = ({ buttonTitle, buttonText, detailUrl, addHover, onCopySuccess }) => {
  const handleCopyClick = () => {
    if (detailUrl) {
      navigator.clipboard.writeText(detailUrl).then(() => onCopySuccess())
    }
  }

  return (
    <button className={styles['magneto-ui-share-button']} title={buttonTitle} type="button" onClick={handleCopyClick}>
      <IconItem hover={addHover} size={20} icon={Share} />
      {buttonText && <p className={styles['magneto-ui-share-button__mobile-text']}>{buttonText}</p>}
    </button>
  )
}

/**
 * UI Atom Component of Save Button
 */
export const ShareButton = Component
