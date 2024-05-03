import React from 'react'
import { Divider } from '@components/UI/atoms'
import { INavMenuAnalystDividerProps } from './NavMenuAnalystDivider.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalystDivider.module.scss'

const Component: React.FC<INavMenuAnalystDividerProps> = ({ isFullWidth, showMobile = true, title }) => {
  if (!title) return null

  return (
    <div className={CNM.get({ styles, cls: ['nav-menu-analyst-divider'] })}>
      {isFullWidth ? (
        <h3 className={CNM.get({ styles, cls: ['nav-menu-analyst-divider__title'] })}>{title}</h3>
      ) : (
        showMobile && <Divider />
      )}
    </div>
  )
}

/**
 * Organism UI child component of nav menu analyst
 */
export const NavMenuAnalystDivider = Component
