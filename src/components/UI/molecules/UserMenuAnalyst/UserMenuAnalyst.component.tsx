import React, { useMemo } from 'react'
import { Avatar, IconItem, Link } from '@components/UI/atoms'
import { IUserMenuAnalystProps } from './UserMenuAnalyst.interface'
import { userMenuAnalystIcons } from './UserMenuAnalyst.constants'
import { UserMenuAnalystOptions } from './children'
import { UserRoundedGray } from '@constants/icons.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalyst.module.scss'

const Component: React.FC<IUserMenuAnalystProps> = ({
  action,
  headerSections,
  handleModal,
  handleMenuOpen,
  isMenuOpen = false,
  footerSections,
  user,
  queryString = {}
}) => {
  const avatar = useMemo(() => user.avatar || UserRoundedGray, [user])

  const actionUrl = useMemo(() => {
    if (action && action.data && !Array.isArray(action.data) && typeof action.data === 'string') {
      const hasParams = action.data.includes('?')
      const delimiter = action.useQueryString !== false && queryString && hasParams ? '&' : ''

      const queryStringParams = Object.entries(queryString)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
        .join('&')

      return action.useQueryString !== false && queryStringParams
        ? `${action.data}${hasParams ? delimiter : '?'}${queryStringParams}`
        : action.data
    }
  }, [action, queryString])

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-analyst'] })}>
      <header className={CNM.get({ styles, cls: ['user-menu-analyst__header'] })}>
        <div className={CNM.get({ styles, cls: ['user-menu-analyst__user'] })}>
          <Avatar userImage={avatar} fallbackImage={UserRoundedGray} />
          <div className={CNM.get({ styles, cls: ['user-menu-analyst__user-info'] })}>
            <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--name'] })}>{user.name}</span>
            <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--mail'] })}>{user.email}</span>
            {action ? (
              <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--action'] })}>
                <IconItem
                  showDefaultFallback={false}
                  size={14}
                  icon={
                    action.icon && userMenuAnalystIcons[action.icon] ? userMenuAnalystIcons[action.icon] : action.icon
                  }
                />
                {typeof action.data === 'string' ? (
                  <Link text={action.title} href={actionUrl} rel={action.rel} target={action.target} />
                ) : (
                  <button onClick={action.data}>{action.title}</button>
                )}
              </span>
            ) : (
              <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--title'] })}>{user.title}</span>
            )}
          </div>
        </div>
        {headerSections && (
          <UserMenuAnalystOptions
            options={headerSections || []}
            queryString={queryString}
            isMenuOpen={isMenuOpen}
            handleModal={handleModal}
            handleMenuOpen={handleMenuOpen}
            className={CNM.get({
              styles,
              cls: ['user-menu-analyst__company', headerSections?.length === 0 && 'user-menu-analyst__company--empty']
            })}
            optionClassNames={{
              link: CNM.get({ styles, cls: ['user-menu-analyst__company-link'] }),
              dropdown: CNM.get({ styles, cls: ['user-menu-analyst__company-dropdown'] })
            }}
          />
        )}
      </header>
      {footerSections && footerSections?.length > 0 && (
        <UserMenuAnalystOptions
          handleModal={handleModal}
          handleMenuOpen={handleMenuOpen}
          options={footerSections || []}
          queryString={queryString}
        />
      )}
    </div>
  )
}

/**
 * Molecule UI component for user menu
 */
export const UserMenuAnalyst = Component
