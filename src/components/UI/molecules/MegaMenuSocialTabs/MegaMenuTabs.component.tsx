import React from 'react'
import { classMUI } from '@constants/stories'
import style from './MegaMenuTabs.module.scss'
import MegaMenuTab from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.component'
import { useMegaMenu } from '@components/UI/template/MegaMenu/MegaMenu.context'

const MegaMenuTabs: React.FC<{ showArrows?: boolean; className?: string }> = ({ className, showArrows = true }) => {
  const {
    socialHeaderProps: { tabs }
  } = useMegaMenu()
  return (
    <div className={`${style[`${classMUI}-mega-menu-tabs`]} ${className ? className : ''}`}>
      {tabs.length > 0 && tabs.map((tab, key) => <MegaMenuTab key={key} showArrow={showArrows} {...tab} />)}
    </div>
  )
}

export default MegaMenuTabs
