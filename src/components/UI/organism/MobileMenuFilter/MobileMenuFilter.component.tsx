import React from 'react'
import { ListMenuFilter } from '../../molecules/ListMenuFilter'
import { IMobileMenuFilter } from './MobileMenuFilter.interface'
import { MobileDrawer } from '../../molecules'
import { IconItem } from '../../atoms'
import style from './MobileMenuFilter.module.scss'
import { iconFilterOrder } from '../../../../constants/stories.constants'

const MobileMenuFilter: React.FC<IMobileMenuFilter> = ({
  isOpen,
  onClose,
  filterItems,
  setFilter,
  orderFilter,
  orderByText
}) => {
  return (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <div className={style['magneto-ui-order-container']}>
        <p className={style['magneto-ui-order-text']}>{orderByText}</p>
        <button className={`${style['magneto-ui-btn-order']}`} onClick={orderFilter}>
          <IconItem {...iconFilterOrder} />
        </button>
      </div>
      <ListMenuFilter filterItems={filterItems} setFilter={setFilter} />
    </MobileDrawer>
  )
}

export default MobileMenuFilter
