import React from 'react'
import { classMUI } from '@constants/stories'
import style from './MegaMenuTabs.module.scss'
import { IMegaMenuTabs } from './MegaMenuTabs.interface'
import MegaMenuTab from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.component'

const MegaMenuTabs: React.FC<IMegaMenuTabs> = ({ tabs }) => {
  return (
    <div className={`${style[`${classMUI}-mega-menu-tabs`]}`}>
      {tabs && tabs.length > 0 && tabs.map((tab, key) => <MegaMenuTab key={key} {...tab} />)}
    </div>
  )
}

export default MegaMenuTabs
