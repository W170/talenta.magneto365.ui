import React, { useCallback } from 'react'
import { ICandidateOverviewTagsProps } from './CandidateOverviewTags.interface'
import { ICandidateOverviewText } from '../../CandidateOverview.interface'
import parentStyles from '../../CandidateOverview.module.scss'
import styles from './CandidateOverviewTags.module.scss'
import { classNames } from '@shared/utils/common'

const pCx = classNames.bind(parentStyles)
const cx = classNames.bind(styles)

const Component: React.FC<ICandidateOverviewTagsProps> = ({ title, children }) => {
  const styles = useCallback((text?: ICandidateOverviewText) => {
    return pCx(
      'magneto-ui-candidate-overview__text',
      text?.size && `magneto-ui-candidate-overview__text--size-${text.size}`,
      text?.color && `magneto-ui-candidate-overview__text--color-${text.color}`,
      text?.weight && `magneto-ui-candidate-overview__text--weight-${text.weight}`
    )
  }, [])

  return (
    <section className={cx('magneto-ui-candidate-overview-tags')}>
      <div className={cx('magneto-ui-candidate-overview-tags__container')}>
        {title && (
          <div
            className={pCx(
              'magneto-ui-candidate-overview__text--weight-black',
              'magneto-ui-candidate-overview__text--size-lg',
              'magneto-ui-candidate-overview__text--color-black'
            )}
          >
            <h2 className={`${styles(title)}`}>{title.value}</h2>
          </div>
        )}
        {children && (
          <ul className={cx('magneto-ui-candidate-overview-tags__list')}>
            {children.map((tag, index) => (
              <li
                key={`candidate-overview-description-${index}`}
                className={pCx(
                  'magneto-ui-candidate-overview__text--weight-normal',
                  'magneto-ui-candidate-overview__text--size-sm',
                  'magneto-ui-candidate-overview__text--color-black'
                )}
              >
                <span className={`${styles(tag.title)} ${cx('magneto-ui-candidate-overview-tags__item')}`}>
                  {tag.title?.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

/**
 *  Molecule UI child component of candidate overview
 */
export const CandidateOverviewTags = Component
