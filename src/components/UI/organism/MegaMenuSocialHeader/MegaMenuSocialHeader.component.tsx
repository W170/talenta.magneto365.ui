import { MegaMenuTabs } from '@components/UI/molecules/MegaMenuTabs'
import React, { useCallback, useMemo, useState } from 'react'
import { ListMegaMenu } from '@constants/stories'
import { IMegaMenuSocialHeader } from './MegaMenuSocialHeader.interface'
import styles from './MegaMenuSocialHeader.modules.scss'
import { ListIconLink } from '../../molecules'
import { IconItem, Popover } from '@components/UI/atoms'
import { ArrowDown2 } from '@constants/icons.constants'

const Component: React.FC<IMegaMenuSocialHeader> = ({ tabs, blog, helpOptions }) => {
  const [showHelpOptions, setShowHelpOptions] = useState(false)
  const linkButton = useMemo(
    () => (
      <a
        title={blog.text}
        className={styles['mega-menu-header__blog']}
        href={blog.url}
        target={'_blank'}
        rel="noreferrer"
      >
        <p>{blog.text}</p>
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
      <ul className={styles['mega-menu-header__help--options']}>
        {helpOptions &&
          helpOptions.length > 0 &&
          helpOptions.map((option, key) => (
            <li key={key} className={styles['mega-menu-header__help--option']}>
              <a href={option.url}>
                <IconItem alt="arrow icon" hover={false} icon={option.icon} size={16} />
                <p>{option.label}</p>
              </a>
            </li>
          ))}
      </ul>
    ),
    [helpOptions]
  )

  return (
    <header className={styles['mega-menu-header']}>
      <MegaMenuTabs {...tabs} />
      <div className={styles['mega-menu-header__options']}>
        <ListIconLink listIcon={ListMegaMenu} size={20} spacing={10} />
        {linkButton}
        <Popover
          positionY={'bottom'}
          positionX={'left'}
          content={makeHelpOption}
          show={showHelpOptions}
          widthBase={50}
          className={`${styles['mega-menu-header__help']} ${
            showHelpOptions ? '' : styles['mega-menu-header__help--hidden']
          }`}
        >
          <button
            onClick={handleClickHelpOption(!showHelpOptions)}
            onBlur={handleClickHelpOption(false)}
            className={styles['mega-menu-header__help--button']}
          >
            <p>{'Ayuda'}</p>
            <IconItem alt="arrow icon" hover={false} icon={ArrowDown2} size={14} />
          </button>
        </Popover>
      </div>
    </header>
  )
}

export const MegaMenuSocialHeader = Component
