import React, { useState, useCallback } from 'react'
import { IAnalystTemplateProps } from './AnalystTemplate.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import { AnalystProvider } from './AnalystTemplate.context'
import styles from './AnalystTemplate.module.scss'
import { useMediaQuery } from '@components/hooks'
import { useAnalystModal } from './hooks'
import {
  HeaderAnalyst,
  NavMenuDrawerAnalyst,
  NavMenuAnalyst,
  INavMenuAnalystOption,
  ModalAnalyst,
  NavMenuAnalystRegionModal
} from '@components/UI/organism'

const Component: React.FC<IAnalystTemplateProps> = ({
  children,
  childrenClassName = '',
  className = '',
  containerClassName = '',
  headerProps,
  navigationMenuProps,
  modals
}) => {
  const [activeDropdown, setActiveDropdown] = useState<INavMenuAnalystOption | null>(null)
  const [isMenuScrollAnimated, setIsMenuScrollAnimated] = useState<boolean>(false)
  const [isOpenedFromHeader, setIsOpenedFromHeader] = useState<boolean>(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const { modal, handleModal } = useAnalystModal(modals)

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
    <AnalystProvider modals={modals} onRegionChange={navigationMenuProps.onRegionChange}>
      <div className={CNM.get({ styles, cls: ['analyst-template', className] })}>
        <ModalAnalyst
          isOpen={modal.some((modalLocal) => modalLocal.visible === true)}
          name={modal.find((modalLocal) => modalLocal.visible)?.name || ''}
          data={modal.find((modalLocal) => modalLocal.visible)?.data}
          screens={
            modals?.find((modalLocal) => modalLocal.name === modal.find((modalLocal) => modalLocal.visible)?.name)
              ?.screens ?? []
          }
          handleClose={handleModal}
        />
        <NavMenuAnalystRegionModal
          defaultRegion={navigationMenuProps.defaultRegion}
          regionModal={navigationMenuProps.regionModal}
          regions={navigationMenuProps.regions}
        />
        <HeaderAnalyst
          onMainMenuClick={() => toggleMenu(true, true)}
          {...headerProps}
          handleModal={handleModal}
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
          <main className={CNM.get({ styles, cls: ['analyst-template__children', childrenClassName] })}>
            {children}
          </main>
        </div>
      </div>
    </AnalystProvider>
  )
}

/**
 * Template UI component of analyst template
 */
export const AnalystTemplate = Component
