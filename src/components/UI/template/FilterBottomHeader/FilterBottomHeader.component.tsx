import React from 'react'
import { Setting4 } from 'iconsax-react'
import { iconFilterOrder } from '../../../../constants/stories.constants'
import { MenuIcon } from '../../molecules'
import { MenuFilter } from '../../molecules/MenuFilter'
import { IconItem } from '../../atoms'
import { IFilterBottomHeader } from './FilterBottomHeader.interface'
import style from './FilterBottomHeader.module.scss'

const FilterBottomHeader: React.FC<IFilterBottomHeader> = ({
  textButtonFilter,
  filterSummary,
  textOrderFilter,
  openFilterDrawer,
  orderFilter,
  filterItems,
  setFilter
}) => {
  return (
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
        <MenuFilter filterItems={filterItems} textOrderFilter={textOrderFilter} setFilter={setFilter} />

        <button className={`${style['magneto-ui-btn-order']} ${style.hidden}`} onClick={orderFilter}>
          <IconItem {...iconFilterOrder} />
        </button>
      </div>
    </div>
  )
}

export default FilterBottomHeader
