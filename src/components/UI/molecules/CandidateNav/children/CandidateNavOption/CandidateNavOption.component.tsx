import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from './CandidateNavOption.module.scss'
const cs = classNames.bind(styles)

const Component: React.FC = ({ children }) => {
  return <li className={cs('magneto-ui-candidate-nav-option')}>{children}</li>
}

export const CandidateNavOption = Component
