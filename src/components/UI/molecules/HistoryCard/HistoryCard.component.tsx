import React from 'react'
import { IHistoryCard } from './HistoryCard.interface'
import style from './HistoryCard.module.scss'
import { classNames } from '@shared/utils/common'
import { Typography } from '@components/UI/atoms'

const cx = classNames.bind(style)

const Component: React.FC<IHistoryCard> = ({ type, headerData, details, className }) => {
  const cardClass = cx('magneto-ui-history-card', `magneto-ui-history-card--${type}`, className)

  return (
    <div className={cardClass}>
      <div className={cx('magneto-ui-history-card__header')}>
        {headerData.map((item, index) => (
          <div key={`${index}-${item.label}`} className={cx('magneto-ui-history-card__header-item')}>
            <Typography.Paragraph size={14} color={'blue-dark-100'}>
              {item.label}
            </Typography.Paragraph>
            <Typography.Paragraph size={14} weight={'medium'} color={'grey-900'}>
              {item.value}
            </Typography.Paragraph>
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
                    <Typography.Paragraph size={14} color={'blue-dark-100'}>
                      {subDetail.label}
                    </Typography.Paragraph>
                    <div className={cx('magneto-ui-history-card__detail-value')}>{subDetail.value}</div>
                  </div>
                ))}
                {index < details.length - 1 && <div className={cx('magneto-ui-history-card__divider')} />}
              </React.Fragment>
            )
          }
          return (
            <div key={`${index}-${detail.label}`} className={cx('magneto-ui-history-card__detail-item')}>
              <Typography.Paragraph size={14} color={'blue-dark-100'}>
                {detail.label}
              </Typography.Paragraph>
              <div className={cx('magneto-ui-history-card__detail-value')}>{detail.value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const HistoryCard = Component
