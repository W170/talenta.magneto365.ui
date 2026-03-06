import React from 'react'
import styles from './AlertsPanel.module.scss'
import { classNames } from '@shared/utils/common'
import { AlertsPanelList } from './children/AlertsPanelList/AlertsPanelList.component'
import { AlertsPanelItem } from './children/AlertsPanelItem/AlertsPanelItem.component'
import { IAlertsPanel } from './AlertsPanel.interface'

const cx = classNames.bind(styles)

const Component: React.FC<IAlertsPanel> = ({ title, children, className }) => {
  return (
    <div className={cx('alerts-panel', className)}>
      <h2 className={cx('alerts-panel__title', className)}>{title}</h2>
      {children}
    </div>
  )
}

export const AlertsPanel = Object.assign(Component, {
  List: AlertsPanelList,
  Item: AlertsPanelItem
})
