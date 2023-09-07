import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { ISearchItem } from './SearchItem.interface'
import { ArrowRight2 } from '@constants/icons.constants'
import styles from './SearchItem.module.scss'

const Component: React.FC<ISearchItem> = ({ tag, url }) => {
  return (
    <a className={styles['magneto-ui--search-item']} href={url}>
      <p className={styles['magneto-ui--search-item__text']}>{tag}</p>
      <IconItem hover={false} icon={ArrowRight2} size={14} />
    </a>
  )
}

/**
 * UI Atom component of Search Item
 */

export const SearchItem = Component
