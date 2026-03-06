import React, { useCallback } from 'react'
import { IconItem } from '@components/UI/atoms'
import {
  IUserMenuAnalystOptionActionProps,
  IUserMenuAnalystOptionActionsProps
} from './UserMenuAnalystOptionActions.interface'
import { Tooltip } from '@components/UI/molecules'
import { userMenuAnalystIcons } from '@components/UI/molecules/UserMenuAnalyst/UserMenuAnalyst.constants'
import { IUserMenuAnalystOption } from '../../UserMenuAnalystOption.interface'

const Component: React.FC<IUserMenuAnalystOptionActionsProps> = ({
  actions,
  handleModal,
  handleMenuOpen,
  getUrl,
  option
}) => {
  return (
    <React.Fragment>
      {actions.map((action, index) => (
        <Tooltip key={`${action.title}-${index}`} title={action.title || ''} position="bottom" width="fit-content">
          <Action
            action={action}
            getUrl={getUrl}
            option={option}
            handleModal={handleModal}
            handleMenuOpen={handleMenuOpen}
          >
            <IconItem
              showDefaultFallback={false}
              size={16}
              icon={action.icon && userMenuAnalystIcons[action.icon] ? userMenuAnalystIcons[action.icon] : action.icon}
            />
          </Action>
        </Tooltip>
      ))}
    </React.Fragment>
  )
}

const Action: React.FC<IUserMenuAnalystOptionActionProps> = ({
  action,
  children,
  handleModal,
  handleMenuOpen,
  getUrl,
  option
}) => {
  const handleOnClick = useCallback(() => {
    if (action.modal && handleModal && handleMenuOpen) {
      handleMenuOpen(false)
      return handleModal(action.modal.name, true, action.modal.data)
    }
    return action.data && (action.data as (option: IUserMenuAnalystOption) => void)(option)
  }, [action, handleModal, handleMenuOpen, option])

  return typeof action.data === 'function' || action.modal ? (
    <button onClick={handleOnClick}>{children}</button>
  ) : (
    <a href={getUrl(action)} rel={action.rel || 'noreferrer'} target={action.target || '_self'}>
      {children}
    </a>
  )
}

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionActions = React.memo(Component)
