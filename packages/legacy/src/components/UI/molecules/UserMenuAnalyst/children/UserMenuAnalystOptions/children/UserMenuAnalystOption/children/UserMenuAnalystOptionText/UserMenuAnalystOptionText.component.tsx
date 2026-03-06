import React from 'react'
import { IUserMenuAnalystOptionTextProps } from './UserMenuAnalystOptionText.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOptionText.module.scss'

const Component: React.FC<IUserMenuAnalystOptionTextProps> = ({ option, className }) => (
  <span
    className={CNM.get({
      styles,
      cls: [className, 'user-menu-analyst-option-text']
    })}
  >
    <p>{option.title}</p>
  </span>
)

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionText = React.memo(Component)
