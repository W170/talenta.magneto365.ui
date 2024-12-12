import React, { useCallback } from 'react'
import { ICandidateOverviewSkillsProps } from './CandidateOverviewSkills.interface'
import { ICandidateOverviewText } from '../../CandidateOverview.interface'
import parentStyles from '../../CandidateOverview.module.scss'
import styles from './CandidateOverviewSkills.module.scss'
import { classNames } from '@shared/utils/common'
import { Skill } from '@components/UI/atoms'

const pCx = classNames.bind(parentStyles)
const cx = classNames.bind(styles)

const Component: React.FC<ICandidateOverviewSkillsProps> = ({ title, children }) => {
  const styles = useCallback((text: ICandidateOverviewText) => {
    return pCx(
      'magneto-ui-candidate-overview__text',
      text.size && `magneto-ui-candidate-overview__text--size-${text.size}`,
      text.color && `magneto-ui-candidate-overview__text--color-${text.color}`,
      text.weight && `magneto-ui-candidate-overview__text--weight-${text.weight}`
    )
  }, [])

  if (!title && !children) return null

  return (
    <section className={cx('magneto-ui-candidate-overview-skills')}>
      <div className={cx('magneto-ui-candidate-overview-skills__container')}>
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
          <ul className={cx('magneto-ui-candidate-overview-skills__list')}>
            {children.map((skill, index) => (
              <li
                key={`magneto-ui-candidate-overview-skill-${index + 1}`}
                className={cx('magneto-ui-candidate-overview-skills__list-item')}
              >
                <Skill {...skill} />
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
export const CandidateOverviewSkills = Component
