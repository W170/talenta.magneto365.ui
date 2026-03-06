import React from 'react'
import { Default } from '../UserMenuAnalystOptionDefault'
import { IUserMenuAnalystOptionHoverProps } from './UserMenuAnalystOptionHover.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOptionHover.module.scss'

const Component: React.FC<IUserMenuAnalystOptionHoverProps> = ({
  className,
  handleModal,
  handleMenuOpen,
  option,
  prefix,
  suffix,
  url
}) => {
  return (
    <span
      className={CNM.get({
        styles,
        cls: [className, 'user-menu-analyst-option-hover']
      })}
    >
      {prefix}
      <Default
        className={CNM.get({ styles, cls: ['user-menu-analyst-option-hover__default'] })}
        handleMenuOpen={handleMenuOpen}
        handleModal={handleModal}
        option={option}
        url={url}
      />
      {suffix}
    </span>
  )
}

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionHover = React.memo(Component)
