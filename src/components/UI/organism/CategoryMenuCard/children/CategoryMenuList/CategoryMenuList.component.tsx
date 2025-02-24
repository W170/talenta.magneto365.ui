import React from 'react'
import { ICategoryMenuList } from './CategoryMenuList.interface'
import { ArrowRight2 } from '@constants/icons.constants'
import styles from './CategoryMenuList.module.scss'
import { ButtonLink, IconItem } from '@components/UI/atoms'

const Component: React.FC<ICategoryMenuList> = ({ list, isOpen, onClick, seeAllText, href }): JSX.Element | null => {
  const rightArrow = (
    <div className={styles[`magneto-ui-category-menu-list-seeAll__arrow`]}>
      <IconItem icon={ArrowRight2} size={16} />
    </div>
  )

  if (!list.length) return null

  return (
    <div
      className={`${styles[`magneto-ui-category-menu-list`]} ${
        isOpen ? styles[`magneto-ui-category-menu-list--is-open`] : ''
      }`}
    >
      {list.map(({ id, name, href, onClick }) => (
        <ButtonLink
          key={id}
          onClick={onClick}
          href={href}
          className={styles[`magneto-ui-category-menu-list-listItem`]}
          buttonText={name}
        />
      ))}
      <div className={`${styles[`magneto-ui-category-menu-list-seeAll`]}`}>
        <ButtonLink
          onClick={onClick}
          href={href}
          className={`${styles[`magneto-ui-category-menu-list-seeAll__item`]}`}
          buttonText={seeAllText}
        />
        {rightArrow}
      </div>
    </div>
  )
}

export const CategoryMenuList = Component
