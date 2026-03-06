import React from 'react'
import { ArrowDown2 } from '@constants/icons.constants'
import { IconItem } from '../../atoms/Icon'
import { ICategoryMenuCard } from './CategoryMenuCard.interface'
import styles from './CategoryMenuCard.module.scss'
import { CategoryMenuList } from './children/CategoryMenuList'
import { withClickOut } from '@components/hoc'
import { getIcon } from '@utils/icons/getIcons.util'
import { programaticIcons } from '@constants/stories'

const CategoryMenuCard: React.FC<ICategoryMenuCard> = ({ name, icon, clickOut, setClickOut = () => ({}), list }) => {
  const downArrow = (
    <div
      className={`${styles[`magneto-ui-category-menu-container-card__arrow`]}
       ${clickOut ? styles[`magneto-ui-category-menu-container-card__arrow--rotate-arrow`] : ''}`}
    >
      <IconItem icon={ArrowDown2} size={16} />
    </div>
  )

  const handleToggle = () => {
    setClickOut(!clickOut)
  }

  return (
    <div className={styles['magneto-ui-category-menu-container']} onClick={handleToggle}>
      <div
        className={`${styles[`magneto-ui-category-menu-container-card`]} 
        ${clickOut ? styles[`magneto-ui-category-menu-container-card--is-open`] : ''}`}
      >
        {icon && (
          <div className={styles[`magneto-ui-category-menu-container-card__icon`]}>
            <IconItem icon={getIcon(programaticIcons, icon)} size={16} />
          </div>
        )}
        <div className={styles[`magneto-ui-category-menu-container-card__content`]}>
          <div className={styles[`magneto-ui-category-menu-container-card__title`]}>{name}</div>
        </div>
        {downArrow}
      </div>
      <CategoryMenuList list={list} isOpen={clickOut} />
    </div>
  )
}

export default withClickOut(CategoryMenuCard)
