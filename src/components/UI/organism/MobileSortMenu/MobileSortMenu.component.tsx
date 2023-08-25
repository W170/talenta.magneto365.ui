import React, { useMemo } from 'react'
import { ListSortMenu } from '../../molecules/ListSortMenu'
import { IMobileSortMenu } from './MobileSortMenu.interface'
import { MobileDrawer } from '../../molecules'
import { IconItem } from '../../atoms'
import { iconFilterOrder } from '../../../../constants/stories.constants'
import style from './MobileSortMenu.module.scss'

const MobileSortMenu: React.FC<IMobileSortMenu> = ({
  isOpen,
  mainTitle,
  orderFields,
  orderByText,
  textOrderFilter,
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
      <h1 className={style['magneto-ui-order-text']}>{mainTitle}</h1>
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
