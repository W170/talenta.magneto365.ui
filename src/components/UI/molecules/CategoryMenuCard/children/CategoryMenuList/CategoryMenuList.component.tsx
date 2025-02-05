import React from 'react'
import { ICategoryMenuList } from './CategoryMenuList.interface'
import { useMediaQuery } from '@components/hooks'
import { ArrowRight2 } from '@constants/icons.constants'
import styles from './CategoryMenuList.module.scss'
import { ButtonLink, IconItem } from '@components/UI/atoms'

const Component = ({ list, isOpen, onClick, seeAllText, href }: ICategoryMenuList): JSX.Element | null => {
  const rightArrow = (
    <div className={styles[`magneto-ui-category-menu-list-seeAll__arrow`]}>
      <IconItem icon={ArrowRight2} size={16} />
    </div>
  )

  const arrow = useMediaQuery(rightArrow, {
    md: rightArrow
  })

  if (!list.length) return null

  return (
    <div
      className={`${styles[`magneto-ui-category-menu-list`]} ${
        isOpen ? styles[`magneto-ui-category-menu-list--is-open`] : ''
      }`}
    >
      {list.map(({ id, name, href }) => (
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
        {arrow}
      </div>
    </div>
  )
}

export const CategoryMenuList = Component
