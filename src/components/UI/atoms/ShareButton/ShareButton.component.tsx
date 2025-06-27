import React from 'react'
import { IconItem } from '../Icon'
import { Link1, Share2Bold } from '@constants/icons.constants'
import { IShareButton } from './ShareButton.interface'
import styles from './ShareButton.module.scss'

const Component: React.FC<IShareButton> = ({
  className = '',
  buttonTitle,
  buttonText,
  detailUrl,
  addHover,
  onCopySuccess,
  iconType = 'link'
}) => {
  const handleCopyClick = () => {
    if (detailUrl) {
      navigator.clipboard.writeText(detailUrl).then(() => onCopySuccess?.())
    }
  }

  const iconMap = {
    link: Link1,
    share: Share2Bold
  }

  return (
    <button
      className={`${styles['magneto-ui-share-button']} ${addHover && styles['hover-effect']} ${className}`}
      type="button"
      onClick={handleCopyClick}
      title={buttonTitle}
    >
      <div className={styles['button-content']}>
        <IconItem size={20} icon={iconMap[iconType]} hover={addHover} />
        {buttonText && <p className={styles['magneto-ui-share-button__mobile-text']}>{buttonText}</p>}
      </div>
    </button>
  )
}

export const ShareButton = Component
