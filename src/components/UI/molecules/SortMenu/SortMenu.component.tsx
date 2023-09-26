import React, { useMemo } from 'react'
import { ListSortMenu } from '../ListSortMenu'
import { IconItem, Popover } from '../../atoms'
import { ISortMenu } from './SortMenu.interface'
import withClickOut from '../../../hoc/withClickOut'
import { menuSortButton } from '@constants/stories'
import style from './SortMenu.module.scss'

const SortMenu: React.FC<ISortMenu> = ({
  orderFields,
  textOrderFilter,
  setFilter,
  clickOut = false,
  loading,
  setClickOut = () => ({})
}) => {
  const listMenuProps = useMemo(() => {
    return {
      orderFields,
      setFilter,
      setShowPopover: setClickOut,
      textOrderFilter
    }
  }, [orderFields, textOrderFilter, setFilter, setClickOut])

  return (
    <Popover
      widthBase={180}
      show={clickOut}
      content={<ListSortMenu {...listMenuProps} />}
      positionX="left"
      positionY="bottom"
    >
      <button
        className={`${style['magneto-ui-btn-menu']} ${loading && style.disabled}`}
        title={textOrderFilter}
        onClick={() => setClickOut(!clickOut)}
        disabled={loading}
      >
        <p className={style['magneto-ui-btn-text']}>{textOrderFilter}</p>
        <IconItem {...menuSortButton} />
      </button>
    </Popover>
  )
}
export default withClickOut(SortMenu)
