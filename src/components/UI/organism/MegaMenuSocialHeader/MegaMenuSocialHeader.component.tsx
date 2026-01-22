import { MegaMenuTabs } from '@components/UI/molecules/MegaMenuSocialTabs'
import React, { useCallback, useMemo, useState } from 'react'
import { ListMegaMenu, megaMenuHelpIcons } from '@constants/stories'
import styles from './MegaMenuSocialHeader.modules.scss'
import { ListIconLink } from '../../molecules'
import { IconItem, Popover } from '@components/UI/atoms'
import { useMegaMenuSocialHeader } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { ArrowDown2, ArrowDownWhite } from '@constants/icons.constants'
import { IMegaMenuSocialHeaderProps } from './MegaMenuSocialHeader.interface'

const Component: React.FC<IMegaMenuSocialHeaderProps> = ({ variant = 'default', promo, tabsPrefix }) => {
  const [showHelpOptions, setShowHelpOptions] = useState(false)
  const { helpOptions, blog, helpAction } = useMegaMenuSocialHeader()
  const isCandidate = variant === 'candidate'

  const variantClass = isCandidate ? styles['mega-menu-social-header--candidate'] : ''
  const arrowIcon = isCandidate ? ArrowDownWhite : ArrowDown2

  const promoSection = useMemo(
    () =>
      promo && (
        <div className={styles['mega-menu-social-header__promo']}>
          <span>{promo.content}</span>
          <a href={promo.linkUrl} className={styles['mega-menu-social-header__promo-link']}>
            {promo.linkText}
          </a>
        </div>
      ),
    [promo]
  )

  const linkButton = useMemo(
    () =>
      blog && (
        <a
          title={blog.label}
          className={`${styles['mega-menu-social-header__blog']} ${
            isCandidate ? styles['mega-menu-social-header__blog--candidate'] : ''
          }`}
          href={blog.url}
          target={'_blank'}
          rel="noreferrer"
        >
          <p>{blog.label}</p>
        </a>
      ),
    [blog, isCandidate]
  )

  const handleClickHelpOption = useCallback(
    (show: boolean) => () => {
      setShowHelpOptions(show)
    },
    []
  )

  const makeHelpOption = useMemo(
    () => (
      <ul className={styles['mega-menu-social-header__help--options']}>
        {helpOptions &&
          helpOptions.length > 0 &&
          helpOptions.map((option, key) => (
            <li key={key} className={styles['mega-menu-social-header__help--option']}>
              <a href={option.url}>
                <IconItem alt="arrow icon" hover={false} icon={megaMenuHelpIcons[key]} size={16} />
                <p className={styles['mega-menu-social-header__help--option-text']}>{option.label}</p>
              </a>
            </li>
          ))}
      </ul>
    ),
    [helpOptions]
  )

  return (
    <div className={`${styles['mega-menu-social-header']} ${variantClass}`}>
      <div
        className={`${styles['mega-menu-social-header__tabs-wrapper']} ${
          isCandidate ? styles['mega-menu-social-header__tabs-wrapper--candidate'] : ''
        }`}
      >
        {isCandidate && tabsPrefix && (
          <span className={styles['mega-menu-social-header__tabs-prefix']}>{tabsPrefix}</span>
        )}
        <MegaMenuTabs
          className={isCandidate ? styles['mega-menu-social-header__tabs--candidate'] : ''}
          showArrows={!isCandidate}
        />
      </div>
      {isCandidate && promoSection}
      <div className={styles['mega-menu-social-header__options']}>
        <ListIconLink
          listIcon={ListMegaMenu}
          size={20}
          spacing={10}
          className={isCandidate ? styles['mega-menu-social-header__icons--candidate'] : ''}
        />
        {linkButton}
        <Popover
          positionY={'bottom'}
          positionX={'left'}
          content={makeHelpOption}
          show={showHelpOptions}
          widthBase={60}
          className={`${styles['mega-menu-social-header__help']} ${
            showHelpOptions ? '' : styles['mega-menu-social-header__help--hidden']
          }`}
        >
          <React.Fragment>
            {helpAction && (
              <button
                onClick={handleClickHelpOption(!showHelpOptions)}
                onBlur={handleClickHelpOption(false)}
                className={`${styles['mega-menu-social-header__help--button']} ${
                  isCandidate ? styles['mega-menu-social-header__help--button-candidate'] : ''
                }`}
              >
                <p>{helpAction.label}</p>
                <IconItem alt="arrow icon" hover={false} icon={arrowIcon} size={14} />
              </button>
            )}
          </React.Fragment>
        </Popover>
      </div>
    </div>
  )
}

export const MegaMenuSocialHeader = Component
