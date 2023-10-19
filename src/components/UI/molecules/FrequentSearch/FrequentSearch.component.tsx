import React, { useMemo, useState } from 'react'
import { IFrequentSearch } from './FrequentSearch.interface'
import styles from './FrequentSearch.module.scss'
import { SearchItem } from '@components/UI/atoms'
import { useMediaQuery } from '../../../hooks/useMediaQuery/index'

const Component: React.FC<IFrequentSearch> = ({ searchHeading, searchList, showLess, showMore }) => {
  const [showFullList, setShowFullList] = useState(true)

  const searchListDinamyc = useMemo(() => {
    if (showFullList) {
      return searchList.slice(0, 9)
    }
    return searchList
  }, [searchList, showFullList])

  const searchListResponsive = useMediaQuery(searchList, { md: searchListDinamyc })

  return (
    <div className={styles['magneto-ui-frequent-search']}>
      <h2 className={styles['magneto-ui-frequent-search__heading']}>{searchHeading}</h2>
      <div className={styles['magneto-ui-frequent-search__items']}>
        {searchListResponsive.map(({ ...props }, i) => (
          <SearchItem key={i} {...props} />
        ))}
      </div>
      <div className={styles['magneto-ui-frequent-search__buttons-container']}>
        {showFullList ? (
          <button
            className={styles['magneto-ui-frequent-search__buttons-container--btn']}
            onClick={() => setShowFullList(false)}
            title={showMore}
          >
            {showMore} ({searchList.length})
          </button>
        ) : (
          <button
            className={styles['magneto-ui-frequent-search__buttons-container--btn']}
            onClick={() => setShowFullList(true)}
            title={showLess}
          >
            {showLess}
          </button>
        )}
      </div>
    </div>
  )
}

/**
 * UI Atom component of Frequent Search
 */

export const FrequentSearch = Component
