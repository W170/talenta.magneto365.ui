import React from 'react'
import { IMegaMenuSearchBar } from './MegaMenuSearchBar.interface'
import styles from './MegaMenuSearchBar.module.scss'
import SearchBar from './SearchBar.component'
import { Briefcase, Location, SearchIcon } from '@constants/icons.constants'

const MegaMenuSearchBar: React.FC<IMegaMenuSearchBar> = ({ location, occupation }) => {
  return (
    <div className={styles['mega-menu-search-bar']}>
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
