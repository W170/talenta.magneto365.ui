import React, { useCallback, useState, useEffect, useRef } from 'react'
import { INavMenuAnalysIcons, INavMenuAnalystOption } from '../../NavMenuAnalyst.interface'
import { INavMenuAnalystOptionProps } from './NavMenuAnalystOption.interface'
import { MenuDropdown } from '@components/UI/atoms'
import { MenuIcon } from '@components/UI/molecules'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalystOption.module.scss'

const Option: React.FC<INavMenuAnalystOptionProps> = ({
  isDrawerOpen,
  isFullWidth,
  isOpenedFromHeader,
  isParentOpen = true,
  isScrollAnimated,
  onClick,
  openedDropdown = false,
  option,
  path
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(openedDropdown)
  const [scrolledToOption, setScrolledToOption] = useState<boolean>(false)
  const optionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (optionRef.current && isOpenDropdown && isScrollAnimated) {
      setTimeout(() => {
        optionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [isOpenDropdown, isScrollAnimated, openedDropdown])

  useEffect(() => {
    setIsOpenDropdown(openedDropdown)
  }, [openedDropdown, isDrawerOpen, isParentOpen, isOpenedFromHeader])

  useEffect(() => {
    if (isDrawerOpen) {
      setScrolledToOption(false)
    }
  }, [isDrawerOpen])

  const isActive = useCallback(
    (option: INavMenuAnalystOption): boolean => {
      const pathName = path || window.location.pathname

      if (option.data && typeof option.data === 'string') {
        return pathName === option.data
      }
      if (option.data && Array.isArray(option.data)) {
        return option.data.some((c) => c.subChildren?.some((subC) => isActive(subC)))
      }
      return false
    },
    [path]
  )

  const childrenActive = useCallback(
    (option: INavMenuAnalystOption): boolean => {
      if (option.data && Array.isArray(option.data)) {
        return option.data.some((c) => c.subChildren?.some((subC) => isActive(subC)))
      }
      return false
    },
    [isActive]
  )

  const handleDropdownClick = useCallback(() => {
    if (isFullWidth && !scrolledToOption) {
      setScrolledToOption(true)
    }
    if (onClick) {
      onClick(option)
    }

    setIsOpenDropdown(!isOpenDropdown)
  }, [isOpenDropdown, onClick, option, isFullWidth, scrolledToOption])

  const icons = useCallback((active: boolean, icons: INavMenuAnalysIcons | undefined): string | undefined => {
    if (active) {
      return icons?.active
    }
    return icons?.normal
  }, [])

  const linkStyles = CNM.get({
    styles,
    cls: [
      'nav-menu-analyst-option__link',
      isFullWidth && 'nav-menu-analyst-option__link--full-menu',
      isActive(option) && 'nav-menu-analyst-option__link--active'
    ]
  })

  const dropdownStyles = CNM.get({
    styles,
    cls: [
      'nav-menu-analyst-option__dropdown',
      isFullWidth && 'nav-menu-analyst-option__dropdown--full-menu',
      ((childrenActive(option) && !isFullWidth) || (!isOpenDropdown && childrenActive(option))) &&
        'nav-menu-analyst-option__dropdown--active',
      (!isOpenDropdown || !isFullWidth) && !childrenActive(option) && 'nav-menu-analyst-option__dropdown--hover'
    ]
  })

  if (!Array.isArray(option.data)) {
    return (
      <MenuIcon
        text={option.title || ''}
        icon={icons(isActive(option), option.icons)}
        url={option.data}
        className={linkStyles}
        type={onClick ? 'button' : 'link'}
        onClick={onClick ? () => onClick(option) : undefined}
      />
    )
  }

  return (
    <div ref={optionRef}>
      <MenuDropdown
        className={dropdownStyles}
        listClassName={CNM.get({
          styles,
          cls: ['nav-menu-analyst-option__dropdown-list']
        })}
        opened={
          !isParentOpen ? false : (isActive(option) && isFullWidth && isOpenDropdown) || (isOpenDropdown && isFullWidth)
        }
        onClick={handleDropdownClick}
        title={option.title || ''}
        prefixIcon={{
          icon: icons(
            (childrenActive(option) && !isFullWidth) || (!isOpenDropdown && childrenActive(option)),
            option.icons
          ),
          size: 18
        }}
      >
        {option.data.map((item, i) => (
          <React.Fragment key={`option-${item.title}-${i}`}>
            {item.title && (
              <span className={CNM.get({ styles, cls: ['nav-menu-analyst-option__dropdown-title'] })}>
                {item.title}
              </span>
            )}
            {item.subChildren.map((subItem, j) => (
              <Option
                key={`option-${subItem.title}-${j}`}
                option={subItem}
                isFullWidth={isFullWidth}
                isOpenedFromHeader={isOpenedFromHeader}
                path={path}
                openedDropdown={
                  !scrolledToOption ? childrenActive(subItem) && !isOpenedFromHeader && isOpenDropdown : false
                }
                isDrawerOpen={isDrawerOpen}
                isScrollAnimated={isScrollAnimated}
                isParentOpen={isOpenDropdown}
                onClick={onClick}
              />
            ))}
          </React.Fragment>
        ))}
      </MenuDropdown>
    </div>
  )
}

export default Option
