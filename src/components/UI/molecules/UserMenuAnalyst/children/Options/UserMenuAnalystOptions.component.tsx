import React, { useMemo } from 'react'
import { Divider } from '@components/UI/atoms'
import { IUserMenuAnalystOptionsProps } from './UserMenuAnalystOptions.interface'
import { MenuIcon } from '@components/UI/molecules'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOptions.module.scss'

const UserMenuAnalystOptions: React.FC<IUserMenuAnalystOptionsProps> = ({ options }) => {
  const isLastSection = useMemo(() => options?.length === 1, [options])

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-analyst-options'] })}>
      {options?.map((option, i) => (
        <React.Fragment key={`user-menu-analyst-option-${i}`}>
          {option?.section?.map((item, j) => (
            <MenuIcon key={j} {...item} />
          ))}
          {!isLastSection && i < options.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default UserMenuAnalystOptions
