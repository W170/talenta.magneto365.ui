import React from 'react'
import styles from './AlertJobModal.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertJobModal } from './AlertJobModal.interface'
import { AlertJobModalIcon } from './children/AlertJobModalIcon/AlertJobModalIcon.component'
import { AlertJobModalHeader } from './children/AlertJobModalHeader/AlertJobModalHeader.component'
import { AlertJobModalTitle } from './children/AlertJobModalTitle/AlertJobModalTitle.component'
import { AlertJobModalBody } from './children/AlertJobModalBody/AlertJobModalBody.component'
import { AlertJobModalFooter } from './children/AlertJobModalFooter/AlertJobModalFooter.component'
import { AlertJobModalButton } from './children/AlertJobModalButton/AlertJobModalButton.component'
import { ModalResponsive } from '../ModalResponsive'

const cx = classNames.bind(styles)

const Component: React.FC<IAlertJobModal> = ({ children, className, mobileClassName, open, onClose }) => {
  return (
    <ModalResponsive
      open={open}
      onClose={onClose}
      modalClassName={cx('alert-modal', className)}
      mobileDrawerClassName={cx('alert-modal__mobile', mobileClassName)}
    >
      {children}
    </ModalResponsive>
  )
}

export const AlertJobModal = Object.assign(Component, {
  Header: AlertJobModalHeader,
  Body: AlertJobModalBody,
  Footer: AlertJobModalFooter,
  Title: AlertJobModalTitle,
  Icon: AlertJobModalIcon,
  Button: AlertJobModalButton
})
