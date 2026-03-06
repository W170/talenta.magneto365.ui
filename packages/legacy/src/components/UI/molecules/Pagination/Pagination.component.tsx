import React, { FC, Fragment, useCallback, useMemo } from 'react'
import { ArrowLeft2, ArrowRight2, Ellipsis } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { BtnPagination } from './children'
import { createPagination } from './utils'
import { IPaginationProps } from './Pagination.interface'
import styles from './Pagination.module.scss'

type dynamicProps = {
  dynamicUrl?: string
}

type ComposedProps = IPaginationProps & dynamicProps

export const Pagination: FC<ComposedProps> = ({
  total,
  current,
  pageSize,
  loading,
  onChange,
  prevTitle,
  nextTitle,
  numberOfButtons = 3,
  dynamicUrl,
  stylesB2b
}) => {
  const mgClass = 'magneto-ui-pagination'
  const handleClick = useCallback(
    (page: number) => {
      if (page === current) return
      onChange(page, pageSize)
    },
    [current, pageSize, onChange]
  )

  const { buttons, first, last } = useMemo(() => {
    return createPagination({
      total,
      current,
      pageSize,
      numberOfButtons
    })
  }, [total, current, pageSize, numberOfButtons])

  if (total <= pageSize) return <Fragment />

  return (
    <div className={`${styles[mgClass]} ${styles[`${stylesB2b ? `${mgClass}_b2b` : `${mgClass}_b2c`}`]}`}>
      {first !== current && (
        <BtnPagination
          loading={loading}
          text={prevTitle}
          icon={ArrowLeft2}
          onClick={() => handleClick(current - 1)}
          stylesB2b={stylesB2b}
        />
      )}
      <ul>
        {!buttons.includes(first) && (
          <li>
            <BtnPagination
              loading={loading}
              value={first}
              current={current}
              onClick={() => handleClick(first)}
              dynamicPaginationUrl={dynamicUrl}
              stylesB2b={stylesB2b}
            />
            <IconItem icon={Ellipsis} className={styles[`${mgClass}_ellipsis`]} />
          </li>
        )}
        {buttons.map((page, index) => (
          <li key={`${page}-${index}`}>
            <BtnPagination
              loading={loading}
              value={page}
              current={current}
              onClick={() => handleClick(page)}
              dynamicPaginationUrl={dynamicUrl}
              stylesB2b={stylesB2b}
            />
          </li>
        ))}
        {!buttons.includes(last) && (
          <li>
            <IconItem icon={Ellipsis} className={styles[`${mgClass}_ellipsis`]} />
            <BtnPagination
              loading={loading}
              value={last}
              current={current}
              onClick={() => handleClick(last)}
              dynamicPaginationUrl={dynamicUrl}
              stylesB2b={stylesB2b}
            />
          </li>
        )}
      </ul>
      {last !== current && (
        <BtnPagination
          loading={loading}
          text={nextTitle}
          icon={ArrowRight2}
          onClick={() => handleClick(current + 1)}
          stylesB2b={stylesB2b}
        />
      )}
    </div>
  )
}
