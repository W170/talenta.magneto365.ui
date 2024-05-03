import React, { useState } from 'react'
import { HeaderAnalyst, NavMenuDrawerAnalyst, NavMenuAnalyst, INavMenuAnalystOption } from '@components/UI/organism'
import { IAnalystTemplate } from './AnalystTemplate.interface'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './AnalystTemplate.module.scss'

const AnalystTemplate: React.FC<IAnalystTemplate> = ({
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

  const toggleMenu = (open?: boolean, drawerTriggered?: boolean) => {
    setIsDrawerOpen(open ?? !isDrawerOpen)
    setActiveDropdown(null)
    if (drawerTriggered) {
      setIsMenuScrollAnimated(false)
      setIsOpenedFromHeader(true)
    } else {
      setIsMenuScrollAnimated(true)
      setIsOpenedFromHeader(false)
    }
  }

  const handleDropdownClick = (
    option: INavMenuAnalystOption | null,
    drawerTriggered?: boolean,
    isChangeOpenedFrom?: boolean
  ) => {
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
  }

  const header = useMediaQuery(
    <HeaderAnalyst
      onMainMenuClick={() => toggleMenu(true, true)}
      {...headerProps}
      className={CNM.get({ styles, cls: [`analyst-template__header`, headerProps.className] })}
    />
  )

  const sideMenu = useMediaQuery(<NavMenuAnalyst onDropdownClick={handleDropdownClick} {...navigationMenuProps} />, {
    sm: null
  })

  const sideMenuDrawer = useMediaQuery(
    <NavMenuDrawerAnalyst
      onDropdownClick={(option) => handleDropdownClick(option, true, true)}
      activeDropdown={activeDropdown}
      isDrawerOpen={isDrawerOpen}
      onClose={() => toggleMenu(false)}
      isScrollAnimated={isMenuScrollAnimated}
      isOpenedFromHeader={isOpenedFromHeader}
      {...navigationMenuProps}
    />
  )

  return (
    <div className={CNM.get({ styles, cls: ['analyst-template', className] })}>
      {header}
      <div className={CNM.get({ styles, cls: ['analyst-template__container', containerClassName] })}>
        {sideMenuDrawer}
        {sideMenu}
        <main className={CNM.get({ styles, cls: ['analyst-template__children', childrenClassName] })}>{children}</main>
      </div>
    </div>
  )
}

export default AnalystTemplate