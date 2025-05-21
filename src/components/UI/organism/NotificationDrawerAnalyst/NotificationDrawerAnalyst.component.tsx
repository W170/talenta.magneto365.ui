import React, { useCallback } from 'react'
import { Drawer } from '@components/UI/molecules'
import { INotificationDrawerAnalystProps } from './NotificationDrawerAnalyst.interface'

const Component: React.FC<INotificationDrawerAnalystProps> = ({ isDrawerOpen = false, onClose }) => {
  const handlerClose = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  return (
    <Drawer isOpen={isDrawerOpen} onClose={handlerClose} direction="right">
      NotificationDrawerAnalyst
    </Drawer>
  )
}

/**
 * Organism UI component of notification drawer analyst
 */
export const NotificationDrawerAnalyst = Component
