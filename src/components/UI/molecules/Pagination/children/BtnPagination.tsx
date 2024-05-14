import React, { FC, Fragment, useMemo } from 'react'
import { SpinnerWhite } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { IBtnPaginationProps } from '../Pagination.interface'
import styles from './BtnPagination.module.scss'

export const BtnPagination: FC<IBtnPaginationProps> = ({
  loading,
  value,
  current,
  text,
  icon,
  onClick,
  dynamicPaginationUrl
}) => {
  const displayContent = useMemo(() => {
    if (loading && value && current === value)
      return <IconItem icon={SpinnerWhite} className={styles['magneto-ui-btn-pagination_spinner']} />
    return value
  }, [loading, current, value])

  const pageQueryParam = 'paginator[page]='

  const displayIcon = useMemo(() => (icon ? <IconItem icon={icon} /> : <Fragment />), [icon])

  const title = useMemo(() => (text ? text : `${value}`), [text, value])

  return (
    <Fragment>
      {dynamicPaginationUrl ? (
        <a
          className={styles['magneto-ui-btn-pagination_anchor']}
          href={`${dynamicPaginationUrl}?${pageQueryParam}${value}`}
          onClick={(e) => e.preventDefault()}
        >
          <button
            className={`
              ${loading && styles['magneto-ui-btn-pagination_disabled']} 
              ${value && current === value && styles['magneto-ui-btn-pagination_active']} 
              ${text && styles['magneto-ui-btn-pagination_with__icon']}
              ${styles['magneto-ui-btn-pagination_btn']}
            `}
            title={title}
            disabled={loading}
            onClick={onClick}
          >
            {displayContent}
            {displayIcon}
          </button>
        </a>
      ) : (
        <button
          className={`
            ${loading && styles['magneto-ui-btn-pagination_disabled']} 
            ${value && current === value && styles['magneto-ui-btn-pagination_active']} 
            ${text && styles['magneto-ui-btn-pagination_with__icon']}
            ${styles['magneto-ui-btn-pagination_btn']}
          `}
          title={title}
          disabled={loading}
          onClick={onClick}
        >
          {displayContent}
          {displayIcon}
        </button>
      )}
    </Fragment>
  )
}
