import React from 'react'
import styles from './JobSuggestedCard.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from './JobSuggestedCard.interface'
import { ActionButton } from './children/ActionButton'
import { JobSuggestedText } from './children/JobSuggestedText'
import { JobSuggestedTitle } from './children/JobSuggestedTitle'
import { JobSuggestedSection } from './children/JobSuggestedSection'
import { JobSuggestedLogo } from './children/JobSuggestedLogo'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard> = ({ children, className }) => {
  return <div className={cx('job-suggested-card', className)}>{children}</div>
}

export const JobSuggestedCard = Object.assign(Component, {
  Section: JobSuggestedSection,
  Title: JobSuggestedTitle,
  Button: ActionButton,
  Text: JobSuggestedText,
  Logo: JobSuggestedLogo
})
