import React, { useMemo } from 'react'
import { ArrowDown2 } from '@constants/icons.constants'
import style from './Collapse.modules.scss'
import { classMUI } from '@constants/stories'
import { ICollapse } from './Collapse.interface'

const Collapse: React.FC<ICollapse> = ({ isOpen, onClick, heightContent, children }) => {
  const { rotateArrow, customHeightContent } = useMemo(() => {
    const rotateArrow = isOpen ? style['rotate'] : ''
    const customHeightContent = heightContent ? `${heightContent}px` : 'auto'
    return { rotateArrow, customHeightContent }
  }, [isOpen, heightContent])

  return (
    <div style={{ height: isOpen ? customHeightContent : '40px' }} className={`${style[`${classMUI}-collapse`]}`}>
      <button onClick={onClick} type="button" className={`${style[`${classMUI}-collapse__btn`]}`}>
        <img
          className={`${style[`${classMUI}-collapse__btn--img`]} ${rotateArrow}`}
          src={ArrowDown2}
          alt="icon-arrow"
        />
      </button>
      {children}
    </div>
  )
}

export default Collapse
