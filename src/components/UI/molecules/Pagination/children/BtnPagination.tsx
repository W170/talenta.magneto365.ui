import React, { FC, Fragment, useMemo } from 'react'
import { SpinnerWhite } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { IBtnPaginationProps } from '../Pagination.interface'
import styles from './BtnPagination.module.scss'

export const BtnPagination: FC<IBtnPaginationProps> = ({ loading, value, current, text, icon, onClick }) => {
  const displayContent = useMemo(() => {
    if (loading && value && current === value)
      return <IconItem icon={SpinnerWhite} className={styles['magneto-ui-btn-pagination_spinner']} />
    return value
  }, [loading, current, value])

  const displayLogo = useMemo(() => (icon ? <IconItem icon={icon} /> : <Fragment />), [icon])

  const title = useMemo(() => (text ? text : `${value}`), [text, value])

  return (
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
      {displayLogo}
    </button>
  )
}
