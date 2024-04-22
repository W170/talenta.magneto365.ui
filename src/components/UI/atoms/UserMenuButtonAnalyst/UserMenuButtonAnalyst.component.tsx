import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { IUserMenuButtonAnalystProps } from './UserMenuButtonAnalyst.interface'
import { useMediaQuery } from '@components/hooks'
import { UserRoundedBlue, ArrowDownBlue } from '@constants/icons.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuButtonAnalyst.module.scss'

const UserMenuButtonAnalyst: React.FC<IUserMenuButtonAnalystProps> = ({ className, company, onClick, user }) => {
  const userInfo = useMediaQuery(<span>{`${user} | ${company}`}</span>, {
    sm: null
  })

  return (
    <button className={CNM.get({ styles, cls: ['user-menu-button-analyst', className] })} onClick={onClick}>
      <IconItem icon={UserRoundedBlue} size={20} />
      {userInfo}
      <IconItem icon={ArrowDownBlue} size={16} />
    </button>
  )
}

export default UserMenuButtonAnalyst
