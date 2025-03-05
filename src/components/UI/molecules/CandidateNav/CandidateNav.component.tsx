import React from 'react'
import { CandidateNavProvider } from './CandidateNav.context'
import * as children from './children'
import styles from './CandidateNav.module.scss'
import { classNames } from '@shared/utils/common'
const cs = classNames.bind(styles)

const Component: React.FC = ({ children }) => {
  return (
    <CandidateNavProvider>
      <div className={cs('magneto-ui-candidate-nav')}>{children}</div>
    </CandidateNavProvider>
  )
}
/**
 *  Molecule UI component of Candidate Navigation Bar
 */
export const CandidateNav = Object.assign(Component, children)
