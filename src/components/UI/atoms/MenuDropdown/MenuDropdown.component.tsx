import React, { useState, useEffect } from 'react'
import { ArrowDownWhite } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { IMenuDropdownProps } from './MenuDropdown.interface'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import MenuDropdownList from './children/MenuDropdownList.component'
import styles from './MenuDropdown.module.scss'

const MenuDropdown: React.FC<IMenuDropdownProps> = ({
  children,
  className = '',
  listClassName = '',
  onClick,
  opened = false,
  prefixIcon,
  suffixIcon = { icon: ArrowDownWhite },
  title
}) => {
  const [localOpened, setLocalOpened] = useState<boolean>(opened)

  const toggleOptions = () => {
    if (onClick) {
      onClick(!localOpened)
      return
    }
    setLocalOpened(!localOpened)
  }

  useEffect(() => {
    setLocalOpened(opened)
  }, [opened])

  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const prefix = useMediaQuery(prefixIcon && <IconItem size={18} {...prefixIcon} />)

  const suffix = useMediaQuery(<IconItem size={18} {...suffixIcon} />)

  const dropdown = useMediaQuery(
    <MenuDropdownList opened={localOpened} listClassName={listClassName}>
      {children}
    </MenuDropdownList>
  )

  return (
    <div className={CNM.get({ styles, cls: ['menu-dropdown', className] })} onClick={toggleOptions}>
      <div className={CNM.get({ styles, cls: ['menu-dropdown__container'] })}>
        {prefix}
        <span className={CNM.get({ styles, cls: ['menu-dropdown__title'] })}>{title}</span>
        <div
          className={CNM.get({
            styles,
            cls: ['menu-dropdown__suffix', localOpened && 'menu-dropdown__suffix--visible']
          })}
        >
          {suffix}
        </div>
      </div>
      <div onClick={handleButtonClick}>{dropdown}</div>
    </div>
  )
}

export default MenuDropdown
