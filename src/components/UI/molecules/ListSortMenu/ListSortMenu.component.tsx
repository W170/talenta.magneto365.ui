import React, { useCallback } from 'react'
import { MenuIcon } from '../MenuIcon'
import { IListSortMenu } from './ListSortMenu.interface'
import style from './ListSortMenu.module.scss'

const ListSortMenu: React.FC<IListSortMenu> = ({ orderFields, setFilter, textOrderFilter, setShowPopover }) => {
  const handleClick = useCallback(
    (key: string) => {
      setFilter({ key })
      setShowPopover(false)
    },
    [setFilter, setShowPopover]
  )

  return (
    <div className={style['magneto-ui-menu-filter']}>
      {orderFields.map(({ field, label, iconUrl }, i) => (
        <MenuIcon
          key={`${field}-${i}`}
          text={label}
          icon={iconUrl}
          type="button"
          onClick={() => handleClick(field)}
          isActive={label === textOrderFilter}
        />
      ))}
    </div>
  )
}

export default ListSortMenu
