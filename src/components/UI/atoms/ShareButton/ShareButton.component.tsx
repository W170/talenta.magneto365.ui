import React from 'react'
import { IconItem } from '../Icon'
import { IShareButton } from './ShareButton.interface'
import styles from './ShareButton.module.scss'

const Component: React.FC<IShareButton> = ({
  className = '',
  buttonTitle,
  buttonText,
  detailUrl,
  addHover,
  onCopySuccess,
  icon
}) => {
  const handleCopyClick = () => {
    if (detailUrl) {
      navigator.clipboard.writeText(detailUrl).then(() => onCopySuccess?.())
    }
  }

  return (
    <button
      className={`${styles['magneto-ui-share-button']} ${addHover && styles['hover-effect']} ${className}`}
      type="button"
      onClick={handleCopyClick}
      title={buttonTitle}
    >
      <div className={styles['button-content']}>
        <IconItem size={20} icon={icon} hover={addHover} />
        {buttonText && <p className={styles['magneto-ui-share-button__mobile-text']}>{buttonText}</p>}
      </div>
    </button>
  )
}

export const ShareButton = Component
