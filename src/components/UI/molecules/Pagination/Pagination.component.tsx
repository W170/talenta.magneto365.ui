import React, { FC, useCallback } from 'react'
import { ArrowLeft2, ArrowRight2, Ellipsis } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { BtnPagination } from './children'
import { createPagination } from './utils'
import { IPaginationProps } from './Pagination.interface'
import styles from './Pagination.module.scss'

export const Pagination: FC<IPaginationProps> = ({
  total,
  current,
  pageSize,
  loading,
  onChange,
  prevTitle,
  nextTitle,
  numberOfButtons
}) => {
  const { buttons, first, last } = createPagination({
    total,
    current,
    pageSize,
    numberOfButtons
  })

  const handleClick = useCallback(
    (page: number) => {
      if (page === current) return
      onChange(page, pageSize)
    },
    [current, pageSize, onChange]
  )

  return (
    <div className={styles['magneto-ui-pagination']}>
      {first !== current && (
        <BtnPagination loading={loading} text={prevTitle} icon={ArrowLeft2} onClick={() => handleClick(current - 1)} />
      )}
      <ul>
        {!buttons.includes(first) && (
          <li>
            <BtnPagination loading={loading} value={first} current={current} onClick={() => handleClick(first)} />
            <IconItem icon={Ellipsis} className={styles['magneto-ui-pagination_ellipsis']} />
          </li>
        )}
        {buttons.map((page, index) => (
          <li key={`${page}-${index}`}>
            <BtnPagination loading={loading} value={page} current={current} onClick={() => handleClick(page)} />
          </li>
        ))}
        {!buttons.includes(last) && (
          <li>
            <IconItem icon={Ellipsis} className={styles['magneto-ui-pagination_ellipsis']} />
            <BtnPagination loading={loading} value={last} current={current} onClick={() => handleClick(last)} />
          </li>
        )}
      </ul>
      {last !== current && (
        <BtnPagination loading={loading} text={nextTitle} icon={ArrowRight2} onClick={() => handleClick(current + 1)} />
      )}
    </div>
  )
}

Pagination.defaultProps = {
  numberOfButtons: 3
}
