import React, { Fragment } from 'react'
import { IJobSkillsCard } from './JobSkillsCard.interface'
import { Skill, ISkill } from '../../atoms/Skill'
import styles from './JobSkillsCard.module.scss'

const Component: React.FC<IJobSkillsCard> = ({ offerSkillsLabel, offerSkills }) => {
  return (
    <Fragment>
      {offerSkills && offerSkills.length >= 1 && (
        <div className={styles['magneto-ui-job-skills-card']}>
          <h2>{offerSkillsLabel}</h2>
          <div className={styles['magneto-ui-job-skills-card__skills-wrapper']}>
            {offerSkills?.map(({ name, score, id }: ISkill) => (
              <React.Fragment key={`${id}-JobSkillsCard`}>
                <Skill id={id} name={name} score={score} />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  )
}

/**
 * UI Molecule component of Job Skills Card
 */

export const JobSkillsCard = Component
