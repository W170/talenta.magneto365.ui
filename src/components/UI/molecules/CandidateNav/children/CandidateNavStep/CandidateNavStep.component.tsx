import React from 'react'
import styles from './CandidateNavStep.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)

const Component: React.FC = ({ children }) => {
  return (
    <div className={cs('magneto-ui-candidate-nav-step')}>
      {children}
    </div>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavStep = Component
