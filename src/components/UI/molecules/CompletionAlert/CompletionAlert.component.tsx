import React, { useState } from 'react'
import { ICompletionAlert } from './CompletionAlert.interface'
import { Typography } from '../../atoms/Typography/Typography.component'
import styles from './CompletionAlert.module.scss'
import { IconAlertBlue } from '@constants/icons.constants'

const Component: React.FC<ICompletionAlert> = ({ text, boldText, link, textLink, onClose, closable = true }) => {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    if (onClose) onClose()
  }

  return (
    <div className={styles.alertContainer} role="status" aria-live="polite">
      <div className={styles.iconWrapper} aria-hidden>
        <img src={IconAlertBlue} alt="" className={styles.iconImage} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <Typography.Text weight="normal" size={'md'} color="grey-800">
            {text}
          </Typography.Text>
          {boldText && (
            <Typography.Text weight="bold" size={'md'} color="grey-800" className={styles.boldText}>
              {boldText}
            </Typography.Text>
          )}
        </div>
        {link && textLink && (
          <Typography.Link
            weight={'black'}
            size={'md'}
            color="blue-dark-300"
            href={link}
            target="_self"
            rel="noopener noreferrer"
          >
            {textLink}
          </Typography.Link>
        )}
      </div>

      {closable && (
        <button type="button" className={styles.closeButton} aria-label="Cerrar alerta" onClick={handleClose}>
          ×
        </button>
      )}
    </div>
  )
}

export const CompletionAlert = Component
