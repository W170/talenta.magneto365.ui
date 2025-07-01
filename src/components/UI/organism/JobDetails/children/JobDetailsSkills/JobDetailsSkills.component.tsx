import React from 'react'
import { Skill } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import { IJobDetailsSkills } from './JobDetailsSkills.interface'
import styles from './JobDetailsSkills.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsSkills: React.FC<IJobDetailsSkills> = ({ children, className, skills }) => {
  return (
    <section className={cx('skills', className)}>
      {children}
      <ul className={cx('skills__list')}>
        {skills.map(({ name, score, id }) => (
          <li key={id}>
            <Skill id={id} name={name} score={score} />
          </li>
        ))}
      </ul>
    </section>
  )
}
