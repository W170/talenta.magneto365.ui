import React, { useMemo } from 'react'
import { ListMenuText } from '../../ListMenuText'
import { ArrowDown2 } from '@constants/icons.constants'
import style from './MenuCollapseChildren.module.scss'
import { classMUI } from '@constants/stories'
import { IMenuCollapseChildren } from './MenuCollapseChildren.interface'

const MenuCollapseChildren: React.FC<IMenuCollapseChildren> = ({
  isOpen,
  onClick,
  heightContent,
  ...listMenuProps
}) => {
  const { rotateArrow, customHeightContent } = useMemo(() => {
    const rotateArrow = isOpen ? style['rotate'] : ''
    const customHeightContent = heightContent ? `${heightContent}px` : 'auto'
    return { rotateArrow, customHeightContent }
  }, [isOpen, heightContent])

  return (
    <div style={{ height: isOpen ? customHeightContent : '40px' }} className={`${style[`${classMUI}-collapse-menu`]}`}>
      <button onClick={onClick} type="button" className={`${style[`${classMUI}-collapse-menu__btn`]}`}>
        <img
          className={`${style[`${classMUI}-collapse-menu__btn--img`]} ${rotateArrow}`}
          src={ArrowDown2}
          alt="icon-arrow"
        />
      </button>
      <ListMenuText {...listMenuProps} />
    </div>
  )
}

export default MenuCollapseChildren
