import React from 'react'
import { IUserMenuWrapperAnalystDropdownProps } from '.'
import { Popover, UserMenuButtonAnalyst } from '@components/UI/atoms'
import { UserMenuAnalyst } from '@components/UI/molecules'
import { withClickOut } from '@components/hoc'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuWrapperAnalystDropdown.module.scss'

const Component: React.FC<IUserMenuWrapperAnalystDropdownProps> = ({
  user,
  clickOut = false,
  setClickOut = () => ({}),
  companyName,
  footerSections,
  headerSections
}) => {
  return (
    <div className={CNM.get({ styles, cls: ['user-menu-wrapper-analyst-dropdown'] })}>
      <Popover
        widthBase={'auto' as unknown as number}
        show={clickOut}
        content={<UserMenuAnalyst user={user} headerSections={headerSections} footerSections={footerSections} />}
        positionX="left"
        positionY="bottom"
      >
        <UserMenuButtonAnalyst user={user.name} company={companyName} onClick={() => setClickOut(!clickOut)} />
      </Popover>
    </div>
  )
}

/**
 * Molecule UI child component of user menu analyst wrapper
 */
export const UserMenuWrapperAnalystDropdown = withClickOut(Component)
