import React from 'react'
import { IJobSkillsCard } from './JobSkillsCard.interface'
import { Skill, ISkill } from '../../atoms/Skill'
import styles from './JobSkillsCard.module.scss'

const Component: React.FC<IJobSkillsCard> = ({ jobSkillCardHeader, jobSkills }) => {
  return (
    <div className={styles.JobSkillsCardComponent}>
      <h1>{jobSkillCardHeader}</h1>
      <div className={styles['JobSkillsWrapper']}>
        {jobSkills.map(({ skillText, skillLevel }: ISkill, index: number) => (
          <React.Fragment key={index}>
            <Skill skillText={skillText} skillLevel={skillLevel} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

/**
 * UI Molecule component of Job Skills Card
 */

export const JobSkillsCard = Component
