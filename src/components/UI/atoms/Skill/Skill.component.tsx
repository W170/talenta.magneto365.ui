import React from 'react'
import { ISkill } from './Skill.interface'
import styles from './Skill.module.scss'

const Component: React.FC<ISkill> = ({ skillText, skillLevel }) => {
  return (
    <div className={styles.SkillComponent}>
      <div className={styles['SkillWrapper']}>
        <h3>{skillText}</h3>
        <div className={`${styles.SkillBar} ${styles[skillLevel.toLowerCase()]}`}></div>
      </div>
    </div>
  )
}

/**
 * UI Atom component of Skill
 */

export const Skill = Component
