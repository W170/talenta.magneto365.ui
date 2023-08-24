import React, { useState } from 'react'
import { iconFilterOrder, menuFilterButton } from '../../../../constants/stories.constants'
import { MenuIcon } from '../../molecules'
import { MenuFilter } from '../../molecules/MenuFilter'
import { IconItem } from '../../atoms'
import { IFilterBottomHeader } from './FilterBottomHeader.interface'
import style from './FilterBottomHeader.module.scss'
import { useMediaQuery } from '../../../hooks'
import MobileMenuFilter from '../../organism/MobileMenuFilter/MobileMenuFilter.component'
import { Setting4 } from '../../../../constants/icons.constants'

const FilterBottomHeader: React.FC<IFilterBottomHeader> = ({
  textButtonFilter,
  filterSummary,
  textOrderFilter,
  setIsFiltersOpen,
  orderFilter,
  filterItems,
  setFilter,
  orderByText,
  isFiltersOpen,
  loading
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const filterMenu = useMediaQuery(
    <MenuFilter filterItems={filterItems} textOrderFilter={textOrderFilter} setFilter={setFilter} loading={loading} />,

    {
      md: (
        <button className={style['magneto-ui-btn-menu']} onClick={() => setShowMenu(true)}>
          <p className={style['magneto-ui-btn-text']}>{textOrderFilter}</p>
          <IconItem {...menuFilterButton} />
        </button>
      )
    }
  )

  return (
    <>
      <div className={style['magneto-ui-filter']}>
        <div className={style['magneto-ui-section-filter']}>
          {!isFiltersOpen && (
            <MenuIcon
              type="button"
              text={textButtonFilter}
              icon={Setting4}
              onClick={setIsFiltersOpen as () => void}
              size={17}
              isActive={true}
            />
          )}
          <p className={`${style['magneto-ui-btn-text']} ${style.hidden}`}>{filterSummary}</p>
        </div>
        <div className={style['magneto-ui-section-menu']}>
          {filterMenu}
          <button className={`${style['magneto-ui-btn-order']} ${style.hidden}`} onClick={orderFilter}>
            <IconItem {...iconFilterOrder} />
          </button>
        </div>
      </div>
      <MobileMenuFilter
        orderByText={orderByText}
        isOpen={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        filterItems={filterItems}
        setFilter={setFilter}
        orderFilter={orderFilter}
        textOrderFilter={textOrderFilter}
        setShowPopover={setShowMenu}
      />
    </>
  )
}

export default FilterBottomHeader
