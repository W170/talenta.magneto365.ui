import React from 'react'
import { ICategoryMenuList } from './CategoryMenuList.interface'
import styles from './CategoryMenuList.module.scss'
import { ButtonLink } from '@components/UI/atoms'

const Component: React.FC<ICategoryMenuList> = ({ list, isOpen }): JSX.Element | null => {
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
    </div>
  )
}

export const CategoryMenuList = Component
