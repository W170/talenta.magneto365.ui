import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Divider, Option, Modal } from './children'
import { INavMenuAnalystOption, INavMenuAnalystProps, INavMenuAnalystRegion } from './NavMenuAnalyst.interface'
import { LogoComponent } from '@components/UI/atoms'
import { logoPropsDark } from '@constants/stories'
import { IsoLogoMagnetoDark, MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { navMenuAnalystIcons } from './NavMenuAnalyst.constants'
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
  logoProps = { fallbackImage: logoPropsDark.logo, ...logoPropsDark },
  onDropdownClick,
  onRegionChange,
  path,
  queryString,
  regions,
  regionModal,
  sections,
  setIsDrawerOpen
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
        return option.data.some((child) => child.children?.some((subChild) => childrenActive(subChild)))
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

  const handleRegionModal = useCallback(() => {
    setIsDrawerOpen && setIsDrawerOpen(false)
    setIsRegionModalOpen(true)
  }, [setIsDrawerOpen])

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
      {isFullWidth && (
        <header className={CNM.get({ styles, cls: ['nav-menu-analyst__header'] })}>
          <LogoComponent fallbackImage={logoPropsDark.logo} {...logoProps} />
        </header>
      )}
      <div
        ref={containerRef}
        style={customScrollbarButtonsStyle as React.CSSProperties}
        className={CNM.get({ styles, cls: ['nav-menu-analyst__container'] })}
      >
        <div className={CNM.get({ styles, cls: ['nav-menu-analyst__sections'] })}>
          {sections.map((section, i) => (
            <div
              key={`section-${section.title}-${i}`}
              className={CNM.get({ styles, cls: ['nav-menu-analyst__section'] })}
            >
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
        {regions && regions.length > 0 && defaultRegion && (
          <div className={CNM.get({ styles, cls: ['nav-menu-analyst__region'] })}>
            <Option
              isFullWidth={isFullWidth}
              onOptionClick={handleRegionModal}
              option={{
                icons: {
                  fallbackIcon: IsoLogoMagnetoDark,
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
        )}
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
      </div>
    </div>
  )
}

/**
 * Organism UI component of navigation menu analyst
 */
export const NavMenuAnalyst = Component
