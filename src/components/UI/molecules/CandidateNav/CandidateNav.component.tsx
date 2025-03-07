import React from 'react'
import { CandidateNavProvider } from './CandidateNav.context'
import { ICandidateNav } from './CandidateNav.interface'
import { classNames } from '@shared/utils/common'
import styles from './CandidateNav.module.scss'
import * as children from './children'

const cs = classNames.bind(styles)

const Component: React.FC<ICandidateNav> = ({ children, className, onShow, ...props }) => {
  return (
    <CandidateNavProvider onShow={onShow}>
      <div className={cs('magneto-ui-candidate-nav', className)} {...props}>
        {children}
      </div>
    </CandidateNavProvider>
  )
}

/**
 *  Molecule UI component of Candidate Nav
 */
export const CandidateNav = Object.assign(Component, children)
