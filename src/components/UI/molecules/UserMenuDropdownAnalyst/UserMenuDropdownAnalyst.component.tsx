import React from 'react'
import { IUserMenuDropdownAnalystProps } from './UserMenuDropdownAnalyst.interface'
import { Popover, UserMenuButtonAnalyst } from '@components/UI/atoms'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuDropdownAnalyst.module.scss'
import UserMenuAnalyst from '@components/UI/molecules/UserMenuAnalyst/UserMenuAnalyst.component'
import withClickOut from '@components/hoc/withClickOut'

const Component: React.FC<IUserMenuDropdownAnalystProps> = ({
  clickOut = false,
  company,
  options,
  setClickOut = () => ({}),
  shareButtonProps,
  user
}) => {
  const userMenu = useMediaQuery(
    <UserMenuAnalyst user={user} company={company} options={options} shareButtonProps={shareButtonProps} />
  )

  const userButton = useMediaQuery(
    <UserMenuButtonAnalyst user={user.name} company={company.name} onClick={() => setClickOut(!clickOut)} />
  )

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-dropdown-analyst'] })}>
      <Popover
        widthBase={'auto' as unknown as number}
        show={clickOut}
        content={userMenu}
        positionX="left"
        positionY="bottom"
      >
        {userButton}
      </Popover>
    </div>
  )
}

export const UserMenuDropdownAnalyst = withClickOut(Component)
