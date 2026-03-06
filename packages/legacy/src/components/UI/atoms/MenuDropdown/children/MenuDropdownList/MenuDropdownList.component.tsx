import React from 'react'
import { IMenuDropdownListProps } from './MenuDropdownList.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './MenuDropdownList.module.scss'

const Component: React.FC<IMenuDropdownListProps> = ({ children, listClassName, opened }) => {
  return (
    <div className={CNM.get({ styles, cls: ['menu-dropdown-list', opened && 'menu-dropdown-list--visible'] })}>
      <div
        className={CNM.get({
          styles,
          cls: ['menu-dropdown-list__container', opened && 'menu-dropdown-list__container--visible']
        })}
      >
        <div
          className={CNM.get({
            styles,
            cls: ['menu-dropdown-list__children', opened && 'menu-dropdown-list__children--visible', listClassName]
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * Atom UI child component of menu dropdown
 */
export const MenuDropdownList = Component
