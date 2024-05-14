import React, { useMemo } from 'react'
import { Avatar } from '@components/UI/atoms'
import { IUserMenuAnalystProps } from './UserMenuAnalyst.interface'
import { UserMenuAnalystOptions } from './children'
import { UserRoundedGray } from '@constants/icons.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalyst.module.scss'

const Component: React.FC<IUserMenuAnalystProps> = ({
  headerSections,
  isMenuOpen = false,
  footerSections,
  user,
  queryString
}) => {
  const avatar = useMemo(() => user.avatar || UserRoundedGray, [user])

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-analyst'] })}>
      <header className={CNM.get({ styles, cls: ['user-menu-analyst__header'] })}>
        <div className={CNM.get({ styles, cls: ['user-menu-analyst__user'] })}>
          <Avatar userImage={avatar} fallbackImage={UserRoundedGray} />
          <div className={CNM.get({ styles, cls: ['user-menu-analyst__user-info'] })}>
            <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--name'] })}>{user.name}</span>
            <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--mail'] })}>{user.email}</span>
          </div>
        </div>
        {headerSections && (
          <UserMenuAnalystOptions
            options={headerSections || []}
            queryString={queryString}
            isMenuOpen={isMenuOpen}
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
      {footerSections && <UserMenuAnalystOptions options={footerSections || []} queryString={queryString} />}
    </div>
  )
}

/**
 * Molecule UI component for user menu
 */
export const UserMenuAnalyst = Component
