import React from 'react'
import styles from './MegaMenuTab.module.scss'
import { IMegaMenuTab } from './MegaMenuTab.interface'
import { classMUI } from '@constants/stories'
import { ArrowDown2 } from '@constants/icons.constants'
import { SearchItem } from '../SearchItem'

const MegaMenuTab: React.FC<IMegaMenuTab> = ({ label, selected, url }) => {
  return (
    <div
      className={`${styles[`${classMUI}-mega-menu-tab`]} ${
        selected ? styles[`${classMUI}-mega-menu-tab__selected`] : ''
      }`}
    >
      <SearchItem
        tag={label}
        url={url}
        icon={`${selected ? '' : ArrowDown2}`}
        className={`${styles[`${classMUI}-mega-menu-tab__label`]} ${
          selected ? styles[`${classMUI}-mega-menu-tab__label-selected`] : ''
        }`}
      />
    </div>
  )
}

export default MegaMenuTab
