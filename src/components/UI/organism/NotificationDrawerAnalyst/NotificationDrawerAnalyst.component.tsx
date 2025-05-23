import React, { useCallback } from 'react'
import { IconItem, Typography } from '@components/UI/atoms'
import { Drawer } from '@components/UI/molecules'
import { NotificationBlack } from '@constants/icons.constants'
import { INotificationDrawerAnalystProps } from './NotificationDrawerAnalyst.interface'
import styles from './NotificationDrawerAnalyst.module.scss'
import { NotificationDrawerTabs } from './children'

const Component: React.FC<INotificationDrawerAnalystProps> = ({ isDrawerOpen = false, onClose }) => {
  const handlerClose = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  return (
    <Drawer isOpen={isDrawerOpen} onClose={handlerClose} direction="right" drawerWidth="608px" customPadding={8}>
      <header className={`${styles['magneto-ui-notification-drawer-analyst__header']}`}>
        <IconItem alt={'notification icon'} icon={NotificationBlack} color="#292F37" />
        <Typography.Title weight={'bold'} color="black" size={'lg'}>
          {'Notificaciones'}
        </Typography.Title>
      </header>
      <NotificationDrawerTabs
        sections={['Todo', 'Solicitudes', 'Gestión de candidatos', 'Estados de vacante', 'Entrevistas']}
      />
    </Drawer>
  )
}

/**
 * Organism UI component of notification drawer analyst
 */
export const NotificationDrawerAnalyst = Component
