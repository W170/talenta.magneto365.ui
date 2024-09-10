import { MegaMenuTabs } from '@components/UI/molecules/MegaMenuSocialTabs'
import React, { useCallback, useMemo, useState } from 'react'
import { ListMegaMenu, megaMenuHelpIcons } from '@constants/stories'
import styles from './MegaMenuSocialHeader.modules.scss'
import { ListIconLink } from '../../molecules'
import { IconItem, Popover } from '@components/UI/atoms'
import { useMegaMenuSocialHeader } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { ArrowDown2 } from '@constants/icons.constants'

const Component: React.FC = () => {
  const [showHelpOptions, setShowHelpOptions] = useState(false)
  const { helpOptions, blog, helpAction } = useMegaMenuSocialHeader()

  const linkButton = useMemo(
    () =>
      blog && (
        <a
          title={blog.label}
          className={styles['mega-menu-social-header__blog']}
          href={blog.url}
          target={'_blank'}
          rel="noreferrer"
        >
          <p>{blog.label}</p>
        </a>
      ),
    [blog]
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
                <p>{option.label}</p>
              </a>
            </li>
          ))}
      </ul>
    ),
    [helpOptions]
  )

  return (
    <div className={styles['mega-menu-social-header']}>
      <MegaMenuTabs />
      <div className={styles['mega-menu-social-header__options']}>
        <ListIconLink listIcon={ListMegaMenu} size={20} spacing={10} />
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
                className={styles['mega-menu-social-header__help--button']}
              >
                <p>{helpAction.label}</p>
                <IconItem alt="arrow icon" hover={false} icon={ArrowDown2} size={14} />
              </button>
            )}
          </React.Fragment>
        </Popover>
      </div>
    </div>
  )
}

export const MegaMenuSocialHeader = Component
