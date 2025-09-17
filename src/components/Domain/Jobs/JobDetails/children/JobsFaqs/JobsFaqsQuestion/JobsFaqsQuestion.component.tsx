import { ButtonLink } from '@components/UI/atoms'
import { ArrowRight2 } from '@constants/icons.constants'
import React from 'react'
import { IJobsFaqsQuestion } from './JobsFaqsQuestion.interface'
import styles from './JobsFaqsQuestion.module.scss'

export const JobsFaqsQuestion: React.FC<IJobsFaqsQuestion> = ({ question, href }) => {
  return (
    <ButtonLink
      buttonText={question}
      href={href}
      iconSize={16}
      prefixIcon={ArrowRight2}
      target="_blank"
      className={styles['magneto-ui-faqs--question']}
    />
  )
}
