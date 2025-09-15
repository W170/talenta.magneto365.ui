import React from 'react'
import { IMegaMenuSearchBar } from './MegaMenuSearchBar.interface'
import styles from './MegaMenuSearchBar.module.scss'
import SearchBar from './SearchBar.component'
import { Briefcase, Location, SearchIcon } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const MegaMenuSearchBar: React.FC<IMegaMenuSearchBar> = ({ location, occupation, className }) => {
  return (
    <div className={cx('mega-menu-search-bar', className)}>
      <SearchBar className={styles['mega-menu-search-bar__input--left']} icon={Briefcase} {...occupation} />
      <SearchBar
        className={styles['mega-menu-search-bar__input--rigth']}
        icon={Location}
        actionIcon={SearchIcon}
        {...location}
      />
    </div>
  )
}
9
export default MegaMenuSearchBar
