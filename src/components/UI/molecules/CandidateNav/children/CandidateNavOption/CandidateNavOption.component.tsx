import React from 'react'
import { TCandidateNavOption } from './CandidateNavOption.interface'
import { useCandidateNav } from '../../CandidateNav.context'
import styles from './CandidateNavOption.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)

const Component: React.FC<TCandidateNavOption> = ({ children, className, ...props }) => {
  const { onChangeOpen } = useCandidateNav()

  return (
    <li {...props} className={cs('magneto-ui-candidate-nav-option', className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { handleOptionsVisibility: onChangeOpen }) : child
      )}
    </li>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavOption = Component
