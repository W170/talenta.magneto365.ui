import React from 'react'
import { IUserMenuAnalystTitleProps } from './UserMenuAnalystTitle.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystTitle.module.scss'

const Component: React.FC<IUserMenuAnalystTitleProps> = ({ title }: { title: string }) => {
  const separatorIndex = title.indexOf(':')
  return (
    <React.Fragment>
      <span className={CNM.get({ styles, cls: ['user-menu-analyst-title', 'user-menu-analyst-title--title'] })}>
        {title.slice(0, separatorIndex + 1).trim() + ' '}
      </span>
      <span className={CNM.get({ styles, cls: ['user-menu-analyst-title', 'user-menu-analyst-title--main'] })}>
        {title.slice(separatorIndex + 1).trim()}
      </span>
    </React.Fragment>
  )
}

export const UserMenuAnalystTitle = Component
