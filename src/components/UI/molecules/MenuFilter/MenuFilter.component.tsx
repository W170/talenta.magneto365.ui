import React from 'react'
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
  setClickOut = () => ({})
}) => {
  return (
    <Popover
      widthBase={180}
      show={clickOut}
      content={<ListMenuFilter filterItems={filterItems} setFilter={setFilter} />}
      positionX="left"
      positionY="bottom"
    >
      <button className={style['magneto-ui-btn-menu']} onClick={() => setClickOut(!clickOut)}>
        <p className={style['magneto-ui-btn-text']}>{textOrderFilter}</p>
        <IconItem {...menuFilterButton} />
      </button>
    </Popover>
  )
}
export default withClickOut(MenuFilter)
