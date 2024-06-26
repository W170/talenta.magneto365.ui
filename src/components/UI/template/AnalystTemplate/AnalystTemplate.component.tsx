import React, { useState, useCallback } from 'react'
import { HeaderAnalyst, NavMenuDrawerAnalyst, NavMenuAnalyst, INavMenuAnalystOption } from '@components/UI/organism'
import { IAnalystTemplateProps } from './AnalystTemplate.interface'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './AnalystTemplate.module.scss'

const Component: React.FC<IAnalystTemplateProps> = ({
  children,
  childrenClassName = '',
  className = '',
  containerClassName = '',
  headerProps,
  navigationMenuProps
}) => {
  const [activeDropdown, setActiveDropdown] = useState<INavMenuAnalystOption | null>(null)
  const [isMenuScrollAnimated, setIsMenuScrollAnimated] = useState<boolean>(false)
  const [isOpenedFromHeader, setIsOpenedFromHeader] = useState<boolean>(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(
    (open?: boolean, drawerTriggered?: boolean) => {
      setIsDrawerOpen(open ?? !isDrawerOpen)
      setActiveDropdown(null)
      if (drawerTriggered) {
        setIsMenuScrollAnimated(false)
        setIsOpenedFromHeader(true)
      } else {
        setIsMenuScrollAnimated(true)
        setIsOpenedFromHeader(false)
      }
    },
    [isDrawerOpen]
  )

  const handleDropdownClick = useCallback(
    (option: INavMenuAnalystOption | null, drawerTriggered?: boolean, isChangeOpenedFrom?: boolean) => {
      if (isChangeOpenedFrom) {
        setIsMenuScrollAnimated(false)
      } else {
        if (drawerTriggered) {
          toggleMenu(true, true)
        } else {
          toggleMenu(true, false)
        }
      }
      setActiveDropdown(option)
    },
    [toggleMenu]
  )

  const sideMenu = useMediaQuery(<NavMenuAnalyst onDropdownClick={handleDropdownClick} {...navigationMenuProps} />, {
    sm: null
  })

  return (
    <div className={CNM.get({ styles, cls: ['analyst-template', className] })}>
      <HeaderAnalyst
        onMainMenuClick={() => toggleMenu(true, true)}
        {...headerProps}
        className={CNM.get({ styles, cls: [`analyst-template__header`, headerProps.className] })}
      />
      <div className={CNM.get({ styles, cls: ['analyst-template__container', containerClassName] })}>
        <NavMenuDrawerAnalyst
          onDropdownClick={(option) => handleDropdownClick(option, true, true)}
          activeDropdown={activeDropdown}
          isDrawerOpen={isDrawerOpen}
          onClose={() => toggleMenu(false)}
          isScrollAnimated={isMenuScrollAnimated}
          isOpenedFromHeader={isOpenedFromHeader}
          setIsDrawerOpen={(open) => setIsDrawerOpen(open)}
          logoProps={{ ...headerProps.logoProps }}
          {...navigationMenuProps}
        />
        {sideMenu}
        <main className={CNM.get({ styles, cls: ['analyst-template__children', childrenClassName] })}>{children}</main>
      </div>
    </div>
  )
}

/**
 * Template UI component of analyst template
 */
export const AnalystTemplate = Component
