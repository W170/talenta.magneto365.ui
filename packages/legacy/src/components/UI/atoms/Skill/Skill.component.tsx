import React from 'react'
import { classNames } from '@shared/utils/common'
import { ISkill } from './Skill.interface'
import styles from './Skill.module.scss'
import { Typography } from '../Typography'

const cx = classNames.bind(styles)

const Component: React.FC<ISkill> = ({ name, score, className, classNames = {} }) => {
  return (
    <div className={cx('skill', className)}>
      <Typography.Text className={cx('skill__name', classNames.name)}>{name}</Typography.Text>
      <div className={cx('skill__level', classNames.level)}>
        <div className={cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 1 })}></div>
        <div className={cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 2 })}></div>
        <div className={cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 3 })}></div>
        <div className={cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 4 })}></div>
      </div>
    </div>
  )
}

export const Skill = Component
