import React, { useCallback } from 'react'
import { mainTitleStyles, subTitleStyles, normalTextStyles } from './CandidateOverviewSummary.constants'
import { ICandidateOverviewSummaryProps } from './CandidateOverviewSummary.interface'
import { CandidateOverviewSummaryTag as Tag } from './children'
import parentStyles from '../../CandidateOverview.module.scss'
import styles from './CandidateOverviewSummary.module.scss'
import { classNames } from '@shared/utils/common'
import {
  ECandidateOverviewTextDirection,
  ECandidateOverviewSeparation,
  TCandidateOverviewSeparation
} from '../../CandidateOverview.interface'

const pCx = classNames.bind(parentStyles)
const cx = classNames.bind(styles)

const Component: React.FC<ICandidateOverviewSummaryProps> = ({ title, children, descriptions, separation }) => {
  const getSeparation = useCallback(
    (defaultSeparation: ECandidateOverviewSeparation, separation?: TCandidateOverviewSeparation) =>
      pCx(`magneto-ui-candidate-overview__separation--${separation || defaultSeparation}`),
    []
  )

  const getDirection = useCallback(
    (direction?: string) =>
      cx(
        direction === ECandidateOverviewTextDirection.COLUMN
          ? 'magneto-ui-candidate-overview-summary__text-container--column'
          : 'magneto-ui-candidate-overview-summary__text-container--row'
      ),
    []
  )

  return (
    <section className={cx('magneto-ui-candidate-overview-summary')}>
      <div
        className={`${cx('magneto-ui-candidate-overview-summary__container')} ${getSeparation(
          ECandidateOverviewSeparation.MD,
          separation
        )}`}
      >
        {title && (
          <div className={pCx(...mainTitleStyles)}>
            <Tag tag="h2" text={title} />
          </div>
        )}
        {children && (
          <div
            className={`${cx('magneto-ui-candidate-overview-summary__content')} ${getSeparation(
              ECandidateOverviewSeparation.XXXL
            )}`}
          >
            {children.map(({ titles, subtitles, descriptions, infos, separation }, index) => (
              <ul
                className={`${cx('magneto-ui-candidate-overview-summary__sub-content')} ${getSeparation(
                  ECandidateOverviewSeparation.SM,
                  separation
                )}`}
                key={`magneto-ui-candidate-overview-summary-subtitle-${index}`}
              >
                {titles && (
                  <li
                    className={`${cx('magneto-ui-candidate-overview-summary__text-container')} ${getSeparation(
                      ECandidateOverviewSeparation.MD,
                      titles.separation
                    )} ${getDirection(titles.direction)}`}
                  >
                    {titles.children?.map((title, index) => (
                      <div
                        key={`magneto-ui-candidate-overview-summary-title-${index}`}
                        className={`${pCx(...subTitleStyles)} ${getSeparation(
                          ECandidateOverviewSeparation.MD,
                          title.separation
                        )}`}
                      >
                        <Tag tag="h3" text={title} />
                      </div>
                    ))}
                  </li>
                )}
                {subtitles && (
                  <li
                    className={`${cx('magneto-ui-candidate-overview-summary__text-container')} ${getSeparation(
                      ECandidateOverviewSeparation.MD,
                      subtitles.separation
                    )} ${getDirection(subtitles.direction)}`}
                  >
                    {subtitles.children?.map((subtitle, index) => (
                      <div
                        key={`magneto-ui-candidate-overview-summary-subtitle-${index}`}
                        className={`${pCx(...normalTextStyles)} ${getSeparation(
                          ECandidateOverviewSeparation.MD,
                          subtitle.separation
                        )}`}
                      >
                        <Tag tag="h4" text={subtitle} />
                      </div>
                    ))}
                  </li>
                )}
                {descriptions && (
                  <li
                    className={`${cx('magneto-ui-candidate-overview-summary__text-container')} ${getSeparation(
                      ECandidateOverviewSeparation.MD,
                      descriptions.separation
                    )} ${getDirection(descriptions.direction)}`}
                  >
                    {descriptions.children?.map((description, index) => (
                      <div
                        key={`magneto-ui-candidate-overview-summary-description-${index}`}
                        className={`${pCx(...normalTextStyles)} ${getSeparation(
                          ECandidateOverviewSeparation.MD,
                          description.separation
                        )}`}
                      >
                        <Tag tag="h4" text={description} />
                      </div>
                    ))}
                  </li>
                )}
                {infos && (
                  <li
                    className={`${cx('magneto-ui-candidate-overview-summary__text-container')} ${getSeparation(
                      ECandidateOverviewSeparation.MD,
                      infos.separation
                    )} ${getDirection(infos.direction)}`}
                  >
                    {infos.children?.map((info, index) => (
                      <div
                        key={`magneto-ui-candidate-overview-summary-info-${index}`}
                        className={`${pCx(...normalTextStyles)} ${getSeparation(
                          ECandidateOverviewSeparation.MD,
                          info.separation
                        )}`}
                      >
                        <Tag tag="p" text={info} />
                      </div>
                    ))}
                  </li>
                )}
              </ul>
            ))}
          </div>
        )}
        {descriptions && (
          <ul
            className={`${cx('magneto-ui-candidate-overview-summary__text-container')} ${getSeparation(
              ECandidateOverviewSeparation.MD,
              descriptions.separation
            )} ${getDirection(descriptions.direction)}`}
          >
            {descriptions.children?.map((description, index) => (
              <li
                key={`candidate-overview-description-${index}`}
                className={`${pCx(...normalTextStyles)} ${getSeparation(
                  ECandidateOverviewSeparation.MD,
                  description.separation
                )}`}
              >
                <Tag tag="p" text={description} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

/**
 * Molecule UI child component of candidate overview
 */
export const CandidateOverviewSummary = Component
