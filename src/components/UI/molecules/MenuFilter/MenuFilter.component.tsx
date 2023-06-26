import React, { useCallback, useEffect, useRef, useState } from 'react'
import { menuFilterButton } from '../../../../constants/stories.constants'
import { ListMenuFilter } from '../ListMenuFilter'
import { IconItem, Popover } from '../../atoms'
import { IMenuFilter } from './MenuFilter.interface'
import style from './MenuFilter.module.scss'

const MenuFilter: React.FC<IMenuFilter> = ({ filterItems, textOrderFilter, setFilter }) => {
  const [showPopover, setShowPopover] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (showPopover) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setShowPopover(!showPopover)
        }
      }
    },
    [showPopover]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <div ref={ref}>
      <Popover
        show={showPopover}
        content={<ListMenuFilter filterItems={filterItems} setFilter={setFilter} />}
        width={250}
        positionX="left"
        positionY="bottom"
      >
        <button className={style['magneto-ui-btn-menu']} onClick={() => setShowPopover(!showPopover)}>
          <p className={style['magneto-ui-btn-text']}>{textOrderFilter}</p>
          <IconItem {...menuFilterButton} />
        </button>
      </Popover>
    </div>
  )
}
export default MenuFilter
