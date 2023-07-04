import React, { useMemo } from 'react'
import { menuFilterButton } from '../../../../constants/stories.constants'
import { ListMenuFilter } from '../ListMenuFilter'
import { IconItem, Popover } from '../../atoms'
import { IMenuFilter } from './MenuFilter.interface'
import style from './MenuFilter.module.scss'
import withClickOut from '../../../hoc/withClickOut'

const MenuFilter: React.FC<IMenuFilter> = ({
  filterItems,
  textOrderFilter,
  setFilter,
  clickOut = false,
  loading,
  setClickOut = () => ({})
}) => {
  const listMenuProps = useMemo(() => {
    return {
      filterItems,
      setFilter,
      setShowPopover: setClickOut,
      textOrderFilter
    }
  }, [filterItems, textOrderFilter, setFilter, setClickOut])

  return (
    <Popover
      widthBase={180}
      show={clickOut}
      content={<ListMenuFilter {...listMenuProps} />}
      positionX="left"
      positionY="bottom"
    >
      <button
        className={`${style['magneto-ui-btn-menu']} ${loading && style.disabled}`}
        onClick={() => setClickOut(!clickOut)}
        disabled={loading}
      >
        <p className={style['magneto-ui-btn-text']}>{textOrderFilter}</p>
        <IconItem {...menuFilterButton} />
      </button>
    </Popover>
  )
}
export default withClickOut(MenuFilter)
