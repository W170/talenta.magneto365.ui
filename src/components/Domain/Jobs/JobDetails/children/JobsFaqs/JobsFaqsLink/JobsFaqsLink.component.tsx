import { ButtonLink } from '@components/UI/atoms'
import { ArrowRight2 } from '@constants/icons.constants'
import React from 'react'
import { IJobsFaqsLink } from './JobsFaqsLink.interface'
import styles from './JobsFaqsLink.module.scss'

export const JobsFaqsLink: React.FC<IJobsFaqsLink> = ({ text, href }) => {
  return (
    <ButtonLink
      buttonText={text}
      href={href}
      iconSize={16}
      prefixIcon={ArrowRight2}
      target="_blank"
      className={styles['magneto-ui-faqs--buttonLink']}
    />
  )
}
