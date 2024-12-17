import React, { useEffect } from 'react'
import { ModalPortal } from '../Modal/ModalPortal.component'
import styles from './Notification.module.scss'
import { Close } from '@constants/icons.constants'
import { INotification } from './Notification.interface'

const Notification: React.FC<INotification> = ({
  onClose,
  message,
  position = 'top-right',
  className,
  autoCloseDuration = 5000,
  extraContent
}) => {
  useEffect(() => {
    if (autoCloseDuration > 0) {
      const timer = setTimeout(onClose, autoCloseDuration)
      return () => clearTimeout(timer)
    }
  }, [autoCloseDuration, onClose])

  return (
    <ModalPortal>
      <div className={`${styles.notification} ${styles[position]} ${className}`} role="alert">
        <div className={styles['notification__content']}>
          <div className={styles['notification__message']}>{message}</div>
          <button
            className={styles['notification__close-btn']}
            onClick={onClose}
            type="button"
            aria-label="Close notification"
          >
            <img src={Close} alt="close icon" />
          </button>
        </div>
        {extraContent && extraContent}
      </div>
    </ModalPortal>
  )
}

export default Notification
