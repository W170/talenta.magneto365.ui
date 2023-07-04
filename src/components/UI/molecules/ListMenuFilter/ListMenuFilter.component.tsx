import React, { useCallback } from 'react'
import { MenuIcon } from '../MenuIcon'
import { IListMenuFilter } from './ListMenuFilter.interface'
import style from './ListMenuFilter.module.scss'

const ListMenuFilter: React.FC<IListMenuFilter> = ({ filterItems, setFilter, textOrderFilter, setShowPopover }) => {
  const handleClick = useCallback(
    (key: string) => {
      setFilter({ key })
      setShowPopover(false)
    },
    [setFilter, setShowPopover]
  )

  return (
    <div className={style['magneto-ui-menu-filter']}>
      {filterItems.map(({ field, label, iconUrl }, i) => (
        <MenuIcon
          key={`${field}-${i}`}
          text={label}
          Icon={iconUrl}
          type="button"
          onClick={() => handleClick(field)}
          isActive={label === textOrderFilter}
        />
      ))}
    </div>
  )
}

export default ListMenuFilter
