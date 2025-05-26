import React, { useCallback } from 'react'
import { Button, IconItem, Typography } from '@components/UI/atoms'
import { Drawer } from '@components/UI/molecules'
import { NotificationBlack } from '@constants/icons.constants'
import { INotificationDrawerAnalystProps } from './NotificationDrawerAnalyst.interface'
import styles from './NotificationDrawerAnalyst.module.scss'
import { NotificationDrawerTabs } from './children'
import { AnalystNotificationList } from './children/AnalystNotificationList/AnalystNotificationList.component'

const Component: React.FC<INotificationDrawerAnalystProps> = ({ isDrawerOpen = false, onClose, drawerConfig }) => {
  const { headerConfig, sectionConfig, footerConfig } = drawerConfig
  const handlerClose = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  return (
    <Drawer isOpen={isDrawerOpen} onClose={handlerClose} direction="right" drawerWidth="632px" customPadding={0}>
      <div className={`${styles['magneto-ui-notification-drawer-analyst']}`}>
        <header className={`${styles['magneto-ui-notification-drawer-analyst__header']}`}>
          <IconItem alt={'notification icon'} icon={NotificationBlack} color="#292F37" />
          <Typography.Title weight={'bold'} color="black" size={'lg'}>
            {headerConfig.title}
          </Typography.Title>
        </header>
        <NotificationDrawerTabs sections={sectionConfig} tooltipText={headerConfig.tabTooltipText} />
        <AnalystNotificationList />
        <footer className={`${styles['magneto-ui-notification-drawer-analyst__footer']}`}>
          <Button buttonText={footerConfig.actionText} onClick={() => console.log('Clicked')} />
        </footer>
      </div>
    </Drawer>
  )
}

/**
 * Organism UI component of notification drawer analyst
 */
export const NotificationDrawerAnalyst = Component
