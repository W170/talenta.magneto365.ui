import React, { Fragment, useCallback, useMemo, useState } from 'react'
import { iconFilterOrder, menuSortButton } from '@constants/stories'
import { Setting4 } from '@constants/icons.constants'
import { useMediaQuery } from '@components/hooks'
import { MenuIcon, Tooltip } from '@components/UI/molecules'
import { SortMenu } from '@components/UI/molecules/SortMenu'
import { IconItem } from '@components/UI/atoms'
import MobileSortMenu from '@components/UI/organism/MobileSortMenu/MobileSortMenu.component'
import { ISortBar } from './SortBar.interface'
import styles from './SortBar.module.scss'

const SortBar: React.FC<ISortBar> = ({
  textSortButton,
  mainTitle,
  filterSummary,
  textOrderFilter,
  orderFields,
  orderByText,
  loading,
  titleBtnOrder = '',
  setIsFiltersOpen,
  orderFilter,
  setFilter,
  emptyVacant,
  infoMessageQuotas,
  widthInfoMessage,
  horizontal = false
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const [rotateOrderIcon, setRotateOrderIcon] = useState(false)
  const tooltip = useMediaQuery(
    <Tooltip title={infoMessageQuotas || ''} position="bottom" width={widthInfoMessage}>
      <div className={`${styles['magneto-ui-tooltip-quotas']}`}>
        <span>?</span>
      </div>
    </Tooltip>,
    { sm: <Fragment /> }
  )

  const sortMenu = useMediaQuery(
    <SortMenu orderFields={orderFields} textOrderFilter={textOrderFilter} setFilter={setFilter} loading={loading} />,

    {
      md: (
        <button className={styles['magneto-ui-btn-menu']} title={textOrderFilter} onClick={() => setShowMenu(true)}>
          <p className={styles['magneto-ui-btn-text']}>{textOrderFilter}</p>
          <IconItem {...menuSortButton} />
        </button>
      )
    }
  )

  const mainTitleByMediaQuery = useMediaQuery(<h1 className={styles['magneto-ui-main-title']}>{mainTitle}</h1>, {
    md: <Fragment />
  })

  const handleOrder = useCallback(() => {
    orderFilter()
    setRotateOrderIcon(!rotateOrderIcon)
  }, [rotateOrderIcon, orderFilter])

  const sortBarButtonAltRender = useMemo(() => {
    if (emptyVacant) return

    return (
      <div className={styles['magneto-ui-section-menu']}>
        {sortMenu}
        <button
          className={`${styles['magneto-ui-btn-order']} ${styles.hidden}`}
          title={titleBtnOrder}
          onClick={handleOrder}
        >
          <IconItem isRotate={rotateOrderIcon} {...iconFilterOrder} />
        </button>
      </div>
    )
  }, [emptyVacant, sortMenu, titleBtnOrder, handleOrder, rotateOrderIcon])

  return (
    <Fragment>
      <div className={styles['magneto-ui-sort-menu']}>
        <div className={styles['magneto-ui-section-filter']}>
          {!horizontal && (
            <MenuIcon
              type="button"
              text={textSortButton}
              icon={Setting4}
              onClick={setIsFiltersOpen as () => void}
              size={17}
              isActive={true}
            />
          )}
          {mainTitleByMediaQuery}
          <p className={`${styles['magneto-ui-btn-text']} ${horizontal ? '' : styles.hidden}`}>{filterSummary}</p>
          {infoMessageQuotas && tooltip}
        </div>
        {sortBarButtonAltRender}
      </div>
      <MobileSortMenu
        isOpen={showMenu}
        orderFields={orderFields}
        orderByText={orderByText}
        textOrderFilter={textOrderFilter}
        titleBtnOrder={titleBtnOrder}
        onClose={() => setShowMenu(!showMenu)}
        setFilter={setFilter}
        orderFilter={orderFilter}
        setShowPopover={setShowMenu}
      />
    </Fragment>
  )
}

export default SortBar
