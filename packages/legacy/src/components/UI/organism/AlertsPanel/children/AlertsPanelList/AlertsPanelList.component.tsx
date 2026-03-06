import React from 'react'
import styles from '../../AlertsPanel.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertsPanel } from '../../AlertsPanel.interface'

const cx = classNames.bind(styles)

export const AlertsPanelList: React.FC<IAlertsPanel.List> = ({ children, className }) => {
  return <ul className={cx('alerts-panel__list', className)}>{children}</ul>
}
