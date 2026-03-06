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
  dynamicPaginationUrl,
  stylesB2b
}) => {
  const mgClass = 'magneto-ui-btn-pagination'

  const displayContent = useMemo(() => {
    if (loading && value && current === value)
      return <IconItem icon={SpinnerWhite} className={styles[`${mgClass}_spinner`]} />
    return value
  }, [loading, current, value])

  const pageQueryParam = 'paginator[page]='

  const displayIcon = useMemo(() => (icon ? <IconItem icon={icon} /> : <Fragment />), [icon])

  const title = useMemo(() => (text ? text : `${value}`), [text, value])

  const Button = () => (
    <button
      className={`${loading && styles[`${mgClass}_disabled`]}
          ${value && current === value && styles[`${mgClass}_active`]}
          ${value && current === value && styles[`${stylesB2b ? `${mgClass}_active_b2b` : `${mgClass}_active_b2c`}`]}
          ${text && styles[`${mgClass}_with__icon`]}
          ${text && styles[`${stylesB2b ? `${mgClass}_with__icon_b2b` : `${mgClass}_with__icon_b2c`}`]}
          ${styles[`${mgClass}_btn`]}
          ${styles[`${stylesB2b ? `${mgClass}_btn_b2b` : `${mgClass}_btn_b2c`}`]}
        `}
      title={title}
      disabled={loading}
      onClick={onClick}
    >
      {displayContent}
      {displayIcon}
    </button>
  )

  return (
    <Fragment>
      {dynamicPaginationUrl ? (
        <a
          className={styles[`${mgClass}_anchor`]}
          href={`${dynamicPaginationUrl}?${pageQueryParam}${value}`}
          onClick={(e) => e.preventDefault()}
        >
          <Button />
        </a>
      ) : (
        <Button />
      )}
    </Fragment>
  )
}
