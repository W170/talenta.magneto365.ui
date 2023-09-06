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
      <h3 className={styles['magneto-ui-frequent-search__heading']}>{searchHeading}</h3>
      <div className={styles['magneto-ui-frequent-search__items']}>
        {searchListResponsive.map(({ href, tag }, i) => (
          <SearchItem key={i} href={href} tag={tag} />
        ))}
      </div>
      <div className={styles['magneto-ui-frequent-search__buttons-container']}>
        {showFullList ? (
          <button
            className={styles['magneto-ui-frequent-search__buttons-container--btn']}
            onClick={() => setShowFullList(false)}
          >
            {showMore} ({searchList.length})
          </button>
        ) : (
          <button
            className={styles['magneto-ui-frequent-search__buttons-container--btn']}
            onClick={() => setShowFullList(true)}
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
