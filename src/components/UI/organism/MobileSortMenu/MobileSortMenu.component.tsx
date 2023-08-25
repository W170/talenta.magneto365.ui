import React, { useMemo } from 'react'
import { ListSortMenu } from '../../molecules/ListSortMenu'
import { IMobileSortMenu } from './MobileSortMenu.interface'
import { MobileDrawer } from '../../molecules'
import { IconItem } from '../../atoms'
import style from './MobileSortMenu.module.scss'
import { iconFilterOrder } from '../../../../constants/stories.constants'

const MobileSortMenu: React.FC<IMobileSortMenu> = ({
  isOpen,
  onClose,
  orderFields,
  setFilter,
  orderFilter,
  orderByText,
  textOrderFilter,
  setShowPopover
}) => {
  const listMenuProps = useMemo(() => {
    return {
      orderFields,
      setFilter,
      setShowPopover,
      textOrderFilter
    }
  }, [orderFields, textOrderFilter, setFilter, setShowPopover])
  return (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <div className={style['magneto-ui-order-container']}>
        <p className={style['magneto-ui-order-text']}>{orderByText}</p>
        <button className={`${style['magneto-ui-btn-order']}`} onClick={orderFilter}>
          <IconItem {...iconFilterOrder} />
        </button>
      </div>
      <ListSortMenu {...listMenuProps} />
    </MobileDrawer>
  )
}

export default MobileSortMenu
