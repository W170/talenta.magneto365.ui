import React from 'react'
import styles from './MegaMenuTab.module.scss'
import { IMegaMenuTab } from './MegaMenuTab.interface'
import { classMUI } from '@constants/stories'
import { ArrowDown2 } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'

const MegaMenuTab: React.FC<IMegaMenuTab> = ({ label, selected }) => {
  return (
    <div
      className={`${styles[`${classMUI}-mega-menu-tab`]} ${
        selected ? styles[`${classMUI}-mega-menu-tab--selected`] : ''
      }`}
    >
      <div className={`${styles[`${classMUI}-mega-menu-tab__label`]}`}>{label}</div>
      {!selected && (
        <IconItem className={styles[`${classMUI}-mega-menu-tab__icon`]} icon={ArrowDown2} alt="arrow-icon" size={13} />
      )}
    </div>
  )
}

export default MegaMenuTab
