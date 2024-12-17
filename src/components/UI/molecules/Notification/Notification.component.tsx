import React, { useEffect } from 'react'
import { ModalPortal } from '../Modal/ModalPortal.component'
import Styles from './Notification.module.scss'
import { Close } from '@constants/icons.constants'
import { INotification } from './Notification.interface'

const Notification: React.FC<INotification> = ({
  onClose,
  title,
  description,
  position = 'top-right',
  containerClassName = '',
  contentClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  childrenClassName = '',
  autoCloseDuration = 5000,
  children
}) => {
  useEffect(() => {
    if (autoCloseDuration > 0) {
      const timer = setTimeout(onClose, autoCloseDuration)
      return () => clearTimeout(timer)
    }
  }, [autoCloseDuration, onClose])

  return (
    <ModalPortal>
      <div className={`${Styles.notification} ${Styles[position]} ${containerClassName}`} role="alert">
        <div className={`${Styles['notification__content']} ${contentClassName}`}>
          <div className={Styles['notification__text']}>
            {title && <h2 className={`${Styles['notification__title']} ${titleClassName}`}>{title}</h2>}
            {description && (
              <p className={`${Styles['notification__description']} ${descriptionClassName}`}>{description}</p>
            )}
          </div>
          <button className={Styles['notification__close-btn']} onClick={onClose} type="button">
            <img src={Close} alt="close icon" />
          </button>
        </div>
        {children && <div className={childrenClassName}>{children}</div>}
      </div>
    </ModalPortal>
  )
}

export default Notification
