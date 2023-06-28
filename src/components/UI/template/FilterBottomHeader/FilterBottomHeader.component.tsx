import React, { useState } from 'react'
import { Setting4 } from 'iconsax-react'
import { iconFilterOrder, menuFilterButton } from '../../../../constants/stories.constants'
import { MenuIcon } from '../../molecules'
import { MenuFilter } from '../../molecules/MenuFilter'
import { IconItem } from '../../atoms'
import { IFilterBottomHeader } from './FilterBottomHeader.interface'
import style from './FilterBottomHeader.module.scss'
import { useMediaQuery } from '../../../hooks'
import MobileMenuFilter from '../../organism/MobileMenuFilter/MobileMenuFilter.component'

const FilterBottomHeader: React.FC<IFilterBottomHeader> = ({
  textButtonFilter,
  filterSummary,
  textOrderFilter,
  openFilterDrawer,
  orderFilter,
  filterItems,
  setFilter,
  orderByText
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const filterMenu = useMediaQuery(
    <MenuFilter filterItems={filterItems} textOrderFilter={textOrderFilter} setFilter={setFilter} />,

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
          <MenuIcon
            type="button"
            text={textButtonFilter}
            Icon={Setting4}
            onClick={openFilterDrawer}
            size={17}
            isActive={true}
          />
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
      />
    </>
  )
}

export default FilterBottomHeader
