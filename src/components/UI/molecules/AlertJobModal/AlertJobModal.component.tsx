import React from 'react'
import styles from './AlertJobModal.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertJobModal } from './AlertJobModal.interface'
import { Modal } from '@components/UI/molecules/Modal'
import { AlertJobModalIcon } from './children/AlertJobModalIcon/AlertJobModalIcon.component'
import { AlertJobModalHeader } from './children/AlertJobModalHeader/AlertJobModalHeader.component'
import { AlertJobModalTitle } from './children/AlertJobModalTitle/AlertJobModalTitle.component'
import { AlertJobModalBody } from './children/AlertJobModalBody/AlertJobModalBody.component'
import { AlertJobModalFooter } from './children/AlertJobModalFooter/AlertJobModalFooter.component'
import { AlertJobModalButton } from './children/AlertJobModalButton/AlertJobModalButton.component'

const cx = classNames.bind(styles)

const Component: React.FC<IAlertJobModal> = ({ children, className, open, onClose }) => {
  return (
    <Modal isOpen={open} onClose={onClose} className={cx('alert-modal', className)}>
      {children}
    </Modal>
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
