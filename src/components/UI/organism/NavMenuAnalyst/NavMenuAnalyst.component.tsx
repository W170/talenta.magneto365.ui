import React, { useRef, useEffect, useCallback } from 'react'
import { Divider, Option } from './children'
import { INavMenuAnalystOption, INavMenuAnalystProps } from './NavMenuAnalyst.interface'
import { LogoComponent } from '@components/UI/atoms'
import { logoPropsDark } from '@constants/stories'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalyst.module.scss'

const NavMenuAnalyst: React.FC<INavMenuAnalystProps> = ({
  activeDropdown,
  className = '',
  country,
  footer,
  isDrawerOpen,
  isFullWidth,
  isOpenedFromHeader,
  isScrollAnimated,
  logoProps = logoPropsDark,
  onCountryClick,
  onDropdownClick,
  path,
  sections
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      if (!activeDropdown || !isDrawerOpen) {
        containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [activeDropdown, isDrawerOpen])

  const childrenActive = useCallback(
    (option: INavMenuAnalystOption): boolean => {
      if (option.title === activeDropdown?.title) {
        return true
      }
      if (option.data && Array.isArray(option.data)) {
        return option.data.some((c) => c.subChildren?.some((subC) => childrenActive(subC)))
      }
      return false
    },
    [activeDropdown]
  )

  const headerLogo = useMediaQuery(
    <header className={CNM.get({ styles, cls: ['nav-menu-analyst__header'] })}>
      <LogoComponent {...logoProps} />
    </header>
  )

  const sectionsContainer = useMediaQuery(
    <div className={CNM.get({ styles, cls: ['nav-menu-analyst__sections'] })}>
      {sections.map((section, i) => (
        <div key={`section-${section.title}-${i}`} className={CNM.get({ styles, cls: ['nav-menu-analyst__section'] })}>
          <Divider title={section.title} isFullWidth={isFullWidth} />
          {section.subChildren.map((subChildren, j) => (
            <div key={`section-option-${subChildren.title}-${j}`}>
              <Option
                option={subChildren}
                isFullWidth={isFullWidth}
                path={path}
                openedDropdown={childrenActive(subChildren) && isDrawerOpen}
                isDrawerOpen={isDrawerOpen}
                isOpenedFromHeader={isOpenedFromHeader}
                isScrollAnimated={isScrollAnimated}
                onClick={onDropdownClick}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  const countryContainer = useMediaQuery(
    <div className={CNM.get({ styles, cls: ['nav-menu-analyst__country'] })}>
      <Option option={country} isFullWidth={isFullWidth} onClick={onCountryClick} />
    </div>
  )

  const footerSections = useMediaQuery(
    <footer
      className={CNM.get({
        styles,
        cls: ['nav-menu-analyst__footer', isFullWidth && 'nav-menu-analyst__footer--full-menu']
      })}
    >
      {footer.map((option, i) => (
        <div
          key={`footer-section-${option.title}-${i}`}
          className={CNM.get({ styles, cls: ['nav-menu-analyst__footer-section'] })}
        >
          <Divider title={option.title} isFullWidth={isFullWidth} showMobile={false} />
          {option.subChildren.map((subChildren, j) => (
            <Option key={`footer-option-${subChildren.title}-${j}`} option={subChildren} isFullWidth={isFullWidth} />
          ))}
        </div>
      ))}
    </footer>
  )

  return (
    <div
      className={CNM.get({
        styles,
        cls: ['nav-menu-analyst', isFullWidth && 'nav-menu-analyst--full-menu', className]
      })}
    >
      {isFullWidth && headerLogo}
      <div ref={containerRef} className={CNM.get({ styles, cls: ['nav-menu-analyst__container'] })}>
        {sectionsContainer}
        {countryContainer}
        {footerSections}
      </div>
    </div>
  )
}

export default NavMenuAnalyst
