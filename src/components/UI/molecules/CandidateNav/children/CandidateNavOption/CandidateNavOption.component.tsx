import React from 'react'
import { TCandidateNavOption } from './CandidateNavOption.interface'
import styles from './CandidateNavOption.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)

const Component: React.FC<TCandidateNavOption> = ({ children, className, ...props }) => {
  return (
    <li {...props} className={cs('magneto-ui-candidate-nav-option', className)}>
      {children}
    </li>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavOption = Component
