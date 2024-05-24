import React from 'react'
import { IUserMenuAnalystTitleProps } from './UserMenuAnalystTitle.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystTitle.module.scss'

const Component: React.FC<IUserMenuAnalystTitleProps> = ({ subTitle, title }) => {
  const separatorIndex = subTitle?.indexOf(':')
  return (
    <div>
      <span className={CNM.get({ styles, cls: ['user-menu-analyst-title__title'] })}>{title}</span>
      {subTitle && separatorIndex && (
        <div>
          <span
            className={CNM.get({
              styles,
              cls: ['user-menu-analyst-title__subtitle', 'user-menu-analyst-title__subtitle--first']
            })}
          >
            {subTitle.slice(0, separatorIndex + 1).trim() + ' '}
          </span>
          <span
            className={CNM.get({
              styles,
              cls: ['user-menu-analyst-title__subtitle', 'user-menu-analyst-title__subtitle--last']
            })}
          >
            {subTitle.slice(separatorIndex + 1).trim()}
          </span>
        </div>
      )}
    </div>
  )
}

export const UserMenuAnalystTitle = Component
