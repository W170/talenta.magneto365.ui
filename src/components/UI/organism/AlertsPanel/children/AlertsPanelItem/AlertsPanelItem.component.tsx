import React from 'react'
import styles from '../../AlertsPanel.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'
import { Trash } from '@constants/icons.constants'
import { IAlertsPanel } from '../../AlertsPanel.interface'

const cx = classNames.bind(styles)

export const AlertsPanelItem: React.FC<IAlertsPanel.Item> = ({ text, onDelete, className }) => {
  return (
    <li className={cx('alerts-panel__item', className)}>
      <span className={cx('alerts-panel__item-text', className)}>{text}</span>
      {onDelete && (
        <button onClick={onDelete} className={cx('alerts-panel__item-button', className)}>
          <IconItem icon={Trash} />
        </button>
      )}
    </li>
  )
}
