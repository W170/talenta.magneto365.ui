import React, { Fragment, useState } from 'react'
import { iconFilterOrder, menuSortButton } from '@constants/stories.constants'
import { Setting4 } from '@constants/icons.constants'
import { useMediaQuery } from '@components/hooks'
import { MenuIcon } from '@components/UI/molecules'
import { SortMenu } from '@components/UI/molecules/SortMenu'
import { IconItem } from '@components/UI/atoms'
import MobileSortMenu from '@components/UI/organism/MobileSortMenu/MobileSortMenu.component'
import { ISortBar } from './SortBar.interface'
import style from './SortBar.module.scss'

const SortBar: React.FC<ISortBar> = ({
  textSortButton,
  filterSummary,
  textOrderFilter,
  orderFields,
  orderByText,
  loading,
  setIsFiltersOpen,
  orderFilter,
  setFilter
}) => {
  const [showMenu, setShowMenu] = useState(false)

  const sortMenu = useMediaQuery(
    <SortMenu orderFields={orderFields} textOrderFilter={textOrderFilter} setFilter={setFilter} loading={loading} />,

    {
      md: (
        <button className={style['magneto-ui-btn-menu']} onClick={() => setShowMenu(true)}>
          <p className={style['magneto-ui-btn-text']}>{textOrderFilter}</p>
          <IconItem {...menuSortButton} />
        </button>
      )
    }
  )

  return (
    <Fragment>
      <div className={style['magneto-ui-sort-menu']}>
        <div className={style['magneto-ui-section-filter']}>
          <MenuIcon
            type="button"
            text={textSortButton}
            icon={Setting4}
            onClick={setIsFiltersOpen as () => void}
            size={17}
            isActive={true}
          />

          <p className={`${style['magneto-ui-btn-text']} ${style.hidden}`}>{filterSummary}</p>
        </div>
        <div className={style['magneto-ui-section-menu']}>
          {sortMenu}
          <button className={`${style['magneto-ui-btn-order']} ${style.hidden}`} onClick={orderFilter}>
            <IconItem {...iconFilterOrder} />
          </button>
        </div>
      </div>
      <MobileSortMenu
        orderByText={orderByText}
        isOpen={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        orderFields={orderFields}
        setFilter={setFilter}
        orderFilter={orderFilter}
        textOrderFilter={textOrderFilter}
        setShowPopover={setShowMenu}
      />
    </Fragment>
  )
}

export default SortBar
