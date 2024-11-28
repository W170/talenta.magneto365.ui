import React from 'react'
import { useMediaQuery } from '@components/hooks'
import { MobileDrawer } from '../MobileDrawer'
import { Modal } from '../Modal'
import { IModalResponsive } from './ModalResponsive.interface'

const Component: React.FC<IModalResponsive> = ({ children, open, onClose, modalClassName, mobileDrawerClassName }) => {
  const container = useMediaQuery(
    <Modal className={modalClassName} isOpen={open} onClose={onClose}>
      {children}
    </Modal>,
    {
      md: (
        <MobileDrawer className={mobileDrawerClassName} isOpen={open} onClose={onClose}>
          {children}
        </MobileDrawer>
      )
    }
  )

  return container
}

export const ModalResponsive = Component
