import React from 'react'
import { TCandidateNavStep } from './CandidateNavStep.interface'
import styles from './CandidateNavStep.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)

const Component: React.FC<TCandidateNavStep> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cs('magneto-ui-candidate-nav-step', className)}>
      {children}
    </div>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavStep = Component
