import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Divider, Option, Modal } from './children'
import { INavMenuAnalystOption, INavMenuAnalystProps, INavMenuAnalystRegion } from './NavMenuAnalyst.interface'
import { LogoComponent } from '@components/UI/atoms'
import { logoPropsDark } from '@constants/stories'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { navMenuAnalystIcons } from './NavMenuAnalyst.constants'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalyst.module.scss'

const Component: React.FC<INavMenuAnalystProps> = ({
  activeDropdown,
  className = '',
  defaultRegion,
  footer,
  isDrawerOpen,
  isFullWidth,
  isOpenedFromHeader,
  isScrollAnimated,
  logoProps = logoPropsDark,
  onDropdownClick,
  onRegionChange,
  path,
  queryString,
  regions,
  regionModal,
  sections
}) => {
  const [isRegionModalOpen, setIsRegionModalOpen] = useState<boolean>(false)
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
        return option.data.some((c) => c.children?.some((child) => childrenActive(child)))
      }
      return false
    },
    [activeDropdown]
  )

  const handleRegionChange = useCallback(
    (localRegion: INavMenuAnalystRegion | null) => {
      if (localRegion) {
        onRegionChange && onRegionChange(localRegion)
      }
      setIsRegionModalOpen(false)
    },
    [onRegionChange]
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
          {section.children.map((child, j) => (
            <div key={`section-option-${child.title}-${j}`}>
              <Option
                option={{
                  ...child,
                  icons: child.icon ? navMenuAnalystIcons[child.icon] : { ...child.icons }
                }}
                isFullWidth={isFullWidth}
                path={path}
                openedDropdown={childrenActive(child) && isDrawerOpen}
                isDrawerOpen={isDrawerOpen}
                isOpenedFromHeader={isOpenedFromHeader}
                isScrollAnimated={isScrollAnimated}
                onDropdownClick={onDropdownClick}
                queryString={queryString}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  const regionContainer = useMediaQuery(
    regions && defaultRegion && (
      <div className={CNM.get({ styles, cls: ['nav-menu-analyst__region'] })}>
        <Option
          isFullWidth={isFullWidth}
          onOptionClick={() => setIsRegionModalOpen(true)}
          option={{
            icons: {
              normal:
                regions.find((r) => r.lang === defaultRegion)?.flag ||
                (regions && regions.length > 0 ? regions[0].flag : '')
            },
            title:
              regions.find((r) => r.lang === defaultRegion)?.name ||
              (regions && regions.length > 0 ? regions[0].name : '')
          }}
        />
        <Modal
          defaultRegion={defaultRegion}
          isOpen={isRegionModalOpen}
          onClose={handleRegionChange}
          regionModal={regionModal}
          regions={regions}
        />
      </div>
    )
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
          {option.children.map((child, j) => (
            <Option
              key={`footer-option-${child.title}-${j}`}
              option={child}
              isFullWidth={isFullWidth}
              queryString={queryString}
            />
          ))}
        </div>
      ))}
    </footer>
  )

  const customScrollbarButtonsStyle = {
    '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
    '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
  }

  return (
    <div
      className={CNM.get({
        styles,
        cls: ['nav-menu-analyst', isFullWidth && 'nav-menu-analyst--full-menu', className]
      })}
    >
      {isFullWidth && headerLogo}
      <div
        ref={containerRef}
        style={customScrollbarButtonsStyle as React.CSSProperties}
        className={CNM.get({ styles, cls: ['nav-menu-analyst__container'] })}
      >
        {sectionsContainer}
        {regionContainer}
        {footerSections}
      </div>
    </div>
  )
}

/**
 * Organism UI component of navigation menu analyst
 */
export const NavMenuAnalyst = Component
