import React, { useCallback } from 'react'
import { getOptionTypeStyles } from '../../UserMenuAnalystOption.constants'
import { IUserMenuAnalystOption } from '../../UserMenuAnalystOption.interface'
import { IUserMenuAnalystOptionDefault } from './UserMenuAnalystOptionDefault.interface'
import { MenuIcon } from '@components/UI/molecules'
import { userMenuAnalystIcons } from '@components/UI/molecules/UserMenuAnalyst/UserMenuAnalyst.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOptionDefault.module.scss'

const Component: React.FC<IUserMenuAnalystOptionDefault> = ({
  className,
  handleModal,
  handleMenuOpen,
  option,
  prefix,
  suffix,
  url
}) => {
  const { rel = 'noreferrer', target = '_self' } = option

  const handleOnClick = useCallback(() => {
    if (option.modal && handleModal && handleMenuOpen) {
      handleMenuOpen(false)
      return handleModal(option.modal.name, true, option.modal.data)
    }

    if (typeof option.data === 'function') {
      return (option.data as (option: IUserMenuAnalystOption) => void)(option)
    }
  }, [handleModal, handleMenuOpen, option])

  return (
    <span
      className={CNM.get({
        styles,
        cls: [getOptionTypeStyles(option.type), 'user-menu-analyst-option-default', className]
      })}
    >
      {prefix}
      <MenuIcon
        className={CNM.get({
          styles,
          cls: ['user-menu-analyst-option-default__container']
        })}
        text={option.title || ''}
        icon={option.icon && userMenuAnalystIcons[option.icon] ? userMenuAnalystIcons[option.icon] : option.icon}
        iconProps={{ showDefaultFallback: false }}
        iconSize={18}
        url={url}
        type={typeof option.data === 'function' || option.modal ? 'button' : 'link'}
        onClick={handleOnClick}
        target={target}
        rel={rel}
      />
      {suffix}
    </span>
  )
}

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionDefault = React.memo(Component)
