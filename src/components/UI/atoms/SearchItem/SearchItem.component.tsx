import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { ISearchItem } from './SearchItem.interface'
import { ArrowRight2 } from '@constants/icons.constants'
import styles from './SearchItem.module.scss'

const Component: React.FC<ISearchItem> = ({ tag }) => {
  return (
    <div className={styles['magneto-ui--search-item']}>
      <a className={styles['magneto-ui--search-item__text']}>{tag}</a>
      <IconItem hover={false} icon={ArrowRight2} size={14} />
    </div>
  )
}

/**
 * UI Atom component of Search Item
 */

export const SearchItem = Component
