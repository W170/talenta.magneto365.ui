import React, { useCallback } from 'react'
import { MenuIcon } from '../MenuIcon'
import { IListSortMenu } from './ListSortMenu.interface'
import style from './ListSortMenu.module.scss'

const ListSortMenu: React.FC<IListSortMenu> = ({
  orderFields,
  setFilter,
  textOrderFilter,
  setShowPopover,
  menuId,
  menuLabel,
  menuRef,
  onMenuKeyDown,
  onSelect
}) => {
  const handleClick = useCallback(
    (key: string) => {
      setFilter({ key })
      setShowPopover(false)
      onSelect?.()
    },
    [setFilter, setShowPopover, onSelect]
  )

  const asMenu = Boolean(onMenuKeyDown)
  const hasActiveOption = orderFields.some(({ label }) => label === textOrderFilter)

  return (
    <div
      ref={menuRef}
      id={menuId}
      className={style['magneto-ui-menu-filter']}
      role={asMenu ? 'menu' : undefined}
      aria-label={asMenu ? menuLabel : undefined}
      onKeyDown={onMenuKeyDown}
    >
      {orderFields.map(({ field, label, iconUrl }, i) => {
        const isActive = label === textOrderFilter
        const isTabStop = isActive || (!hasActiveOption && i === 0)
        return (
          <MenuIcon
            key={`${field}-${i}`}
            text={label}
            icon={iconUrl}
            type="button"
            onClick={() => handleClick(field)}
            isActive={isActive}
            role={asMenu ? 'menuitem' : undefined}
            tabIndex={asMenu ? (isTabStop ? 0 : -1) : undefined}
          />
        )
      })}
    </div>
  )
}

export default ListSortMenu
