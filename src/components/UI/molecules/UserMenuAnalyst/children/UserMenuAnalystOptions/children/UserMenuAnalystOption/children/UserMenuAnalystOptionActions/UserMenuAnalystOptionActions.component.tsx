import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { IUserMenuAnalystOptionActionsProps } from './UserMenuAnalystOptionActions.interface'
import { Tooltip } from '@components/UI/molecules'
import { userMenuAnalystIcons } from '@components/UI/molecules/UserMenuAnalyst/UserMenuAnalyst.constants'

const Component: React.FC<IUserMenuAnalystOptionActionsProps> = ({ actions, getUrl }) => {
  return (
    <React.Fragment>
      {actions.map((action, index) => (
        <Tooltip key={`${action.title}-${index}`} title={action.title || ''} position="bottom">
          <a href={getUrl(action)} rel={action.rel || 'noreferrer'} target={action.target || '_self'}>
            <IconItem
              showDefaultFallback={false}
              size={16}
              icon={action.icon && userMenuAnalystIcons[action.icon] ? userMenuAnalystIcons[action.icon] : action.icon}
            />
          </a>
        </Tooltip>
      ))}
    </React.Fragment>
  )
}

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionActions = React.memo(Component)
