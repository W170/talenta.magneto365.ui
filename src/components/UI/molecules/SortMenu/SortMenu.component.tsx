import React, { useMemo, useRef } from 'react'
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
  const buttonTextRef = useRef<HTMLParagraphElement>(null)

  const listMenuProps = useMemo(() => {
    return {
      orderFields,
      setFilter,
      setShowPopover: setClickOut,
      textOrderFilter
    }
  }, [orderFields, textOrderFilter, setFilter, setClickOut])

  const getButtonWidth = () => {
    if (buttonTextRef.current) {
      const rect = buttonTextRef.current.getBoundingClientRect()
      return rect.width + 42
    }
    return 180
  }

  return (
    <Popover
      widthBase={getButtonWidth()}
      show={clickOut}
      content={<ListSortMenu {...listMenuProps} />}
      positionX="left"
      positionY="bottom"
      style={{ height: '75%' }}
    >
      <button
        className={`${style['magneto-ui-btn-menu']} ${loading && style.disabled}`}
        title={textOrderFilter}
        onClick={() => setClickOut(!clickOut)}
        disabled={loading}
      >
        <p className={style['magneto-ui-btn-text']} ref={buttonTextRef}>
          {textOrderFilter}
        </p>
        <IconItem {...menuSortButton} isRotate={clickOut} />
      </button>
    </Popover>
  )
}
export default withClickOut(SortMenu)
