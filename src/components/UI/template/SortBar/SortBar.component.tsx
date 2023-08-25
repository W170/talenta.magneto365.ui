import React, { Fragment, useState } from 'react'
import { iconFilterOrder, menuSortButton } from '@constants/stories.constants'
import { Setting4 } from '@constants/icons.constants'
import { useMediaQuery } from '@components/hooks'
import { MenuIcon } from '@components/UI/molecules'
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
  setIsFiltersOpen,
  orderFilter,
  setFilter
}) => {
  const [showMenu, setShowMenu] = useState(false)

  const sortMenu = useMediaQuery(
    <SortMenu orderFields={orderFields} textOrderFilter={textOrderFilter} setFilter={setFilter} loading={loading} />,

    {
      md: (
        <button className={styles['magneto-ui-btn-menu']} onClick={() => setShowMenu(true)}>
          <p className={styles['magneto-ui-btn-text']}>{textOrderFilter}</p>
          <IconItem {...menuSortButton} />
        </button>
      )
    }
  )

  return (
    <Fragment>
      <div className={styles['magneto-ui-sort-menu']}>
        <div className={styles['magneto-ui-section-filter']}>
          <MenuIcon
            type="button"
            text={textSortButton}
            icon={Setting4}
            onClick={setIsFiltersOpen as () => void}
            size={17}
            isActive={true}
          />
          <h1 className={styles['magneto-ui-main-title']}>{mainTitle}</h1>
          <p className={`${styles['magneto-ui-btn-text']} ${styles.hidden}`}>{filterSummary}</p>
        </div>
        <div className={styles['magneto-ui-section-menu']}>
          {sortMenu}
          <button className={`${styles['magneto-ui-btn-order']} ${styles.hidden}`} onClick={orderFilter}>
            <IconItem {...iconFilterOrder} />
          </button>
        </div>
      </div>
      <MobileSortMenu
        isOpen={showMenu}
        mainTitle={mainTitle}
        orderFields={orderFields}
        orderByText={orderByText}
        textOrderFilter={textOrderFilter}
        onClose={() => setShowMenu(!showMenu)}
        setFilter={setFilter}
        orderFilter={orderFilter}
        setShowPopover={setShowMenu}
      />
    </Fragment>
  )
}

export default SortBar
