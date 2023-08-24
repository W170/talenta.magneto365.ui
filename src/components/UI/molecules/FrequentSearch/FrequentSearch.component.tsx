import React from 'react'
import { IFrequentSearch } from './FrequentSearch.interface'
import styles from './FrequentSearch.module.scss'

const Component: React.FC<IFrequentSearch> = ({ searchHeading, children }) => {
  return (
    <div className={styles['magneto-ui--frequent-search']}>
      <h2 className={styles['magneto-ui--frequent-search__heading']}>{searchHeading}</h2>
      <div className={styles['magneto-ui--frequent-search__items']}>{children}</div>
    </div>
  )
}

/**
 * UI Atom component of Frequent Search
 */

export const FrequentSearch = Component
