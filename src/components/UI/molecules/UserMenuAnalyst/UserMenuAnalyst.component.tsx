import React, { useMemo } from 'react'
import { Avatar } from '@components/UI/atoms'
import { IUserMenuAnalystProps } from './UserMenuAnalyst.interface'
import { useMediaQuery } from '@components/hooks'
import { UserRoundedGray } from '@constants/icons.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalyst.module.scss'
import UserMenuAnalystCompany from './children/Company/UserMenuAnalystCompany.component'
import UserMenuAnalystOptions from './children/Options/UserMenuAnalystOptions.component'

const UserMenuAnalyst: React.FC<IUserMenuAnalystProps> = ({ company, options = [], shareButtonProps, user }) => {
  const avatar = useMemo(() => user.avatar.userImage || UserRoundedGray, [user])

  const userAvatar = useMediaQuery(<Avatar userImage={avatar} />)

  const companyMenu = useMediaQuery(<UserMenuAnalystCompany shareButtonProps={shareButtonProps} company={company} />)

  const optionsList = useMediaQuery(<UserMenuAnalystOptions options={options} />)

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-analyst'] })}>
      <header className={CNM.get({ styles, cls: ['user-menu-analyst__header'] })}>
        <div className={CNM.get({ styles, cls: ['user-menu-analyst__user'] })}>
          {userAvatar}
          <div className={CNM.get({ styles, cls: ['user-menu-analyst__user-info'] })}>
            <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--name'] })}>{user.name}</span>
            <span className={CNM.get({ styles, cls: ['user-menu-analyst__user-info--mail'] })}>{user.mail}</span>
          </div>
        </div>
        {company && companyMenu}
      </header>
      {optionsList}
    </div>
  )
}

export default UserMenuAnalyst
