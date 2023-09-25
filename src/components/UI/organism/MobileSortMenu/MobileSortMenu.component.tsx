import React, { useMemo } from 'react'
import { ListSortMenu } from '../../molecules/ListSortMenu'
import { IMobileSortMenu } from './MobileSortMenu.interface'
import { MobileDrawer } from '../../molecules'
import { IconItem } from '../../atoms'
import { iconFilterOrder } from '@constants/stories'
import style from './MobileSortMenu.module.scss'

const MobileSortMenu: React.FC<IMobileSortMenu> = ({
  isOpen,
  orderFields,
  orderByText,
  textOrderFilter,
  titleBtnOrder,
  onClose,
  setFilter,
  orderFilter,
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
        <button className={`${style['magneto-ui-btn-order']}`} title={titleBtnOrder} onClick={orderFilter}>
          <IconItem {...iconFilterOrder} />
        </button>
      </div>
      <ListSortMenu {...listMenuProps} />
    </MobileDrawer>
  )
}

MobileSortMenu.defaultProps = {
  titleBtnOrder: ''
}

export default MobileSortMenu
