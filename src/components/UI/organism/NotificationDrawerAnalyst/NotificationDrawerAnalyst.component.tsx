import React, { useCallback } from 'react'
import { IconItem, Typography } from '@components/UI/atoms'
import { Drawer } from '@components/UI/molecules'
import { NotificationBlack } from '@constants/icons.constants'
import { INotificationDrawerAnalystProps } from './NotificationDrawerAnalyst.interface'
import styles from './NotificationDrawerAnalyst.module.scss'
import { NotificationDrawerTabs } from './children'
import { AnalystNotificationList } from './children/AnalystNotificationList/AnalystNotificationList.component'

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
      <AnalystNotificationList
        notifications={[
          {
            id: '1',
            type: 'requests',
            event: 'created',
            timestamp: new Date().toISOString(),
            read: false,

            title: 'Tiene una solicitud de vacante por aprobar: ID 066530',
            descriptionLines: [
              ['Desarrollador FullStack', '4 cupos', 'Medellin'],
              ['Solicita: Andrés Felipe Sánchez', 'asanchez@sura.com.co']
            ],
            actionTitle: 'Ver solicitud ',
            action: () => console.log('View Request clicked')
          },
          {
            id: '2',
            type: 'candidateManagement',
            event: 'matchFound',
            timestamp: new Date().toISOString(),
            read: false,

            title:
              'Tiene 20 candidatos con un 85 % de afinidad para la vacante Analista financiero. Ingrese y gestione la vacante.',
            descriptionLines: [['Pereira', 'Término indefinido', 'Creada: 2023-08-04', ' Expira : 2023-09-28']],
            actionTitle: 'Ver vacante',
            action: () => console.log('View Candidate clicked')
          },
          {
            id: '3',
            type: 'requests',
            event: 'assigned',
            timestamp: new Date().toISOString(),
            read: false,

            title: 'Le ha sido asignada la vacante: ID 1234',
            descriptionLines: [
              ['Desarrollador FullStack', '4 cupos', 'Medellin'],
              ['Solicita: Andrés Felipe Sánchez', 'asanchez@sura.com.co']
            ],
            actionTitle: 'Ir a vacante',
            action: () => console.log('View Request clicked')
          },
          {
            id: '4',
            type: 'requests',
            event: 'named',
            timestamp: new Date().toISOString(),
            read: false,

            title: 'La solicitud de vacante ID:066530 fue hecha a su nombre',
            descriptionLines: [
              ['Desarrollador FullStack', '4 cupos', 'Medellin'],
              ['Solicita: Andrés Felipe Sánchez', 'asanchez@sura.com.co']
            ],
            actionTitle: 'Ver solicitud',
            action: () => console.log('View Request clicked')
          },
          {
            id: '5',
            type: 'requests',
            event: 'rejected',
            timestamp: new Date().toISOString(),
            read: false,

            title:
              'La solicitud de vacante - ID: 066530 fue rechazada con devolución. Puede editarla y reenviarla para su aprobación.',
            descriptionLines: [
              ['Desarrollador FullStack', '4 cupos', 'Medellin'],
              ['Solicita: Andrés Felipe Sánchez', 'asanchez@sura.com.co']
            ],
            actionTitle: 'Ver solicitud',
            action: () => console.log('View Request clicked')
          }
        ]}
      />
    </Drawer>
  )
}

/**
 * Organism UI component of notification drawer analyst
 */
export const NotificationDrawerAnalyst = Component
