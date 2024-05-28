import React from 'react'
import { IUserMenuWrapperAnalystDropdownProps } from '.'
import { Popover, UserMenuButtonAnalyst } from '@components/UI/atoms'
import { UserMenuAnalyst } from '@components/UI/molecules'
import { withClickOut } from '@components/hoc'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuWrapperAnalystDropdown.module.scss'

const Component: React.FC<IUserMenuWrapperAnalystDropdownProps> = ({
  action,
  user,
  clickOut = false,
  setClickOut = () => ({}),
  footerSections,
  headerSections
}) => {
  return (
    <div className={CNM.get({ styles, cls: ['user-menu-wrapper-analyst-dropdown'] })}>
      <Popover
        widthBase={'auto' as unknown as number}
        show={clickOut}
        content={
          <UserMenuAnalyst
            isMenuOpen={clickOut}
            user={user}
            action={action}
            headerSections={headerSections}
            footerSections={footerSections}
          />
        }
        positionX="left"
        positionY="bottom"
      >
        <UserMenuButtonAnalyst user={user.name} title={user.title} onClick={() => setClickOut(!clickOut)} />
      </Popover>
    </div>
  )
}

/**
 * Molecule UI child component of user menu analyst wrapper
 */
export const UserMenuWrapperAnalystDropdown = withClickOut(Component)
