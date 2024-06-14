import React from 'react'
import { IconItem } from '@components/UI/atoms'
import {
  IUserMenuAnalystOptionActionProps,
  IUserMenuAnalystOptionActionsProps
} from './UserMenuAnalystOptionActions.interface'
import { Tooltip } from '@components/UI/molecules'
import { userMenuAnalystIcons } from '@components/UI/molecules/UserMenuAnalyst/UserMenuAnalyst.constants'
import { IUserMenuAnalystOption } from '../../UserMenuAnalystOption.interface'

const Component: React.FC<IUserMenuAnalystOptionActionsProps> = ({ actions, getUrl, option }) => {
  return (
    <React.Fragment>
      {actions.map((action, index) => (
        <Tooltip key={`${action.title}-${index}`} title={action.title || ''} position="bottom" width="fit-content">
          <Action action={action} getUrl={getUrl} option={option}>
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

const Action: React.FC<IUserMenuAnalystOptionActionProps> = ({ action, children, getUrl, option }) =>
  typeof action.data === 'function' ? (
    <button onClick={() => action.data && (action.data as (option: IUserMenuAnalystOption) => void)(option)}>
      {children}
    </button>
  ) : (
    <a href={getUrl(action)} rel={action.rel || 'noreferrer'} target={action.target || '_self'}>
      {children}
    </a>
  )

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionActions = React.memo(Component)
