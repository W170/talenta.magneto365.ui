import React, { useCallback, useState, useEffect, useRef, useMemo } from 'react'
import { INavMenuAnalystIcons, INavMenuAnalystOption } from '../../NavMenuAnalyst.interface'
import { INavMenuAnalystOptionProps } from './NavMenuAnalystOption.interface'
import { MenuDropdown } from '@components/UI/atoms'
import { MenuIcon } from '@components/UI/molecules'
import { navMenuAnalystIcons } from '../../NavMenuAnalyst.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalystOption.module.scss'

const Component: React.FC<INavMenuAnalystOptionProps> = ({
  isDrawerOpen,
  isFullWidth,
  isOpenedFromHeader,
  isParentOpen = true,
  isScrollAnimated,
  onDropdownClick,
  onOptionClick,
  openedDropdown = false,
  option,
  path,
  queryString = {}
}) => {
  const { useQueryString = false, rel = 'noreferrer', target = '_self' } = option
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
        return option.data.some((c) => c.children?.some((child) => isActive(child)))
      }
      return false
    },
    [path]
  )

  const childrenActive = useCallback(
    (option: INavMenuAnalystOption): boolean => {
      if (option.data && Array.isArray(option.data)) {
        return option.data.some((c) => c.children?.some((child) => isActive(child)))
      }
      return false
    },
    [isActive]
  )

  const handleDropdownClick = useCallback(() => {
    if (isFullWidth && !scrolledToOption) {
      setScrolledToOption(true)
    }
    if (onDropdownClick) {
      onDropdownClick(option)
    }

    setIsOpenDropdown(!isOpenDropdown)
  }, [isOpenDropdown, onDropdownClick, option, isFullWidth, scrolledToOption])

  const icons = useCallback((active: boolean, icons: INavMenuAnalystIcons | undefined): string | undefined => {
    if (active) {
      return icons?.active
    }
    return icons?.normal
  }, [])

  const url = useMemo(() => {
    if (option.data && !Array.isArray(option.data) && typeof option.data === 'string') {
      const hasParams = option.data?.includes('?')
      const delimiter = useQueryString && queryString && hasParams ? '&' : ''

      const queryStringParams = Object.entries(queryString)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')

      return useQueryString && queryStringParams
        ? `${option.data}${hasParams ? delimiter : '?'}${queryStringParams}`
        : option.data
    }
  }, [option.data, queryString, useQueryString])

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
        iconSize={18}
        url={url}
        className={linkStyles}
        type={typeof option.data === 'function' || onOptionClick ? 'button' : 'link'}
        onClick={
          onOptionClick
            ? () => onOptionClick(option)
            : typeof option.data === 'function'
            ? () => (option.data as (option: INavMenuAnalystOption) => void)(option)
            : undefined
        }
        target={target}
        rel={rel}
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
            {item.children.map((child, j) => (
              <Component
                key={`option-${child.title}-${j}`}
                option={{ ...child, icons: child.icon ? navMenuAnalystIcons[child.icon] : { ...child.icons } }}
                isFullWidth={isFullWidth}
                isOpenedFromHeader={isOpenedFromHeader}
                path={path}
                openedDropdown={
                  !scrolledToOption ? childrenActive(child) && !isOpenedFromHeader && isOpenDropdown : false
                }
                isDrawerOpen={isDrawerOpen}
                isScrollAnimated={isScrollAnimated}
                isParentOpen={isOpenDropdown}
                onDropdownClick={onDropdownClick}
                onOptionClick={onOptionClick}
                queryString={queryString}
              />
            ))}
          </React.Fragment>
        ))}
      </MenuDropdown>
    </div>
  )
}

/**
 * Organism UI child component of nav menu analyst
 */
export const NavMenuAnalystOption = Component
