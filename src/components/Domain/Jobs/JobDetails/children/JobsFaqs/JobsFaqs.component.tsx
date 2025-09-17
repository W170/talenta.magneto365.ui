import { IconItem } from '@components/UI/atoms'
import { QuestionCircle } from '@constants/icons.constants'
import React from 'react'
import { IJobsFaqs } from './JobsFaqs.interface'
import styles from './JobsFaqs.module.scss'

export const JobsFaqs: React.FC<IJobsFaqs> = ({ roundEdges, title, children }) => {
  const borderRadius = roundEdges ? styles['magneto-ui-faqs-rounded-corners'] : ''

  return (
    <div className={`${styles[`magneto-ui-faqs`]} ${borderRadius}`}>
      <div className={styles['magneto-ui-faqs__content']}>
        {title && (
          <div className={styles['magneto-ui-faqs__content--title']}>
            <IconItem alt={title} icon={QuestionCircle} hover={false} size={16} />
            <h3>{title}</h3>
          </div>
        )}
        <div className={styles['magneto-ui-faqs__content--children']}>{children}</div>
      </div>
    </div>
  )
}
