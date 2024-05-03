import React, { useState, useEffect, useCallback } from 'react'
import { ArrowDownWhite } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { IMenuDropdownProps } from './MenuDropdown.interface'
import { List } from './children'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './MenuDropdown.module.scss'

const Component: React.FC<IMenuDropdownProps> = ({
  children,
  className = '',
  listClassName = '',
  onClick,
  opened,
  prefixIcon,
  suffixIcon = { icon: ArrowDownWhite },
  title
}) => {
  const [localOpened, setLocalOpened] = useState<boolean | undefined>(opened)

  const toggleOptions = useCallback(() => {
    if (onClick) {
      onClick(!localOpened)
    }
    setLocalOpened(opened ?? !localOpened)
  }, [localOpened, onClick, opened])

  useEffect(() => {
    setLocalOpened(opened)
  }, [opened])

  const handleButtonClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const prefix = useMediaQuery(prefixIcon && <IconItem size={18} {...prefixIcon} />)

  const suffix = useMediaQuery(<IconItem size={18} {...suffixIcon} />)

  const dropdown = useMediaQuery(
    <List opened={localOpened ?? false} listClassName={listClassName}>
      {children}
    </List>
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

/**
 * Atom UI component of menu dropdown
 */
export const MenuDropdown = Component
