import React from 'react'
import { MenuIcon } from '../MenuIcon'
import { IListMenuFilter } from './ListMenuFilter.interface'
import style from './ListMenuFilter.module.scss'

const ListMenuFilter: React.FC<IListMenuFilter> = ({ filterItems, setFilter }) => {
  return (
    <div className={style['magneto-ui-menu-filter']}>
      {filterItems.map(({ field, label, iconUrl }, i) => (
        <MenuIcon
          key={`${field}-${i}`}
          text={label}
          assetsIcon={iconUrl}
          type="button"
          onClick={() => setFilter({ key: field })}
        />
      ))}
    </div>
  )
}

export default ListMenuFilter
