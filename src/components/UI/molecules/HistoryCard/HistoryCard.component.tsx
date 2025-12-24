import React from 'react'
import { IHistoryCard } from './HistoryCard.interface'
import style from './HistoryCard.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(style)

const Component: React.FC<IHistoryCard> = ({ type, headerData, details, className }) => {
  const cardClass = cx('magneto-ui-history-card', `magneto-ui-history-card--${type}`, className)

  return (
    <div className={cardClass}>
      <div className={cx('magneto-ui-history-card__header')}>
        {headerData.map((item, index) => (
          <div key={`${index}-${item.label}`} className={cx('magneto-ui-history-card__header-item')}>
            <p className={cx('magneto-ui-history-card__label')}>{item.label}</p>
            <p className={cx('magneto-ui-history-card__value')}>{item.value}</p>
          </div>
        ))}
      </div>
      <div className={cx('magneto-ui-history-card__body')}>
        {details.map((detail, index) => {
          if (Array.isArray(detail)) {
            return (
              <React.Fragment key={`group-${index}-${detail[0]?.label}`}>
                {detail.map((subDetail, subIndex) => (
                  <div key={`${index}-${subIndex}`} className={cx('magneto-ui-history-card__detail-item')}>
                    <p className={cx('magneto-ui-history-card__label')}>{subDetail.label}</p>
                    <div className={cx('magneto-ui-history-card__detail-value')}>{subDetail.value}</div>
                  </div>
                ))}
                {index < details.length - 1 && <div className={cx('magneto-ui-history-card__divider')} />}
              </React.Fragment>
            )
          }
          return (
            <div key={`${index}-${detail.label}`} className={cx('magneto-ui-history-card__detail-item')}>
              <p className={cx('magneto-ui-history-card__label')}>{detail.label}</p>
              <div className={cx('magneto-ui-history-card__detail-value')}>{detail.value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const HistoryCard = Component
