import React, { useMemo, useRef } from 'react'
import { ListSortMenu } from '../ListSortMenu'
import { IconItem, Popover } from '../../atoms'
import { ISortMenu } from './SortMenu.interface'
import withClickOut from '../../../hoc/withClickOut'
import { menuSortButton } from '@constants/stories'
import useSortMenuNavigation from './hooks/useSortMenuNavigation.hook'
import style from './SortMenu.module.scss'

const SortMenu: React.FC<ISortMenu> = ({
  orderFields,
  textOrderFilter,
  orderByText,
  setFilter,
  clickOut = false,
  loading,
  setClickOut = () => ({})
}) => {
  const buttonTextRef = useRef<HTMLParagraphElement>(null)

  const { menuId, triggerRef, listRef, onTriggerClick, onTriggerKeyDown, onMenuKeyDown, returnFocusToTrigger } =
    useSortMenuNavigation({ isOpen: clickOut, setIsOpen: setClickOut })

  const listMenuProps = useMemo(() => {
    return {
      orderFields,
      setFilter,
      setShowPopover: setClickOut,
      textOrderFilter,
      menuId,
      menuLabel: orderByText,
      menuRef: listRef,
      onMenuKeyDown,
      onSelect: returnFocusToTrigger
    }
  }, [
    orderFields,
    textOrderFilter,
    orderByText,
    setFilter,
    setClickOut,
    menuId,
    listRef,
    onMenuKeyDown,
    returnFocusToTrigger
  ])

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
        ref={triggerRef}
        className={`${style['magneto-ui-btn-menu']} ${loading && style.disabled}`}
        title={textOrderFilter}
        aria-haspopup="menu"
        aria-expanded={clickOut}
        aria-controls={menuId}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
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
export default withClickOut(SortMenu, { className: style['magneto-ui-sort-menu-container'] })
